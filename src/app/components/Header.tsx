"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import HeaderLink from "./HeaderLink";
import { useState } from "react";
import RegisterButton from "./RegisterButton";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="z-[9999] sticky top-0 left-0  flex items-center justify-between px-4 py-3 bg-c1 text-coffwhite">
      <div className=" w-1/2 md:w-2/5 text-xl font-extrabold">
        <img
          src="/images/AKComSocSC_.webp"
          alt=""
          className=" w-2/3 md:w-1/3"
        />
      </div>
      {/* Links for larger screens */}
      <nav className=" w-1/2 md:w-3/5 hidden md:flex items-center justify-between gap-4">
        <HeaderLink link="Home" />
        <HeaderLink link="About" />
        <HeaderLink link="Sponsors" />
        <HeaderLink link="Gallery" />
        <HeaderLink link="Contact" />
        <RegisterButton
          href="https://makemypass.com/akcomsocsc24"
          text="Register"
          className=" pointer-events-none"
        />
      </nav>
      {/* Register button and hamburger icon for mobile */}
      <div className=" flex flex-row items-center justify-center gap-3">
        <RegisterButton
          href="https://makemypass.com/akcomsocsc24"
          text="Register"
          className="md:hidden block pointer-events-none"
        />
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
        <nav className="absolute top-16 left-0 w-full bg-c1 flex flex-col items-center gap-4 py-4 md:hidden">
          <HeaderLink link="Home" onClick={() => setOpen(false)} />
          <HeaderLink link="About" onClick={() => setOpen(false)} />
          <HeaderLink link="Sponsors" onClick={() => setOpen(false)} />
          <HeaderLink link="Gallery" onClick={() => setOpen(false)} />
          <HeaderLink link="Contact" onClick={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
