import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { togglesidebar } from '../features/slice';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-blue-50 ">
      <div className="flex items-center">
        <button onClick={()=>{
          dispatch(togglesidebar());
        }} className="px-4 py-2 rounded-lg mr-2 hover:bg-gray-100 transition duration-300 ease-in-out">
          <img className="h-4" src="/threedash.png" alt="Menu icon" />
        </button>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center h-8"
        >
          {isHovered && (
            <img
              src="/logo.webp"
              alt="AlgoZenith Logo"
              className="h-6 w-auto transition-transform duration-500 ease-in-out transform translate-x-0"
            />
          )}
          <span
            className={`text-2xl font-extrabold text-custom-text-blue transition-transform duration-200 ease-in-out ${
              isHovered ? 'translate-x-2' : ''
            }`}
          >
            AlgoZenith
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg bg-custom-light-blue hover:bg-gray-100 transition duration-300 ease-in-out">
          <img src="/bell.png" alt="Notifications" className="h-4 w-4" />
        </button>
        <button className="w-8 h-8 rounded-full bg-gray-400 hover:bg-gray-300 transition duration-300 ease-in-out">
        </button>
      </div>
    </header>
  );
};

export default Header;
