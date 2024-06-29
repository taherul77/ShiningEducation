"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem() {
  const pathname = usePathname();

  const navItem = (
    <>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/`}
        >
          Home
        </Link>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/services`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/services`}
        >
          Services
        </Link>
        <div className="absolute left-0 pt-16">
          <ul className="hidden group-hover:block bg-white rounded-lg text-black">
            <li className="flex w-52 hover:bg-gray-200">
              <Link
                className="block px-4 py-2  uppercase"
                href={`/services/japanese-language`}
              >
                Japanese Language
              </Link>
            </li>
            <li className="flex w-52 hover:bg-gray-200">
              <Link
                className="block px-4 py-2 hover:bg-gray-200 uppercase"
                href={`/services/study-in-japan`}
              >
                Study in Japan
              </Link>
            </li>
            <li className="flex w-52 hover:bg-gray-200">
              <Link
                className="block px-4 py-2 hover:bg-gray-200 uppercase"
                href={`/services/work-in-japan`}
              >
                Work in Japan
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/seminar`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/seminar`}
        >
          Seminar
        </Link>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/about-us`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/about-us`}
        >
          About Us
        </Link>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/gallery`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/gallery`}
        >
          Gallery
        </Link>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/apply-now`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/apply-now`}
        >
          Apply Now
        </Link>
      </li>
      <li className="flex relative group">
        <Link
          className={`link ${
            pathname === `/contacts`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/contacts`}
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <ul className="items-stretch hidden space-x-3 text-white lg:flex">
      {navItem}
    </ul>
  );
}
