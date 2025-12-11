import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

function AdminLayout() {
  const [activeButton, setActiveButton] = useState('home');

  const mainMenuItems = [
    { id: 'home', icon: IoMdHome, label: 'Bosh Sahifa' },
    { id: 'market', icon: SlBasket, label: 'Asbob uskunalar bozori' },
    { id: 'appointments', icon: FaCalendarDays, label: 'Qabullar' },
    { id: 'dentists', icon: FaUserAlt, label: 'Tarix' },
    { id: 'patients', icon: FaUserFriends, label: 'Bemorlar' },
  ];

  const bottomMenuItems = [
    { id: 'settings', icon: IoSettingsOutline, label: 'Settings' },
    { id: 'exit', icon: RxExit, label: 'Exit' },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    const isActive = activeButton === item.id;
    
    return (
      <button
        key={item.id}
        onClick={() => handleButtonClick(item.id)}
        className={`
          w-full h-[45px] flex items-center gap-3 px-6
          transition-all duration-300 ease-in-out
          ${isActive 
            ? 'bg-blue-50 text-blue-600 border-r-4 rounded-[4px] border-blue-500' 
            : 'text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <Icon className={`${isActive ? 'text-blue-600' : 'text-[#A3AED0]'} text-[24px]`} />
        <p className="font-medium">{item.label}</p>
      </button>
    );
  };

  return (
    <div className='w-[23%] h-[100%] bg-white flex flex-col'>
      <div>
        <div className='ml-[70px] mt-[40px]'>
          <h1 className='text-[29px] text-[#2B3674] font-bold'>Admin Panel</h1>
          <h3 className='text-[27px] text-[#2B3674] font-extralight mt-[-12px]'>Stomatolog</h3>
        </div>

        <div id='Buttons' className='mt-[50px]'>
          {mainMenuItems.map(renderMenuItem)}
        </div>
      </div>

      <div id='bottomMenu' className='mt-auto mb-20'>
        {bottomMenuItems.map(renderMenuItem)}
      </div>
    </div>
  );
}

export default AdminLayout;