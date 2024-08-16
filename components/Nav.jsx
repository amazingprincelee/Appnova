"use client"
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#070527] shadow-md font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-12">
        {/* Logo */}
        <div className="text-2xl font-semibold text-white leading-[36px] mb-4 md:mb-0">
          <Link href="/">Appnova</Link>
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/solutions">Solutions</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/testimonies">Testimonies</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Get Started Button Section */}
        <div className="mb-4 md:mb-0">
          <Link
            href="/get-started"
            className="text-[#00C6C3] py-2 px-4 rounded-md border border-[#00C6C3]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#070527] text-white`}>
        <ul className="space-y-4 p-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/solutions">Solutions</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/testimonies">Testimonies</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="px-4 py-2">
          <Link
            href="/get-started"
            className="text-[#00C6C3] py-2 px-4 rounded-md border border-[#00C6C3]"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Breadcrumb for smaller screens */}
      <div className="md:hidden bg-[#070527] text-white p-4">
        <ul className="flex space-x-2 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link href="/current-page">Current Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
