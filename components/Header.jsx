import React from "react";
import { FaBold, FaCrown, FaCompass } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[url('/images/bg-photo.png')] bg-cover bg-center h-[650px] flex items-center">
      <div className="container mx-auto text-white px-6 lg:px-0">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Empower Your Business
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            With Our <span className="text-secondary-color">Software</span>
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Solutions</h1>

          <p className="text-lg lg:text-xl mb-8">
            Simplify your operations with custom software <br />
            designed to solve your unique business challenges.
          </p>

          <button className="learnButton transition transform hover:scale-105">
            Learn more
          </button>
        </div>

        <div className="mt-24 bg-gray-800 bg-opacity-60 p-6 rounded-lg">
          <p className="text-center text-xl mb-4">
            Trusted by <span className="font-bold text-secondary-color">50+</span> Partners & Customers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-3">
            <div className="flex items-center">
              <FaBold size={30} />
              <span className="ml-2">BOURBON</span>
            </div>
            <div className="flex items-center">
              <FaCompass size={30} />
              <span className="ml-2">GYNESCOPE</span>
            </div>
            <div className="flex items-center">
              <FaCrown size={30} />
              <span className="ml-2">KingSoo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
