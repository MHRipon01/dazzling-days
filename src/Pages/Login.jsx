import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup } from "firebase/auth";


const Login = () => {

  const {signIn,auth ,user ,googleLogin} = useContext(AuthContext)

  const navigate = useNavigate()

  const location = useLocation()
  console.log('in lgn',location);



    const handleLogin = e => {
      e.preventDefault();
      const form =new FormData(e.currentTarget)
      const email = form.get('email')
      const password = form.get('password')
      console.log(email ,password);
      signIn(email,password)
      .then(result => {
        console.log(result.user);
        toast('Welcome back!')

        navigate(location?.state ? location.state : '/' )

      })
      .catch( error => {
        console.error(error)
      })
    }

    const handleGoogleLogin = () => {
      signInWithPopup(auth , googleLogin )
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    })
    }



  return (
    <div className="h-[80vh] md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="text-4xl font-bold text-center mt-28">Please Login First</h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
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
          <button className="btn bg-fuchsia-300">Login</button>
        </div>
      </form>
      <p className="text-center text-lg ">Do not have an account? Please <Link className="font-bold text-lg text-fuchsia-300" to='/register'>Register</Link> </p>

      <div>
        <button onClick={handleGoogleLogin} className="text-3xl btn mt-20 font-bold bg-pink-300 justify-center text-center items-center flex w-full">Login with Google</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
