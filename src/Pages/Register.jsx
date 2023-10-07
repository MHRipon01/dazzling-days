import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const address = form.get('address')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,name,address,password);
        
        
        //CREATE USER   
        
        createUser(email,password) 
            .then(result => {
                console.log(result.user);
            } )
            .catch( error => {
                console.error(error)
            })
        
    }


    return (
        <div>
           <div className="h-[80vh] md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-4xl font-bold text-center mt-28">Please Register.</h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
         
        <label className="label">
            <span className="label-text">Name</span>
          </label>
        <input
            type="text" name="name"
            placeholder="Your Name"
            className="input input-bordered"
            
          />

<label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text" name="address"
            placeholder="Your Address"
            className="input input-bordered"
          />
         
         
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email" name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password" name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-fuchsia-300">Register</button>
        </div>
      </form>
      <p className="text-center text-lg ">Already have an account? Please <Link className="font-bold text-lg text-fuchsia-300" to='/login'>Login</Link> </p>
    </div>
        </div>
    );
};

export default Register;