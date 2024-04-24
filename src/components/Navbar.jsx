import React, { useState } from 'react'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className=' w-full lg:px-14 px-4 pt-6 pb-2 text-secondary flex justify-between items-center'>
      <div className=' text-[32px] '>Aman Sharma</div>
      <div className=' text-base lg:block hidden'>
        <a className='mx-4 cursor-pointer'>Work</a>
        <a className='mx-4 cursor-pointer'>About</a>
        <a className=' ml-4 cursor-pointer'> Contact</a>
      </div>
      <div className='mr-2 lg:hidden'>
        <button
          className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-text  transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200 dark:bg-white" : "-translate-y-1.5 dark:bg-black"
                }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-text dark:bg-black transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50 dark:bg-white" : "w-5 delay-200 opacity-100"
                }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-text transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200 dark:bg-white" : "translate-y-1.5 dark:bg-black"
                }`}
            ></span>
          </div>
        </button>
      </div>
      <nav
        className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-LightBlue text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul className="w-full flex flex-col items-start">
          <li className="nav-li">
            <a
              href="/"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setNavbarOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                setNavbarOpen(false);
              }}
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar