import { useState } from 'react';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <Flowbite>
    <div className="bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-b border-b-gray-100 flex dark:bg-black shadow-black lg:flex-row dark:text-white flex-col p-2 my-0 items-center justify-center md:justify-evenly">

      <div className='p-0 m-0 flex w-[100%] justify-around items-center lg:w-fit'>
          {/* Logo and Brand */}
          <div className="w-[40%] md:w-auto flex items-center justify-center">
            <a className="font-bold p-3 text-2xl md:text-3xl" href='#'>
            Nexus<span className="text-blue-700">Scale</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex">
            <button
              className="p-3 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {/* Animated SVG icon for mobile menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? 'transform rotate-90' : 'transform rotate-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
            <DarkThemeToggle />
          </div>
         
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:flex-row lg:flex flex-col w-screen items-center lg:w-[60%] justify-evenly md:justify-between lg:justify-around`}
      >
        <div className="text-lg md:w-[50%] w-[80%] text-center flex whitespace-nowrap lg:flex-row p-2 items-center flex-col">
          <a
            className="p-3 w-full md:w-fit hover:text-blue-700 transition-all duration-300 "
            href="http://"
          >
             what we do
          </a>
          <a
            className="p-3 lg:ml-4 hover:text-blue-700 transition-all duration-300 "
            href="http://"
          >
            our approach
          </a>
          <a
            className="p-3 lg:ml-4 hover:text-blue-700 transition-all duration-300 "
            href="http://"
          >
            results
          </a>
          <a
            className="p-3 lg:ml-4 hover:text-blue-700 transition-all duration-300 "
            href="http://"
          >
            about us
          </a>
        </div>

        <div className="text-lg p-3 lg:px-6 lg:mb-0 mb-7 hover:bg-blue-800 hover:border-transparent duration-200 border-2 text-blue-700 border-blue-700 hover:text-white">
          <a href="">lets talk</a>
        </div>
        <div className='lg:flex hidden'>
            <DarkThemeToggle />
        </div>
      </div>
      
    </div>
    </Flowbite>
  );
}