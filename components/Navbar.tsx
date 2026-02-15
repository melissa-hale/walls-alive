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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* 1. LEFT: Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-sage-300 group-hover:border-terracotta-400 transition-colors">
                 <Image src="/logo-main.jpeg" alt="Walls Alive Logo" fill className="object-cover" />
              </div>
              <span className="self-center text-2xl font-serif font-bold text-sage-800 group-hover:text-terracotta-600 transition-colors">
                Walls! Alive
              </span>
            </Link>
          </div>

          {/* 2. CENTER: Navigation Links (Absolute Centered) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-sage-600 hover:text-terracotta-600 uppercase tracking-widest transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. RIGHT: CTA & Phone Stack */}
          <div className="hidden lg:flex flex-col items-end gap-1">
            <Link 
              href="/contact" 
              className="bg-sage-600 hover:bg-sage-700 text-cream-50 px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Get a Quote
            </Link>
            <a href="tel:8327883667" className="flex items-center gap-1.5 text-xs font-serif font-medium text-sage-600 hover:text-terracotta-600 transition-colors">
              <Phone size={12} className="text-terracotta-500" />
              (832) 788-3667
            </a>
          </div>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-sage-500 hover:text-terracotta-600 hover:bg-sage-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sage-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-cream-100 border-t border-sage-200`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-sage-700 hover:text-terracotta-600 hover:bg-sage-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile CTA & Phone */}
          <div className="mt-6 pt-6 border-t border-sage-200 flex flex-col gap-4 px-3">
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-sage-600 text-cream-50 text-center py-3 rounded-lg font-bold shadow-sm"
            >
              Get a Quote
            </Link>
            <a href="tel:8327883667" className="flex items-center justify-center gap-2 text-sage-600 font-medium">
              <Phone size={18} />
              (832) 788-3667
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}