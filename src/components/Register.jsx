import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { handleRegister, manageProfile , handleGoogleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleSubmit = ( e ) =>{
    e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(name, photo, email, password);
    handleRegister( email, password )
    .then(() =>{
      manageProfile( name, photo )
      navigate("/")
    })
  }
  const handleGoogle = () => {
    handleGoogleSignIn()
    .then(res=>{
      navigate("/")
    })
  }
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl">
        <h1 className="text-center font-bold text-3xl mb-5">Create an Account</h1>
        
        <div className="card max-w-lg mx-auto  w-full shrink-0">
            <button onClick={handleGoogle} className="btn btn-outline btn-info text-center mx-auto flex"><FaGoogle></FaGoogle> <span>Login with Google</span></button> 
            <div className="divider mb-0">OR</div>
          <form onSubmit={handleSubmit} className="card-body pt-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">Already have an account? <Link className="text-red-500" to="/auth/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
