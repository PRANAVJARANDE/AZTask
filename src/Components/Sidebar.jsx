import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { togglesidebar } from '../features/slice';
import { NavLink } from "react-router-dom";


function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Dashboard", icon: "/dashboard.png", path: "/dashboard" },
    { name: "Learn", icon: "/learn.png", path: "/learn" },
    { name: "Forums", icon: "/forums.png", path: "/forums" },
    { name: "Upskill", icon: "/upskill.png", path: "/" },
    { name: "Contest", icon: "/contest.png", path: "/contest" },
    { name: "Leaderboard", icon: "/leaderboard.png", path: "/leaderboard" },
  ];

  return (
    <aside className="w-64 bg-blue-50 h-screen p-8">
    <nav className="space-y-2 flex flex-col">
      <div className="flex items-center mb-5">
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
            className={`text-xl font-extrabold text-custom-text-blue transition-transform duration-200 ease-in-out ${
              isHovered ? 'translate-x-2' : ''
            }`}
          >
            AlgoZenith
          </span>
        </div>
      </div>
      
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg text-gray-700 transition-colors duration-200 ${
                isActive ? "bg-blue-100 text-blue-600" : "hover:bg-blue-100 hover:text-blue-600"
              }`
            }
          >
            <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
