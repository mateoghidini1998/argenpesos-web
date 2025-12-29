"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ onNavbarToggle }) {
  const pathname = usePathname();

  const LINKS = [
    { text: "Inicio", url: "/" },
    {
      text: "ArgenCompras",
      url: "https://www.argencompras.com.ar",
      target: "_blank",
    },
    { text: "Cuponizate", url: "https://cuponizate.com.ar/", target: "_blank" },
    { text: "Consultá tu cuenta", url: "/micuenta" },
    { text: "Medios de pago", url: "/medios-de-pago" },
    { text: "Sucursales", url: "/sucursales" },
    { text: "Adherite", url: "/adherite" },
    {
      text: "Contactanos",
      url: "https://api.whatsapp.com/send?phone=541168164074&text=Hola!%20les%20consulto%20por%20los%20servicios%20vistos%20en%20www.argenpesos.com.ar",
      target: "_blank",
    },
  ];

  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  useEffect(() => {
    onNavbarToggle(isOpen);
  }, [isOpen]);

  return (
    <nav
      className={`relative ${
        isOpen
          ? "w-full h-full fixed inset-0 bg-white z-99 flex flex-col items-center "
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between lg:hidden w-full px-4 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-lightblue-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightblue-primary"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? "flex flex-col  flex-1 justify-center lg:flex-row"
            : "hidden lg:flex"
        } lg:items-center lg:justify-end gap-8 md:gap-2 lg:gap-4 xl:gap-8 w-full`}
      >
        <div className="mb-[50px] block lg:hidden mx-auto">
          <img
            src="./logo.png"
            alt="argenpesos"
            className=" w-[150px] h-[80px] "
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:justify-end">
          {LINKS.map((LINK, index) => (
            <a
              key={index}
              href={LINK.url}
              target={LINK.target || "_self"} 
              rel={LINK.target === "_blank" ? "noopener noreferrer" : undefined}
              className={`block text-grey-primary text-lg lg:text-sm xl:text-lg hover:text-lightblue-primary px-4 py-2 md:px-0 md:py-0 text-center ${
                activeLink === LINK.url
                  ? "font-bold !text-lightblue-primary underline underline-offset-4"
                  : "font-medium"
              }`}
            >
              {LINK.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
