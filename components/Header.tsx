"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop nav bar */}
      <div className="hidden max-w-[90%] mx-auto md:flex justify-between py-5">
        <div>
          <ul className="flex justify-between gap-4 items-center text-gray-700">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                className="bg-primary"
                width={30}
                height={30}
              />
            </Link>
            <li>
              <Link
                className={`${
                  path === "/"
                    ? "text-primary font-semibold bg-gray-200 p-3 rounded"
                    : ""
                } hover:text-primary`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path === "/course"
                    ? "text-primary font-semibold bg-gray-200 p-3 rounded"
                    : ""
                } hover:text-primary`}
                href="/course"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path === "/about"
                    ? "text-primary font-semibold bg-gray-200 p-3 rounded"
                    : ""
                } hover:text-primary`}
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path === "/price"
                    ? "text-primary font-semibold bg-gray-200 p-3 rounded"
                    : ""
                } hover:text-primary`}
                href="/price"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  path === "/contact"
                    ? "text-primary font-semibold bg-gray-200 p-3 rounded"
                    : ""
                } hover:text-primary`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between gap-4 text-gray-700">
            <li>
              <Link
                className={`${
                  path === "/" ? "text-primary font-semibold " : ""
                } hover:text-primary`}
                href="/"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className="bg-primary text-white py-3 px-4 rounded hover:bg-primary/75"
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="flex justify-between items-center max-w-[90%] mx-auto md:hidden py-5">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="bg-primary"
            width={30}
            height={30}
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className={`${
              path === "/" ? "text-primary font-semibold" : ""
            } hover:text-primary`}
            href="/"
          >
            Sign Up
          </Link>
          <Link
            className="bg-primary text-white py-2 px-3 rounded hover:bg-primary/75"
            href="/login"
          >
            Login
          </Link>
          <button onClick={handleMenuClick} className="text-primary">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu nav list */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={closeMenu}
        >
          <div className="fixed inset-y-0 right-0 w-[75%] bg-white z-50 overflow-y-auto">
            <div className="flex justify-end p-4">
              <button onClick={closeMenu} className="text-primary">
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <ul className="space-y-4 p-4">
              <li>
                <Link
                  className={`${
                    path === "/" ? "text-primary font-semibold" : ""
                  } hover:text-primary`}
                  href="/"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "/course" ? "text-primary font-semibold" : ""
                  } hover:text-primary`}
                  href="/course"
                  onClick={closeMenu}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "/about" ? "text-primary font-semibold" : ""
                  } hover:text-primary`}
                  href="/about"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "/price" ? "text-primary font-semibold" : ""
                  } hover:text-primary`}
                  href="/price"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={`${
                    path === "/contact" ? "text-primary font-semibold" : ""
                  } hover:text-primary`}
                  href="/contact"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
