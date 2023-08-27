import React from 'react';
import './Myself.css';
import imageMine from '../../../assets/portfolio/anne-removebg-preview (3).png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';


const Myself = () => {
    return (
        <div className='myImage flex-container'>
           
           <div className='text-box'>
            <p className='text-2xl font-bold'>I'M</p>
            <h1 className='text-8xl text-bisque-300 font-bold'>Forida Parven <br/> Anne</h1>
          
          <button className='text-2xl ml-4'>
          <h2 className='text-2xl font-bold px-4 py-4'>I am a
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
          

            <button className='p-3 click font-serif bg-black rounded-lg'>Explore My Portfolio<button className='p-3'><BsFillArrowRightCircleFill/></button></button>
            <button className='p-3 click font-serif bg-black rounded-lg m-0 lg:ml-8'>Connect With Me<button className='p-3'><BsFillArrowRightCircleFill/></button></button>
            </div> 
            <div>
            <img className='w-96' src={imageMine} alt="" />
            </div> 
        </div>
    );
};

export default Myself;