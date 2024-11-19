import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.init"


export const AuthContext = createContext('')


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        signInWithPopup( auth, googleProvider )
    }

    const handleRegister = ( email, password ) => {
        return createUserWithEmailAndPassword( auth , email, password)
    }

    const handleSignIn = ( email, password ) =>{
        signInWithEmailAndPassword( auth, email, password)
    }

    const handleSignOut = () =>{
        signOut( auth )
    }

    const manageProfile = ( name, photo ) =>{
        updateProfile( auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            // console.log(currentUser);
            if( currentUser ){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            setLoader(false)

            return () =>{
                unsubscribe()
            }
        })
    },[])

    const authInfo = {
        user,
        handleGoogleSignIn,
        handleRegister,
        handleSignIn,
        handleSignOut,
        manageProfile,
        loader
    }
    return (
        <AuthContext.Provider value={ authInfo }>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;