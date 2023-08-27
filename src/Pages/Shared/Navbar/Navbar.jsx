import React from 'react';
import logo from '../../../assets/portfolio/luxurious lady.jpg'

const Navbar = () => {
    return (
        <div>
           <header className="p-4 bg-black text-white">
	<div className="flex justify-between h-16 mx-auto">
        
        <div>
            
        <p className='text-6xl font-semibold text-orange-400'>Forida<span className='text-2xl text-lime-500'>Parven</span></p>
        
        </div>
       
       
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#Services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Services</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#Feature" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Feature</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#AboutMe" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">AboutMe</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#Blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#Contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact</a>
			</li>
		</ul>
		<div className="text-right">
		
			<button className="self-center px-8 py-3 font-semibold rounded bg-lime-600 shadow-xl">Hire Me</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header> 
        </div>
    );
};

export default Navbar;