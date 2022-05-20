import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <div>
            <NavLink to='/' className="btn btn-ghost normal-case text-xl text-center w-full md:hidden block pt-2">Positivity Squad</NavLink>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/donation'>Donation</NavLink></li>
                            <li><NavLink to='/events'>Events</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>

                        </ul>
                    </div>
                    <NavLink to='/' className="btn btn-ghost normal-case text-xl hidden md:block">Positivity Squad</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/donation'>Donation</NavLink></li>
                        <li><NavLink to='/events'>Events</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        {
                            user &&
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <button className="btn mr-2"
                            onClick={handleSignOut}>
                            Logout
                            <FontAwesomeIcon icon={faSignOut} className='pl-2'></FontAwesomeIcon>
                        </button>
                        :
                        <NavLink to='/login' className="btn mr-2">Login</NavLink>
                    }
                    <NavLink to='/admin' className="btn">Admin</NavLink>

                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Header;