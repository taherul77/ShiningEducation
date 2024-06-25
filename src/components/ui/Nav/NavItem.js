"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavItem() {
  const pathname = usePathname();

  const navItem = (
    <>
      <li className="flex">
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
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/services`
              ? " flex items-center px-4 active underline  underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/services`}
        >
          Services
        </Link>
      </li>
      <li className="flex">
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
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/about-us`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/about-us`}
        >
          About us
        </Link>
      </li>
      <li className="flex">
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
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/apply-now`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/apply-now`}
        >
          apply now
        </Link>
      </li>
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/contacts`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold uppercase"
              : "flex items-center hover:underline underline-offset-8 px-4 uppercase"
          }`}
          href={`/contacts`}
        >
          contact us
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
