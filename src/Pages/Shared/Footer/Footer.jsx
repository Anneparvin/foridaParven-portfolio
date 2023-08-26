import React from 'react';
import logo1 from '../../../assets/portfolio/luxurious lady.jpg';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
import { FcBusinesswoman } from 'react-icons/fc';

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row-reverse p-10 bg-black text-white'>
   <div className='flex-1 w-64'>
     {/* form side */}
   
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="uppercase text-sm font-bold text-left">Get in Touch</h1>
        <p className='text-4xl font-bold text-left mt-4'>Let's Discuss Projects</p>
        <p className='text-left mt-6'>Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your projects.</p>

	</div>
	<form novalidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-secondary">Send Message</button>
			</div>
			
		</div>
	</form>
</div>
   </div>

            <div className='flex-1 w-64 ml-8'>

            {/*  contact side */}

  <div>
   <img className='rounded-lg w-30' src={logo1} alt='pic'/>
    <p className="font-bold">
      <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><AiFillPhone /></button>PHONE <br/>+8801 617727956</p> 
    <p className="font-bold">
      <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><MdEmail /></button>Email <br/> foridaparven89@gmail.com</p> 
    <p className="font-bold">
      <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><FaAddressCard /></button>Address <br/> 745,Mosjid Goli,Middle Rampur,<br/>Chittagong Bangladesh</p> 

  </div> 
  <div>
    {/* <h1 className='text-2xl'> <FcBusinesswoman />Social Site </h1> */}
    <p className="font-bold">
      <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md w-30'><FcBusinesswoman /></button>Social Site</p> 
    <div className="grid grid-flow-col gap-4 mt-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Footer;