"use client";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const backgroundImageURL = "imagenes/paper-texture.png";

  return (
    <nav
      className={`${isOpen ? "w-[calc(100%-1rem)] h-fit rounded-xl p-8" : "py-1.5 px-3 md:p-3 w-fit rounded-lg"} bg-center md:w-fit bg-cover left-2 top-2 md:left-1/2 z-50 font-mono fixed md:-translate-x-1/2 flex flex-col md:flex-row bg-black/35 backdrop-blur-sm shadow-lg md:items-center md:h-15 md:gap-5 transition-all duration-500`}
      style={isOpen ? { backgroundImage: `url(${backgroundImageURL})` } : {}}
    >
      <div className="flex gap-3 md:gap-0 justify-between items-center w-full md:w-auto">
        <Link href={"/"}>
          <Image
            width={35}
            height={40}
            className="cursor-pointer w-7 h-8 md:min-w-8.75 md:w-8.75 md:h-10"
            src="/logos/logo.svg"
            alt="Logo de Corralon Artesan"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='mobile-toggle-nav'
          className="md:hidden text-white hover:scale-115 cursor-pointer focus-visible:scale-115 hover:opacity-90 focus-visible:opacity-90 transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <ul className={`flex-col md:flex-row flex md:flex gap-2.5 mt-3 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        {[
          { href: '/', label: 'Inicio' },
          { href: '/productos', label: 'Productos' },
          { href: '/contactos', label: 'Contactos' },
        ].map(({ href, label }) => (
          <li key={href} className="text-center w-fit list-none">
            <Link href={href} passHref>
              <div
                onClick={() => setIsOpen(false)}
                className={`flex justify-center rounded-full items-center h-10 text-sm hover:bg-cs-red hover:text-white font-bold px-6 cursor-pointer transition duration-400
                  ${pathname === href ? 'bg-cs-red text-white' : 'bg-white text-gray-900'}
                `}
              >
                {label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
