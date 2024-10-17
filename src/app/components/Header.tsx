"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import RegisterButton from "./RegisterButton";
import HeaderLink from "./HeaderLink";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="z-[9999] fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 py-2 bg-c1 text-coffwhite">
      <div className=" w-1/4 md:w-2/5 text-xl font-extrabold">LOGOS</div>
      
      {/* Links for larger screens */}
      <nav className=" w-3/4 md:w-3/5 hidden md:flex items-center justify-between gap-4">
        <HeaderLink link="Hero" />
        <HeaderLink link="About" />
        <HeaderLink link="Schedule" />
        <HeaderLink link="Gallery" />
        <HeaderLink link="Contact" />
        <RegisterButton text="Register"/>
      </nav>

      {/* Register button and hamburger icon for mobile */}
      <div className=" flex flex-row items-center justify-center gap-3">
          <RegisterButton text="Register" className="md:hidden block" />
          <div className="md:hidden text-2xl">
            {open ? (
              <MdClose
                onClick={() => setOpen(false)}
                className="cursor-pointer"
                aria-label="Close menu"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setOpen(true)}
                className="cursor-pointer"
                aria-label="Open menu"
              />
            )}
          </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="absolute top-20 left-0 w-full bg-c1 flex flex-col items-center gap-4 py-4 md:hidden">
          <HeaderLink link="Hero" onClick={() => setOpen(false)} />
          <HeaderLink link="About" onClick={() => setOpen(false)} />
          <HeaderLink link="Schedule" onClick={() => setOpen(false)} />
          <HeaderLink link="Gallery" onClick={() => setOpen(false)} />
          <HeaderLink link="Contact" onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
