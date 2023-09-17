import React from 'react';
import { BiSearch } from 'react-icons/bi';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const {
    handleInputChange,
    searchQuery,
    
  }
   = useStateContext()

  //  console.log(finalResult)
  return (
    <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-around  gap-4 items-center z-20 absolute top-10">
      <Link to={"/"} className='flex items-center' >
      <img src={logo} alt="logo icon" />
    </Link>
      <div className="flex w-3/5 sm:w-2/5 h-4 items-center  border-white border-2 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full placeholder-white bg-transparent border-none outline-0 text-sm text-white sm:text-lg"
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
