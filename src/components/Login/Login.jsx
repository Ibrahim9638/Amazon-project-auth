import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [show, setShow] = useState(false);
    console.log(location);

    const from  = location.state?.from?.pathname || '/';


    const handleWithLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedSignIn = result.user;
            console.log(loggedSignIn);
            navigate(from, { replace: true });
        })

        .catch(error =>{
            console.log(error);
            setError(error.message)
            
        })
    }

  return (
    <div>
      <h2 className="text-rose-800 mx-auto w-1/6 mt-10 text-3xl font-bold">
        Please Login
      </h2>
      <div className="mx-auto w-1/3 mt-6 bg-white shadow-md rounded px-10 pt-8 pb-10 mb-6 ">
        <form onSubmit={handleWithLogin} >
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
              type={show ? "text": "password"}
              name="password"
              placeholder="Enter the password"
            />
            <p onClick={()=> setShow(!show)}><small>
                {
                    show ? <span>Hide Password</span>: <span>Show Password</span>
                }
                </small></p>
          </div>

          <div className="flex items-center justify-between ">
            <input
              type="submit"
              value="Login"
              className="bg-orange-200 w-full hover:bg-orange-400  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
        <p>{error}</p>


      </div>
    </div>
  );
};

export default Login;
