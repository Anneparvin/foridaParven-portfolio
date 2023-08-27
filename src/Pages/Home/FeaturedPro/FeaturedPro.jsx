import React from 'react';
import './FeaturedPro.css';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const FeaturedPro = () => {
    return (
      <div>
        <div>
            <hr className='w-screen mx-auto mb-16 bg-slate-600 mt-8'/>
          </div>
        <h1 className=' text-4xl font-bold mb-10 text-center'>Featured Projects</h1>
         <div className='grid w-4/5 mx-auto rounded-lg'>
        <div className='bgimg1 lg:p-4 p-6'>
       

  <ul class="mt-4 card font-bold">
    <li>
      <a
        href="https://toymaster-1eeeb.web.app
        "
        class="block lg:h-full h-auto rounded-lg bg-gray-200 hover:bg-gray-700 lg:p-4 p-1"
      >
        <strong class="font-2xl">Project 1</strong>
        <p class="mt-1 text-xl font-medium">
        Musical toy website is an online<br></br> platform that specializes in selling and promoting.
        </p>
        <button className='p-2 bg-secondary font-bold rounded-sm text-black mt-4'>View Project<button className='ml-4 rounded-md'><BsFillArrowRightSquareFill/></button></button>
      </a>
    </li>
  </ul>

        </div>
        <div className='bgimg2 mt-4 lg:p-4 p-6'>
        <ul class="mt-4 card font-bold">
    <li>
      <a
        href="https://chef-krunch.web.app
        "
        class="block lg:h-full h-auto rounded-lg bg-gray-200 hover:bg-gray-700 hover:scale-110 lg:p-4 p-1"
      >
        <strong class="font-2xl">Project 2</strong>
        <p class="mt-1 text-xl font-medium">
        Musical toy website is an online<br></br> platform that specializes in selling and promoting.
        </p>
        <button className='p-2 bg-secondary font-bold rounded-sm text-black mt-4'>View Project<button className='ml-4 rounded-md'><BsFillArrowRightSquareFill/></button></button>
      </a>
    </li>
  </ul>
        </div>
        <div className='bgimg3 mt-4 lg:p-4 p-6'>
        <ul class="mt-4 card font-bold">
    <li>
      <a
        href="https://fashionmaster-64d4f.web.app
        "
        class="block lg:h-full h-auto rounded-lg bg-gray-200 hover:bg-gray-700 lg:p-4 p-1"
      >
        <strong class="font-2xl">Project 3</strong>
        <p class="mt-1 text-xl font-medium">
        Musical toy website is an online<br></br> platform that specializes in selling and promoting.
        </p>
        <button className='p-2 bg-secondary font-bold rounded-sm text-black mt-4'>View Project<button className='ml-4 rounded-md'><BsFillArrowRightSquareFill/></button></button>
      </a>
    </li>
  </ul>
        </div>
       </div>
      </div>
    );
};

export default FeaturedPro;