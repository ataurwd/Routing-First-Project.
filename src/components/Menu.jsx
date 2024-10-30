import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

const Menu = () => {
    return (
        <div className=''>
           <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <NavLink to="/" className="text-2xl font-bold text-primary">DevZone</NavLink>
            </div>

            <nav className="flex-none hidden md:flex space-x-6">
                <NavLink to="/home" className="hover:text-primary">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary">About</NavLink>
                <NavLink to="/service" className="hover:text-primary">Team</NavLink>
                <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
            </nav>
        </div>
        <Outlet/>
        <Footer/>
        </div>
    );
};

export default Menu;