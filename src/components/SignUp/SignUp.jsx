import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import google from "../../images/google.png";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext)
  const {googleSignIn} = useContext(AuthContext)
  


  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm = event.target.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("Password not match");
      return;
    }
    else if(password.length < 6){
        setError('Password given at least 6 character');
        return;
    } 
    createUser(email, password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error =>{
      console.log(error);
      setError(error.message)
    })



  };

  const googleSingIn =()=>{
    googleSignIn (auth, provider)
    .then(result=>{
      const googleLogged = result.user;
      console.log(googleLogged);
    }) 
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div>
      <h2 className="text-rose-800 mx-auto w-1/6 mt-10 text-3xl font-bold">
        Please Sign Up
      </h2>
      <div className="mx-auto w-1/3 mt-6 bg-white shadow-md rounded px-10 pt-8 pb-10 mb-6 ">
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter the password"
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm"
              type="password"
              placeholder="Enter the Confirm password"
              name="confirm"
            />
          </div>

          <div className="flex items-center justify-between ">
            <input
              type="submit"
              value="Sign Up"
              className="bg-orange-200 w-full hover:bg-orange-400  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
        <p className="text-center text-red-800 mt-6">{error}</p>

        <div className="mt-10 text-center">
          <p>
            Already Have an account?{" "}
            <small className="text-orange-400">
              {" "}
              <Link to="/login">Login</Link>{" "}
            </small>
          </p>
        </div>
        <div className="text-center  mt-4">
          <p>------------------- or ---------------</p>
        </div>
        <div >
          <img onClick={googleSingIn}
            src={google}
            alt=""
            className="w-4/5 mx-auto rounded border-2 border-orange-200 mt-3"
          />
        </div>
      </div>

    </div>
  );
};

export default SignUp;
