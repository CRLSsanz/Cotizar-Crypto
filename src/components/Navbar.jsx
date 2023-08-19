import React, { useState } from "react";
//import { useAppContext } from "../context/AppProvider";
//const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  //const { texts, language, handleLanguage } = useAppContext();

  return (
    <div className="w-full">
      <nav className="w-full h-16 px-2 lg:px-24 flex justify-between items-center bg-gradient-to-bl from-cyan-800 backdrop-blur-2xl">
        {/* 
       <div className="relative ml-4">
          <img
            className="shadow-lg border shadow-gray-200"
            src={cargarImagen(`./${language}.png`)}
            //style={{ width: `${item.width}` }}
            alt="English"
          />
          <select
            className="absolute -top-1 left-2 pl-4 appearance-none bg-transparent text-transparent focus:text-gray-200 focus:outline-none"
            onChange={handleLanguage}
          >
            <option value="en">English</option>
            <option value="es">Espanish</option>
            <option value="fr">Frances</option>
            <option value="it">Italiano</option>
          </select>
       </div>
         */}
        <a
          href="#section1"
          className="hidden px-4 text-lg text-gray-100 font-semibold"
        >
          C R L S
        </a>
        <button
          onClick={() => setNavbar(!navbar)}
          className="px-4 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
        >
          {navbar ? (
            <svg
              width="35px"
              viewBox="0 0 24 24"
              //fill="#aaa"
              fill="#ddd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
            </svg>
          ) : (
            <svg
              width="35px"
              viewBox="0 0 24 24"
              fill="#ddd"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <path d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z" />
              <path d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z" />
              <path d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z" />
            </svg>
          )}
        </button>
      </nav>
      {/** FONDO NEGRO */}
      <div
        onClick={() => setNavbar(!navbar)}
        className={`fixed top-16 w-full h-screen bg-cyan-800/80 ${
          navbar
            ? " opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {" "}
      </div>
      {/** MENU  */}
      <ul
        onClick={() => setNavbar(!navbar)}
        className={`fixed z-50 flex flex-col justify-between bg-[#141414] px-8 text-gray-400 w-2/3  top-16 h-[calc(100%-64px)] transform transition-all duration-700
        ${
          navbar
            ? " opacity-100 pointer-events-auto left-0"
            : "opacity-0 pointer-events-none -left-32"
        }`}
      >
        <div>
          <li className="hidden">
            <span className="uppercase text-xs tracking-widest ">Crypto</span>
          </li>
          <br />
          <a href="#section1" onClick={() => setNavbar(!navbar)}>
            <li className="w-full py-4 hover:font-bold ">{"Home"}</li>
          </a>
          <a href="#section2" onClick={() => setNavbar(!navbar)}>
            <li className="w-full border-t border-gray-800 py-4 hover:font-bold ">
              {"Cotizar"}
            </li>
          </a>
          <a href="#section3" onClick={() => setNavbar(!navbar)}>
            <li className="w-full border-t border-gray-800 py-4 hover:font-bold ">
              {"List"}
            </li>
          </a>
        </div>

        <div>
          <li className="py-4">
            <a href="http://www.google.com" className="">
              carlonchosanz@gmail.com
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
