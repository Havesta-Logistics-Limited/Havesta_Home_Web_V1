import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navRoutes from '../routes/nav.routes';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [partnerLabel, setPartnerLabel] = useState('Partner');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleSubmenuClick = (submenuName, submenuPath) => {
    setPartnerLabel(submenuName);
    closeDropdown();
  };

  return (
    <div className='absolute z-10 w-full'>
      <div className="flex flex-row items-center justify-evenly text-white mt-8 font-primary">
        <Link to={'/'} className='flex flex-row items-center'>
          <img src="/icons/harv.png" alt="harvesta" width={'25px'} height={'11,13'} className='' />
          <p className='ml-1 '>Harvesta</p>
        </Link>
        <div className='flex flex-row gap-2 relative'>
          {navRoutes.map((item, index) => (
            <div key={index} className='relative'>
              {item.submenu ? (
                <div className='relative'>
                  <button
                    onClick={toggleDropdown}
                    className='hover:bg-harvestaLightGreen px-2 rounded-md flex items-center'
                  >
                    {partnerLabel}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className='absolute w-36 rounded-md'>
                      <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                        {item.submenu.map((submenuItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={submenuItem.path}
                            className='block ml-2 text-sm text-white rounded-md text-center hover:bg-harvestaLightGreen'
                            onClick={() => handleSubmenuClick(submenuItem.name, submenuItem.path)}
                          >
                            {submenuItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className='hover:bg-harvestaLightGreen px-2 rounded-md'
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <Link to={'/marketplace'}>
          <button className='bg-harvestaYellow px-4 py-1 w-28 rounded-full text-white'>Market</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
