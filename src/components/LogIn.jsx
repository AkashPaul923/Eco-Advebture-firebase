import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";

const LogIn = () => {
  const { handleSignIn } = useContext(AuthContext)
  const handleSubmit = ( e ) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(email, password);
    handleSignIn( email, password )
  }
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl">
        <h1 className="text-center font-bold text-3xl">Login</h1>
        
        <div className="card max-w-lg mx-auto  w-full shrink-0">
        <div><button className="btn block my-5 text-center mx-auto"> Login with Google</button></div>
        <div className="divider mb-0">OR</div>
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">Does'n have an account? <Link className="text-red-500" to="/auth/register">register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
