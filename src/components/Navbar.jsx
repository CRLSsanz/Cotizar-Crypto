import React, { useState } from "react";
//import { useAppContext } from "../context/AppProvider";
//const cargarImagen = require.context("../images", true);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  //const { texts, language, handleLanguage } = useAppContext();

  return (
    <div className="w-full">
      {/** NAVBAR */}
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

        <button
          onClick={() => setNavbar(!navbar)}
          className="px-4 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
        >
          {navbar ? (
            <svg
              width="25px"
              viewBox="0 0 24 24"
              //fill="#aaa"
              fill="#ddd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
            </svg>
          ) : (
            <svg
              width="25px"
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

        <span className="px-4 text-lg font-extralight text-gray-100">
          C r y p t o
        </span>

        <a
          href="#section3"
          onClick={() => setNavbar(false)}
          className="px-4 active:bg-none active:bg-transparent active:animate-ping focus:outline-none"
        >
          <svg
            width="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              //fill-rule="evenodd"
              //clip-rule="evenodd"
              d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
              stroke="#ddd"
              strokeWidth="1.5"
              //stroke-linecap="round"
              //stroke-linejoin="round"
            ></path>
            <path
              d="M17.029 16.5295L19.5 19.0005"
              stroke="#ddd"
              strokeWidth="1.5"
              //stroke-linecap="round"
              //stroke-linejoin="round"
            ></path>
          </svg>
        </a>
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
        className={`fixed z-50 flex flex-col justify-between bg-[#141414] px-8 text-center text-gray-200 w-2/3  top-16 h-[calc(100%-64px)] transform transition-all duration-700
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

        {/** SVG SOCIAL */}
        <div className="flex flex-wrap justify-center text-gray-300 mb-4">
          <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
            <svg
              className="m-auto"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  //fill-rule="nonzero"
                  d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
            <svg
              className="m-auto"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
              </g>
            </svg>
          </div>
          <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-3">
            <svg
              className="m-auto"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
              </g>
            </svg>
          </div>
          {/** prueba */}
          <div className="bg-transparent border border-gray-300 rounded-full w-8 h-8 flex mr-0">
            <svg
              className="m-auto"
              fill="currentColor"
              viewBox="-337 273 123.5 256"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
            </svg>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
