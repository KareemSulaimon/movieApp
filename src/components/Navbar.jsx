import React from 'react';
import { BiSearch } from 'react-icons/bi';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <div className="flex w-full justify-around gap-20 items-center z-20 absolute top-10">
      <div className="flex items-center">
        <img src={logo} alt="logo icon" />
      </div>
      <div className="flex w-2/5 h-4 items-center justify-between border-white border-2 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-full placeholder-white bg-transparent border-none outline-0 text-sm sm:text-lg"
        />
        <BiSearch className="text-white font-bold" />
      </div>
      <div className="flex items-center">
        <img src={menu} alt="menu icon" />
      </div>
    </div>
  );
}

export default Navbar;
