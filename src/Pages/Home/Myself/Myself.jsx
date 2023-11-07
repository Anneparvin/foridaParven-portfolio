import React from 'react';
import './Myself.css';
import imageMine from '../../../assets/portfolio/anne-removebg-preview (3).png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';



const Myself = () => {
    return (
       
        <div className='flex lg:flex-row flex-col'>
            
            <div className='bg-amber-100 flex-1 lg:w-32 w-full lg:p-4 p-6 text-yellow-800'>
            <div className='bg-lime-100 lg:p-4 p-1'>
            <p className='text-2xl font-bold'>I'M</p>
             <h1 className='text-8xl font-bold shadow-lg shadow-orange-500/20'>Forida Parven <br/> <span className='lg:ml-52 ml-2'>Anne</span></h1> 

            </div>
             <button className='text-2xl lg:ml-32 ml-2.5'>
           <h2 className='text-4xl font-bold px-4 py-4'>I am a
          <Typewriter
                options={{
                    strings: ['Web Developer',
                     'Frontend Developer',
                     'Backend Developer',
                     'React Developer'
                    ],
                    autoStart: true,
                    loop: true,
                }}
                />
                </h2>
          </button>
         <div className='lg:ml-32 ml-2 lg:mt-12 mt-8'>
         <button className='p-3 click font-serif bg-stone-400 text-yellow-900 font-bold shadow shadow-md shadow-gray-600/100 hover:shadow-lime-500/60 rounded-lg text-amber-100'>Explore My Portfolio<button className='p-3'><BsFillArrowRightCircleFill/></button></button>
            <button className='p-3 click font-serif bg-stone-400 text-yellow-900 font-bold shadow shadow-md shadow-gray-600/100 hover:shadow-lime-500/60 rounded-lg m-6 lg:ml-8 text-amber-100'>Connect With Me<button className='p-3'><BsFillArrowRightCircleFill/></button></button>
         </div>
            </div>
            <div className='bg-amber-200 flex-1 lg:w-64 w-full lg:p-2 p-6'>
               
                <div className="relative flex min-h-screen justify-center items-center overflow-hidden py-6 sm:py-12">

                <div className='relative spin-left p-48 flex justify-center items-center border lg:w-72 w-full h-72 rounded-full border-gray-400'>
            <div className='border border-gray-400 relative flex justify-center items-center rounded-full'>
            <div className='rounded-full border border-gray-400 p-[1px] m-6 w-72 h-72 overflow-hidden'>
                <img className='w-full' src={imageMine} alt="" srcset="" />
            </div>
            <div className='absolute p-1 flex justify-center items-center bg-black shadow-lg overflow-hidden left-0 -translate-x-1/2 w-10 h-10 rounded-full'>
                <img className='w-full animate-[spin_45s_linear_infinite]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt="" srcset="" />
            </div>
            <div className='absolute border flex justify-center items-center bg-gray-50 shadow-xl drop-shadow-2xl overflow-hidden top-0 -translate-y-1/2 w-24 h-24 rounded-full'>
                <img className='w-full animate-[spin_45s_linear_infinite]' src='https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png' alt="" srcset="" />
            </div>
            <div className='absolute border flex justify-center items-center bg-gray-50 drop-shadow-2xl overflow-hidden top-0 right-0 -translate-y-0.5/4 w-16 h-16 rounded-full'>
                <img className='w-full animate-[spin_45s_linear_infinite]' src='https://i.ibb.co/hKYM3zP/mongodb-svgrepo-com.png' alt="" srcset="" />
            </div>

            <div className='absolute border-gray-400 flex justify-center items-center bg-gray-50 shadow-lg overflow-hidden bottom-0 right-0 -translate-y-1/4 w-[4.5rem] h-[4.5rem] rounded-full'>
                <img className='w-full animate-[spin_45s_linear_infinite]' src='https://i.ibb.co/JQMFPy3/pngwing-com.png' alt="" srcset="" />
            </div>
            </div>
            

            <div className='absolute border p-1 flex justify-center items-center bg-gray-700/80 backdrop-blur-sm shadow-lg overflow-hidden bottom-0 translate-y-1/2 w-20 h-20 rounded-full'>
                <img className='w-4/5 animate-[spin_45s_linear_infinite]' src='https://riaj.xyz/static/media/tailwind.017e1e304e12384d156d384f40a4b5f8.svg' alt="" srcset="" />
            </div>

            <div className='absolute border p-1 border-gray-400 flex justify-center items-center bg-gray-50 shadow-lg overflow-hidden right-0 translate-x-1/2 w-[3.5rem] h-[3.5rem] rounded-full'>
                <img className='w-full animate-[spin_45s_linear_infinite]' src='https://cdn-icons-png.flaticon.com/512/919/919832.png' alt="" srcset="" />
            </div>
        </div>
                </div>
  </div>
</div>

           
    );
};

export default Myself;