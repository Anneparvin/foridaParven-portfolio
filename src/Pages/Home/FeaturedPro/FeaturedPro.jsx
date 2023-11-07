import React from 'react';
import './FeaturedPro.css';
// import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const FeaturedPro = () => {
    return (
      <div className='bg-amber-100'>
        <h1 className=' text-4xl font-bold mb-10 text-center underline'>Featured Projects</h1>
         <div className='grid lg:w-4/5 w-full mx-auto rounded-lg'>
        <section className='top-banner flex mb-12'>
        <div className="half-width">
               <h1 className='text-2xl'>Welcome To</h1>
               <h1 className='text-2xl'><span className="text-yellow-700 text-4xl font-bold">Musical Toy</span> Project</h1>
               <p>Musical toy websites feature an extensive catalog of toys & instruments.                                                         <span className='font-bold'>Features:</span> ● Students can buy toys and learn from the teachers.<br/>                                                              ● Customer reviews and ratings play a crucial role.<br/>                                                                                                                                  ● This website has user authentication, a private route, curd operations and Interactive features.<br/>
               <span className='font-bold'> Technology Used:</span> React Router, Tailwind, React Hook Form, Firebase, MongoDB, Express.JS Etc.</p>
              
          </div>
          <div className="half-width pr-8">
          <div className="card w-full pr-4 items-center bg-yellow-700 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Musical Toy!</h2>
    <p>Musical toy websites feature an extensive catalog of toys & instruments.</p>
    <div className="card-actions justify-end">
    <button className="link-button mt-4 lg:px-8 px-2 lg:py-2 py-4"><a href="https://toymaster-1eeeb.web.app/">Go to Link</a></button>
    </div>
  </div>
</div>
          </div>
        </section>
        <section className='top-banner flex mb-12'>
        <div className="half-width">
               <h1 className='text-2xl'>Welcome To</h1>
               <h1 className='text-2xl'><span className="text-lime-700 text-4xl font-bold">Chef Crunch</span> Project</h1>
               <p>Chef Crunch websites are dedicated to sharing recipes, cooking tips, and food-content.<br/>                                                         <span className='font-bold'>Features:</span> ● Users can add recipes Howmany they want and it will be added
              to the main product list.
              ● Users can see all recipes by list and their details including their
              own products.
              ● This website has user authentication, a private route, and crud
              operations.<br/>
               <span className='font-bold'> Technology Used:</span> React, React Router, Tailwind, React Hot Toast,
              sweet alert2, React Icon, Firebase, MongoDB,ExpressJS Etc.</p>
              
          </div>
          <div className="half-width pr-8">
          <div className="card w-full pr-4 items-center bg-lime-700 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Chef Crunch!</h2>
    <p>Chef Crunch websites are dedicated to sharing recipes, cooking tips, and food-content.</p>
    <div className="card-actions justify-end">
    <button className="link-button mt-4 lg:px-8 px-2 lg:py-2 py-4"><a href="https://chef-krunch.web.app/">Go to Link</a></button>
    </div>
  </div>
</div>
          </div>
        </section>
        <section className='top-banner flex mb-12'>
        <div className="half-width">
               <h1 className='text-2xl'>Welcome To</h1>
               <h1 className='text-2xl'><span className="text-stone-600 text-4xl font-bold">Fashion Design</span> Project</h1>
               <p>fashion design website is showcasing fashion-related class & content.<br/>                                <span className='font-bold'>Features:</span> ● Students can select & buy their choosable class,it can show their
              dashboard .<br/> 
              ● Admin can see all the students, Instructores & all users. He can
              remove any instructor,can approve or deny any class.<br/> 
              ● This website has user authentication, a private route ,Dashboard
              and a dynamic route.<br/> 
               <span className='font-bold'> Technology Used:</span> React Router, Tailwind, React Hook Form, Firebase, MongoDB, Express.JS Etc.</p>
              
          </div>
          <div className="half-width pr-8">
          <div className="card w-full pr-4 items-center bg-stone-600 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Fashion Design!</h2>
    <p>fashion design website is showcasing fashion-related class & content.</p>
    <div className="card-actions justify-end">
    <button className="link-button mt-4 lg:px-8 px-2 lg:py-2 py-4"><a href="https://fashionmaster-64d4f.web.app/">Go to Link</a></button>
    </div>
  </div>
</div>
          </div>
        </section>
      </div> 
      </div>
    );
};
  

export default FeaturedPro;