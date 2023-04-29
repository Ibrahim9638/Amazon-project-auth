import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

   const {user, logOut} = useContext(AuthContext)
   const handleLogOut = ()=>{
        logOut()
        .then(result =>{})
        .catch(error=>{console.log(error.message);})
   }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sing up</Link> 
                {user && <span className='text-white m-2'>Welcome {user.email} <button onClick={handleLogOut} className='bg-red-600 border'>Logout</button></span>}
            </div>
        </nav>
    );
};

export default Header;