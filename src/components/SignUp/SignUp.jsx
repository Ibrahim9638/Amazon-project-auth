import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';

const SignUp = () => {
    return (
        <div>
            <h2 className='text-rose-800 mx-auto w-1/6 mt-10 text-3xl font-bold'>Please Sign Up</h2>
            <div class="mx-auto w-1/3 mt-6 ">
                <form class="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-6 ">

                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email 
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email"/>
                    </div>
                    
                    <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter the password" name='password' />
                    </div>

                    <div class="mb-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Confirm Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter the Confirm password" name='password' />
                    </div>

                    <div class="flex items-center justify-between ">
                    <button class="bg-orange-200 w-full hover:bg-orange-400  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign Up
                    </button>
                    </div>
                    <div className='mt-6 text-center'>
                        <p>Already Have an account? <small className='text-orange-400'> <Link to='/login'>Login</Link> </small></p>
                    </div>
                    <div className='text-center  mt-4'>
                        <p>------------------- or ---------------</p>
                    </div>
                    <div>
                        <img src={google} alt="" className='w-4/5 mx-auto rounded border-2 border-orange-200 mt-3' />
                    </div>
                </form>

</div>
        </div>
    );
};

export default SignUp;