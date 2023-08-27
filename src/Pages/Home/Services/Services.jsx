import React from 'react';
import Typewriter from 'typewriter-effect';
import myImage from '../../../assets/portfolio/marriageday.jpg'
import { BiFingerprint,BiIntersect,BiGridAlt } from 'react-icons/bi';

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-4/5 mx-auto'>
         <div>
         <h3 className='text-grey-300 text-ellipsis'>SERVICES</h3>
          <p className='text-4xl font-bold text-left'>
          <Typewriter
                options={{
                    strings: ['Get a powerful website that delivers results with an all-in-one solution'
                    ],
                    autoStart: true,
                    loop: true,
                }}
                /> </p> 
         </div>
         <div>
         <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div class="flex items-center gap-4">
    <img
      alt="Developer"
      src={myImage}
      class="h-16 w-16 rounded-full object-cover"
    />

    <div>
      <h3 class="text-lg font-medium text-white">Forida Parven</h3>

      <div class="flow-root">
        <ul class="-m-1 flex flex-wrap">
          <li class="p-1 leading-none">
            <a href="#" class="text-xs font-medium text-gray-300"> Twitter </a>
          </li>

          <li class="p-1 leading-none">
            <a href="https://github.com/Anneparvin" class="text-xs font-medium text-gray-300"> GitHub </a>
          </li>

          <li class="p-1 leading-none">
            <a href="https://www.facebook.com/profile.php?id=100010559986295&viewas=100000686899395&privacy_source=timeline_gear_menu" class="text-xs font-medium text-gray-300">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white"><button className='p-4'><BiFingerprint/></button>WEB DESIGN</strong>

        <p class="mt-1 text-xs font-medium text-gray-300 hover:text-lime-600">
        Web designer expert is a professional with advanced knowledge, skills, and experience in the field of web design. They are highly proficient in creating visually appealing and functional websites that meet the needs of clients and users.  
        </p>
      </a>
    </li>

    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white"><button className='p-4'><BiGridAlt/></button>UI/UX DESIGNER</strong>

        <p class="mt-1 text-xs font-medium text-gray-300  hover:text-green-600">
        A UI/UX (User Interface/User Experience) designer is a specialized professional who focuses on creating digital experiences that are both visually appealing and user-friendly. UI/UX designers work to ensure that websites, apps, and other digital products are not only aesthetically pleasing but also intuitive, easy to navigate, and provide a positive user experience.
        </p>
      </a>
    </li>
    <li>
      <a
        href="#"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white"><button className='p-4'><BiIntersect/></button>USER RESEARCH</strong>

        <p class="mt-1 text-xs font-medium text-gray-300  hover:text-lime-600">
        User research is a critical component of the design process that involves studying and understanding the needs, behaviors, preferences, and motivations of users to create products and experiences that cater to their requirements. It provides designers and developers with valuable insights that help guide the design decisions and improve the user experience. 
        </p>
      </a>
    </li>
  </ul>
</article>
{/* 2 */}


         </div>
        </div>
    );
};

export default Services;