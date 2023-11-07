import React from 'react';
import logo from '../../../assets/favicon/logo-removebg-preview.png'
import './Navbar.css'

const Navbar = () => {
	return (
<div className="navbar bg-amber-100 lg:p-4 p-2">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Blog</a></li>
      <li><a>Feature</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <img className='lg:w-24 w-20 animate-pulse navbar-start' src={logo} alt='pic'/>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
     <li><a href="#" className="text-yellow-800 font-serif font-bold nav-item">Home</a></li>
                <li><a href="#" className="text-yellow-800 font-serif font-bold nav-item">About</a></li>
                <li><a href="#" className="text-yellow-800 font-serif font-bold nav-item">Contact</a></li>
                <li><a href="#" className="text-yellow-800 font-serif font-bold nav-item">Blog</a></li>
                <li><a href="#" className="text-yellow-800 font-serif font-bold nav-item">Feature</a></li>
  </ul>
</div>
<div className="navbar-end">
<button className="flex space-x-7 px-12 py-3 rounded-md bg-stone-400 text-yellow-900 font-bold shadow shadow-md shadow-gray-600/100 hover:shadow-lime-500/60 lg:display">Hire Me</button>
</div>
</div>
	);
};

export default Navbar;