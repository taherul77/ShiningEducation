"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logos from "../../../../public/image/Logo.png";
import NavItem from "./NavItem"; // Importing NavItem component

import { usePathname } from "next/navigation"; // Importing usePathname hook

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the navigation toggle
  const pathname = usePathname(); // Getting the current pathname

  // Function to handle navigation toggle
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Effect to close the navigation when pathname changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const logo = "image/logo.png";
  return (
    <>
      {/* Navigation bar */}
      <nav
        className={`
          shadow-lg w-full fixed bg-black/30 top-0 z-50 backdrop-blur 
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-2">
          <div className="flex items-center justify-between mx-auto">
            {/* Logo with link */}
            <Link href={`/`} className="">
              <Image
                src={logos}
                width={80}
                height={60}
                alt="ATI Limited Logo"
              />
            </Link>

            {/* Nav items */}
            <div className="hidden lg:flex items-center gap-x-6">
              <div className="flex items-center gap-4">
                <NavItem />
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex  items-center z-50">
              <div className="items-center text-white hidden lg:flex">
                {/* Revolution link */}
                <Link
                  href={`/contacts`}
                  className={`${
                    pathname === `/contacts`
                      ? "flex flex-col  px-4 active font-bold uppercase"
                      : "flex flex-col uppercase px-4"
                  }`}
                >
                  <p>Have any Questions?</p>
                  <p>+8801761898215</p>
                </Link>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 ${
                isNavOpen ? "outline-none ring-2 ring-gray-200" : ""
              }`}
              aria-controls="navbar-default"
              aria-expanded={isNavOpen ? "true" : "false"}
              onClick={handleNavToggle}
            >
              {/* Hamburger icon */}
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {isNavOpen && (
        <div className="w-full h-4/6 flex flex-col justify-center items-center fixed bg-black text-white lg:hidden top-[6.5rem] z-50 animate-slide-in-left px-6">
          <div className="flex flex-col justify-center items-center  ">
            {/* Navigation links */}
            <li className="flex">
              <Link
                className={`link ${
                  pathname === `/`
                    ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/`}
              >
                Home
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/services`
                    ? " flex items-center px-4 active underline  underline-offset-8 text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/services`}
              >
                services
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/seminar`
                    ? "flex items-center px-4 active underline  underline-offset-8  text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/seminar`}
              >
                seminar
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/about-us`
                    ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold"
                    : "flex items-center hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/about-us`}
              >
                About us
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/gallery`
                    ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/gallery`}
              >
                gallery
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/apply-now`
                    ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/apply-now`}
              >
                apply now
              </Link>
            </li>
            <li className="flex mt-4">
              <Link
                className={`link ${
                  pathname === `/contacts`
                    ? "flex items-center px-4 active underline underline-offset-8 text-xl font-bold uppercase"
                    : "flex items-center uppercase hover:underline underline-offset-8 text-xl px-4"
                }`}
                href={`/contacts`}
              >
                contact us
              </Link>
            </li>
          
          </div>
        </div>
      )}
    </>
  );
}
