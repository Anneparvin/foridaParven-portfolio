import React from 'react';
import { SiStylelint,SiStyleshare } from 'react-icons/si';
import { BsBorderStyle } from 'react-icons/bs';
import { MdStyle,MdLineStyle } from 'react-icons/md';

const Logo = () => {
    return (
        <div className='grid grid-cols-5 gap-2 justify-around w-4/5 mx-auto mt-6'>
          <p className='p-4 font-bold text-2xl font-serif'><button className='p-4'><SiStylelint/></button>Logo|psum</p>  
          <p className='p-4 font-bold text-2xl font-serif'><button className='p-4'><SiStyleshare/></button>Logo|psum</p>  
          <p className='p-4 font-bold text-2xl font-serif'><button className='p-4'><BsBorderStyle/></button>Logo|psum</p>  
          <p className='p-4 font-bold text-2xl font-serif'><button className='p-4'><MdStyle/></button>Logo|psum</p>  
          <p className='p-4 font-bold text-2xl font-serif'><button className='p-4'><MdLineStyle/></button>Logo|psum</p>  
          <div>
            <hr className='w-screen mx-auto mb-16 bg-slate-600 border-spacing-2'/>
          </div>
        </div>
    );
};

export default Logo;