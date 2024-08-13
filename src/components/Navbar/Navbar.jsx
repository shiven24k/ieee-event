import React, { useState } from 'react';
import ieeelogo from '../../assets/ieeelogo.png';
import cgclogo from '../../assets/cgclogo.png';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      {/* Top Banner */}
      <div id="sticky-banner" className="z-50 flex flex-col sm:flex-row justify-between w-full p-2 border-b border-gray-200 bg-gradient-to-r from-red-700 to-red-500 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex flex-col sm:flex-row items-center mx-auto gap-4 sm:gap-32 text-white">
          <div className='flex gap-2 sm:gap-4 items-center'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
            <p className="text-[1em] sm:text-base">Pardeep.j1881@cgc.ac.in</p>
            <p className="hidden sm:block">|</p>
            <p className="text-[1em] sm:text-base">+91 98724 95684</p>
          </div>
          <div className='flex gap-2 sm:gap-4 items-center'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path></svg>
            <p className="text-sm sm:text-base">Shivani.j2587@cgc.ac.in</p>
            <p className="hidden sm:block">|</p>
            <p className="text-sm sm:text-base">+91 8264239901</p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex p-4 flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm">
        <div className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          {/*ICETIS 2025 */}
          <div>
            <a className="sm:order-1 text-green-600 flex-none text-[30px] sm:text-[50px] font-semibold focus:outline-none focus:opacity-80" href="#">ICETIS 2025</a>
          </div>

          {/* Nav Items */}
          <div>
            <div className="sm:order-3 flex flex-col items-center gap-x-2">
              <button type="button" onClick={toggleBurger} className="sm:hidden top-0 size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <svg className={`${isBurgerOpen ? 'hidden' : 'block'} shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className={`${isBurgerOpen ? 'block' : 'hidden'} shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                <span className="sr-only">Toggle</span>
              </button>
            </div>
            <div id="hs-navbar-alignment" className={`${isBurgerOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2`} aria-labelledby="hs-navbar-alignment-collapse">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                <ul className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./" aria-current="page">Home</a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./about" aria-current="page">About</a>
                  </li>
                  <li>
                    <button id="dropdownNavbarLink" onClick={toggleDropdown} className="flex items-center justify-between w-full px-2 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-gray-400 focus:outline-none">Committee<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg></button>
                    {/* Dropdown menu */}
                    <div id="dropdownNavbar" className={`${isDropdownOpen ? 'block' : 'hidden'} z-10 font-normal absolute bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                      <ul className="py-2 text-sm text-gray-700 font-medium dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                        <li>
                          <a href="./advisory" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Advisory Committee</a>
                        </li>
                        <li>
                          <a href="./organizing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Organizing Committee</a>
                        </li>
                        <li>
                          <a href="./technnical" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Technical Program Committee</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./callforpaper">Call for Paper</a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./papersubmission">Paper Submission</a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./regrstration">Registration</a>
                  </li>
                  <li className="cursor-pointer">
                    <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none" href="./contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* IEEE and CGC Logos */}
          <div className="hidden sm:flex items-center gap-4">
            <img src={cgclogo} className="w-[4em]" alt="CGC Logo" />
            <img src={ieeelogo} className="w-[12em]" alt="IEEE Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;