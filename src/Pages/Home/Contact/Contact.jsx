import React from 'react';
import logo1 from '../../../assets/portfolio/luxurious lady.jpg';
import map from '../../../assets/background/google map(2).jpg';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';

// import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
       <div>
        <h1 className='text-4xl font-bold text-center mt-16 mb-10'>Contact Information</h1>
         <div className='flex flex-col lg:flex-row-reverse p-10 bg-black text-white mt-16'>
        <div className='flex-1 w-64'>
          {/* form side */}
        
         <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
         <div className="mb-8 text-center">
             <h1 className="uppercase text-sm font-bold text-left">Get in Touch</h1>
             <p className='text-4xl font-bold text-left mt-4'>Let's Discuss Projects</p>
             <p className='text-left mt-6'>Get in touch with us for any kind of help. We are here to give you the best and also here to help you to find your projects.</p>
     
         </div>
         <form onSubmit={sendEmail} className="space-y-6">
         <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="Subject" className="text-sm">Subject</label>
					<input id="Subject" type="text" placeholder="Subject name" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" rows="3" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="message" className="text-sm">Message</label>
                    <textarea
                        id="message"
                        class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                        rows="4"
                        placeholder="Enter your message..."
                    ></textarea>
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
           <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><AiFillPhone /></button>Phone <br/>+8801 617727956</p> 
         <p className="font-bold">
           <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><MdEmail /></button>Email <br/> foridaparven89@gmail.com</p> 
         <p className="font-bold">
           <button className='p-4 bg-slate-800 mt-3 mr-8 rounded-md'><FaAddressCard /></button>Address <br/> 745,Mosjid Goli,Middle Rampur,<br/>Chittagong Bangladesh</p> 
     <div>
        <img className='rounded-lg w-30' src={map}/>
     </div>
       </div> 
       <div>
         
        
       </div>
     </div>
     {/* another part */}
     
     
             </div>
       </div>
    );
};

export default Contact;