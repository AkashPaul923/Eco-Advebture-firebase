import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";
import Swal from 'sweetalert2'

const ResetPassword = () => {
    const {handleResetPassword} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const [email, setEmail] = useState(location.state)

    const handleEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value) 
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleResetPassword(email)
        .then(() =>{
            Swal.fire({
                title: 'Successfully Email sended',
                text: 'Please Check your email-box for reset password',
                icon: 'success',
                confirmButtonText: 'cancel'
            })
            navigate("/auth/login")
        })
    }
  return (
    <div>
      <div
        className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-center mb-6 font-bold text-3xl">Password Reset</h1>

        <div className="card max-w-lg mx-auto  w-full shrink-0">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={handleEmailChange}
                type="email"
                placeholder="email"
                value={email}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
