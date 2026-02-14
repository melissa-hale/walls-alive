"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-sage-200 bg-cream-100/95 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Logo Placeholder - Update src with your actual logo path */}
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sage-300">
             <Image src="/logo-main.jpg" alt="Walls Alive Logo" fill className="object-cover" />
          </div>
          <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-sage-800">
            Walls! Alive
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-4 items-center">
          <a href="tel:5125550123" className="text-sage-700 hover:text-terracotta-600 font-medium flex items-center gap-2">
            <Phone size={18} />
            <span className="hidden lg:inline">(512) 555-0123</span>
          </a>
          <Link href="/contact" className="text-cream-50 bg-sage-600 hover:bg-sage-700 focus:ring-4 focus:outline-none focus:ring-sage-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors">
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sage-500 rounded-lg md:hidden hover:bg-sage-100 focus:outline-none focus:ring-2 focus:ring-sage-200"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto md:order-1`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-sage-100 rounded-lg bg-sage-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 md:p-0 text-sage-900 rounded hover:bg-sage-100 md:hover:bg-transparent md:hover:text-terracotta-600 transition-colors font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}