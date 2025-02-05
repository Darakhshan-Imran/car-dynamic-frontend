import { Home, Car, BarChart, DollarSign, Inbox, Calendar, Settings, HelpCircle, Moon, LogOut } from 'lucide-react';
import React from 'react';


const menuItems = [
  {
    title: 'Dashboard',
    icon: <Home className="w-5 h-5" />,
   
  },
  {
    title: 'Car Rent',
    icon: <Car className="w-5 h-5" />,
   
  },
  {
    title: 'Insight',
    icon: <BarChart className="w-5 h-5" />,
 
  },
  {
    title: 'Reimburse',
    icon: <DollarSign className="w-5 h-5" />,
   
  },
  {
    title: 'Inbox',
    icon: <Inbox className="w-5 h-5" />,
    
  },
  {
    title: 'Calendar',
    icon: <Calendar className="w-5 h-5" />,
 
  },
];

const preferenceItems = [
  {
    title: 'Settings',
    icon: <Settings className="w-5 h-5" />,
  
  },
  {
    title: 'Help & Center',
    icon: <HelpCircle className="w-5 h-5" />,
 
  },
  {
    title: 'Dark Mode',
    icon: <Moon className="w-5 h-5" />,
    isToggle: true, // Custom key for toggling functionality
  },
  {
    title: 'Log Out',
    icon: <LogOut className="w-5 h-5" />,
   
  },
];



const Sidebar = () => {
  return (
    <div className="h-full bg-white shadow-md flex flex-col w-64 lg:w-72 xl:w-80">
      <div className="flex flex-col h-full">
        {/* Main Menu */}
        <div className="px-4 py-6">
          <h2 className="text-gray-500 text-lg font-semibold mb-4 tracking-normal">MAIN MENU</h2>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="flex items-center text-[#76b6ee]  text-lg font-medium hover:text-white hover:bg-blue-600 hover:rounded-xl gap-[2rem] h-[3rem] w-[16rem] px-5">
                {item.icon}
                  {item.title}
                
              </li>
            ))}
          </ul>
        </div>
        {/* Preferences */}
        <div className="px-4 py-6">
          <h2 className="text-gray-500 text-lg font-semibold mb-4 tracking-normal">PREFERENCES</h2>
          <ul className="space-y-4">
            {preferenceItems.map((item, index) => (
              <li key={index} className="flex items-center text-[#76b6ee]  text-lg font-medium hover:text-white hover:bg-blue-600 hover:rounded-xl gap-[2rem] h-[3rem] w-[16rem] px-5">
                {item.icon}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

