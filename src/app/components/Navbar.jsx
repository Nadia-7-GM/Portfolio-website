"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#121212]/80 backdrop-blur-xl">

      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">

        {/* LOGO */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/Nadia-logo.png"
            width={55}
            height={55}
            alt="logo"
            className="transition-transform duration-300 group-hover:scale-105 rounded-full"
          />
        </div>

        {/* MOBILE MENU */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded-lg border border-white/10 text-slate-200
              hover:text-white hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]
              transition-all duration-300"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg border border-white/10 text-slate-200
              hover:text-white hover:border-green-400 transition-all duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* DESKTOP MENU */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">

            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <NavLink href={link.path} title={link.title} />

                {/* hover underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}

          </ul>
        </div>

      </div>

      {/* MOBILE OVERLAY */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;