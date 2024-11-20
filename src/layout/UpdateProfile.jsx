import { useContext } from "react";
import { AuthContext } from "../components/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UpdateProfile = () => {
  const { manageProfile, setUser, user } = useContext( AuthContext )
  const navigate = useNavigate()

  const handleSubmit = ( e ) =>{
    e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value
    // console.log(name, photo);
    manageProfile( name, photo )
      .then( () =>{
        setUser({ ...user, displayName: name, photoURL : photo})
        navigate('/myprofile')
        toast.success("Successfully updated Name and Photo URL") 
      })
    
  }
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-xl mx-auto bg-white py-10 border-2 rounded-2xl">
        <h1 className="text-center font-bold text-3xl mb-5">Update Profile</h1>
        
        <div className="card max-w-lg mx-auto  w-full shrink-0">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
