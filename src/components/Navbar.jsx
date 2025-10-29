import { useState } from "react";

const Navbar = () => {

  const [menu, setMenu] = useState(false)



  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className=" font-sansita font-bold text-4xl text-gray-900 tracking-wide">
          <span className="text-white">Coal</span>
        </h1>

        {/* Links — hidden on small screens */}
        <ul className="hidden md:flex gap-12 text-lg font-poppins text-white">
          <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-500 transition-all duration-200">
            About Us
          </li>
        </ul>

        {/* Contact button — hidden on small screens */}
        <button className="hidden md:block bg-black font-poppins text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-yellow-500 cursor-pointer transition-all">
          Contact
        </button>

        {/* Hamburger — visible only on mobile */}
        <button onClick={() => setMenu(!menu)} className="md:hidden">
          <i className="fa-solid fa-bars text-white text-2xl"></i>
        </button>
      </div>

      {menu && (

        <div className="md:hidden bg-black bg-opacity-90 text-white px-8 py-6 shadow-2xs shadow-white">
          <ul className="flex flex-col gap-6 text-lg font-poppins justify-center items-center  ">
            <li className="cursor-pointer hover:text-yellow-400 active:text-yellow-400 select-none ">Home</li>
            <li className="cursor-pointer hover:text-yellow-4 00 active:text-yellow-400 select-none">About Us</li>
            <li className="cursor-pointer hover:text-yellow-4 00 active:text-yellow-400 select-none">Products</li>

            <li className="cursor-pointer hover:text-yellow-400 active:text-yellow-400 select-none">Feedback</li>
          </ul>

        </div>

      )}

    </nav>
  );
};

export default Navbar;
