import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='flex flex-col gap-10 mt-20 items-center justify-center w-full'>
      <div className='flex items-center gap-8'>
    <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      <AiFillFacebook style={{ fontSize: '30px' }} />
    </Link>
    <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      <AiOutlineInstagram style={{ fontSize: '30px' }} />
    </Link>

    <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      <AiOutlineTwitter style={{ fontSize: '30px' }} />
    </Link>
    
   <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      <AiFillYoutube style={{ fontSize: '30px' }} />
    </Link>
       
        
      </div>
      <div  className='flex items-center gap-8'>
      <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      Conditions of Use
    </Link>
      <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      Privacy & Policy
    </Link>
      <Link to={"/"} className='font-bold text-gray-800  text-xl text-bold' >
      Press Room
    </Link>
      </div>

      <p className='text-bold text-xl text-gray-800'>@ 2021 MovieBox by Kareem Sulaimon</p>
    </div>
  );
}

export default Footer;
