import React from "react";
import Home from "../components/Home";
import Cotizar from "../components/Cotizar";
import List from "../components/List";
const fondoPanal =
  "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";

const Main = () => {
  return (
    <div>
      <section id="section1" className="min-h-screen bg-[#1A2035] flex">
        <div className="my-auto px-2">
          <Home />
        </div>
      </section>

      <section
        id="section2"
        className="min-h-[700px] bg-[#1A2035] flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${fondoPanal})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          //backgroundAttachment: "fixed",
        }}
      >
        <div className="my-auto w-full px-2">
          <h1 className="h-16"> </h1>
          <Cotizar />
        </div>
      </section>

      <section id="section3" className="min-h-[700px] bg-[#1A2035] flex">
        <div className="my-autoooo w-full px-2">
          <h1 className="h-16"> </h1>
          <List />
        </div>
      </section>
    </div>
  );
};

export default Main;
