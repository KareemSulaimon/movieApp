import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';

function Footer() {
  return (
    <div className='flex flex-col gap-10 mt-20 items-center justify-center w-full'>
      <div className='flex items-center gap-8'>
      <a href='/'>
      <AiFillFacebook style={{ fontSize:'30px'}} />
</a>
      <a href='/'>
      <AiOutlineInstagram style={{ fontSize: '30px' }} />
</a>
      <a href='/'>
      <AiOutlineTwitter style={{ fontSize: '30px' }} />
</a>
      <a href='/'>
      <AiFillYoutube style={{ fontSize: '30px' }} />
</a>
       
       
        
      </div>
      <div  className='flex items-center gap-8'>
        <a className='font-bold text-gray-800  text-xl text-bold' href='/'>Conditions of Use</a>
        <a className='font-bold text-gray-800 text-xl text-bold' href='/'>Privacy & Policy</a >
        <a className='font-bold text-gray-800 text-xl text-bold' href='/'>Press Room</a>
      </div>

      <p className='text-bold text-xl text-gray-800'>@ 2021 MovieBox by Kareem Sulaimon</p>
    </div>
  );
}

export default Footer;
