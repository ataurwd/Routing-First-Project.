import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook, FaGoogle } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="dark:bg-gray-100 dark:text-gray-900 bgGradientPriceing">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600 justify-between">
            <div className="flex-none hidden md:flex space-x-6">
                <NavLink to="/home" className="hover:text-primary">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary">About</NavLink>
                <NavLink to="/service" className="hover:text-primary">Services</NavLink>
                <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
            </div>
            <div className="flex justify-center space-x-4">
            <NavLink to="/instagram" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaInstagram className="w-4 h-4" />
            </NavLink>
            <NavLink to="/pinterest" title="Pinterest" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaPinterest className="w-4 h-4" />
            </NavLink>
            <NavLink to="/twitter" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaTwitter className="w-4 h-4" />
            </NavLink>
            <NavLink to="/facebook" title="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaFacebook className="w-4 h-4" />
            </NavLink>
            <NavLink to="/gmail" title="Gmail" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50">
                <FaGoogle className="w-4 h-4" />
            </NavLink>
        </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer;