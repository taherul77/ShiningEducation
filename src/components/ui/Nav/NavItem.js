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
            pathname === `/solutions`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold"
              : "flex items-center hover:underline underline-offset-8 px-4"
          }`}
          href={`/solutions`}
        >
          solutions
        </Link>
      </li>
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/expertise`
              ? " flex items-center px-4 active underline  underline-offset-8 font-bold"
              : "flex items-center hover:underline underline-offset-8 px-4"
          }`}
          href={`/expertise`}
        >
          expertise
        </Link>
      </li>
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/about`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold"
              : "flex items-center hover:underline underline-offset-8 px-4"
          }`}
          href={`/about`}
        >
          about
        </Link>
      </li>
      <li className="flex">
        <Link
          className={`link ${
            pathname === `/business`
              ? "flex items-center px-4 active underline underline-offset-8 font-bold"
              : "flex items-center hover:underline underline-offset-8 px-4"
          }`}
          href={`/business`}
        >
          business
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
