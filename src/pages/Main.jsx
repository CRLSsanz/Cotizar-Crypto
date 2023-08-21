import React from "react";
import Home from "../components/Home";
import Cotizar from "../components/Cotizar";
import List from "../components/List";

//const fondoPanal = "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";
const fondoCotizar =
  "https://img.freepik.com/foto-gratis/hermoso-concepto-criptomoneda_23-2149250215.jpg?w=970";
//const fondoCripto = "https://media.istockphoto.com/id/1312767508/es/foto/hombre-de-negocios-que-utiliza-la-banca-en-l%C3%ADnea-de-tabletas-moneda-de-cambio-y-pago-marketing.jpg?b=1&s=612x612&w=0&k=20&c=ZnHwPIBdCT_HT4UmO2TuKhzwiuT6piICZ6zRc4ssapQ=";
const fondo2 =
  "https://c4.wallpaperflare.com/wallpaper/445/808/986/bitcoin-cash-coins-computer-wallpaper-preview.jpg";

const Main = () => {
  return (
    <div>
      <section
        id="section1"
        className="min-h-[calc(100vh-0px)] bg-[#1A2035]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.99), rgba(0,0,0,0.3)), url(${fondo2})`,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-screen">
          <Home />
        </div>
      </section>

      <section
        id="section2"
        className="min-h-screen bg-[#1A2035] flex"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.99), rgba(0,0,0,0.7)), url(${fondoCotizar})`,
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

      {/* FOOTER */}
      <p className="hidden w-full bg-[#1A2035] text-xs text-center py-2">
        All Rights Reserved <span className="font-numero">© 2023 </span>
      </p>
    </div>
  );
};

export default Main;
