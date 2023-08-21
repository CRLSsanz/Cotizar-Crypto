import React from "react";
import crypto from "../image/cr3.png";
import criptoSimbols from "../image/cr4.png";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="mt-auto items-center ">
        <div className="hidden w-full flexX justify-center animate-pulse mb-10">
          <img src={crypto} alt="logo cripto" style={{ width: "80px" }} />
        </div>
        <div className="w-full text-center">
          <h1 className="text-3xl uppercase">
            crypto <br /> currency
          </h1>
          <p className="text-lg">
            Digital currency for a <br />
            modern world
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#010509] to-gray-800/10 h-[200px] flex flex-col items-center justify-center">
        <img
          src={criptoSimbols}
          alt="cripto simbols"
          style={{ width: "300px" }}
        />
        <h1 className="hidden text-sm pt-3 tracking-widest text-cyan-500">
          Bagde Set
        </h1>
      </div>
    </div>
  );
};

export default Home;
