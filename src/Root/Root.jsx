import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    const location = useLocation()
    useEffect(()=>{
        const routeTitles = {
            "/" : "Eco-Adventure || Home",
            "/myprofile" : "Eco-Adventure || My-Profile",
            "/updateprofile" : "Eco-Adventure || Update-Profile",
            "/auth/login" : "Eco-Adventure || Login",
            "/auth/register" : "Eco-Adventure || Register",
        }
        const title = routeTitles[location.pathname] || "Eco-Adventure || Adventure-Detail"
        document.title = title
    },[location])
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <div className='bg-base-200'>
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Root;