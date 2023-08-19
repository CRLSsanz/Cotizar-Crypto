import React, { useEffect, useState } from "react";
import axios from "axios";

const getMoneda = [
  { name: "Argentine Peso", moneda: "ARS" },
  { name: "Colombian Peso", moneda: "COP" },
  { name: "Dolar Estadounidense", moneda: "USD" },
  { name: "Euro", moneda: "EUR" },
  { name: "Mexican Peso", moneda: "MXN" },
];

const initialShow = {
  PRICE: "$ 0.00",
  HIGHDAY: "$ 0",
  LOWDAY: "$ 0",
  CHANGEPCT24HOUR: "1",
  LASTUPDATE: "-",
};
const Cotizar = () => {
  const [coint, setCoint] = useState([]);
  const [moneda, setMoneda] = useState("");
  const [cryptomoneda, setCryptomoneda] = useState("");
  const [show, setShow] = useState(initialShow);

  useEffect(() => {
    getCoins();
  }, []);

  //    WEB:    https://min-api.cryptocompare.com/documentation
  const getCoins = async () => {
    const response = await axios.get(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    );
    setCoint(response.data.Data);
  };

  const handleSubmit = async () => {
    //alert("enviando");
    //console.log(moneda + cryptomoneda);

    const response = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
    );

    setShow(response.data.DISPLAY[cryptomoneda][moneda]);
    //console.log(show);
  };

  return (
    <div className="p-4 w-full flex flex-col mb-10 ">
      <div className="uppercase py-2 text-blue-500 text-3xl font-semibold mb-3">
        Cotizador de Cryptomonedas
      </div>

      <h1 className="uppercase text-sm py-2 font-semibold">Your Moneda</h1>

      <select
        className="py-2 px-4 shadow-md rounded-sm mb-3 bg-[#75757530] border border-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-orange-500 focus:border-purple-500 "
        onChange={(e) => setMoneda(e.target.value)}
      >
        <option value="">Pulsa para seleccionar</option>
        {getMoneda?.map((item, index) => (
          <option key={index} value={item.moneda}>
            {item.name}
          </option>
        ))}
      </select>

      <h1 className="uppercase text-sm py-2 font-semibold">
        Your Cryptomoneda
      </h1>

      <select
        className="py-2 px-4 shadow-md rounded-sm mb-3 bg-[#75757530] border border-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-orange-500 focus:border-purple-500 "
        onChange={(e) => setCryptomoneda(e.target.value)}
      >
        <option value="">Pulsa para seleccionar</option>
        {coint?.map((item, index) => (
          <option key={index} value={item.CoinInfo.Name}>
            {item.CoinInfo.FullName}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="p-0.5 w-full md:w-4/6 flex mx-auto justify-center bg-gradient-to-l from-purple-400 to-blue-500 rounded-full my-3 uppercase text-sm font-medium tracking-widest
        focus:ring-2 focus:outline-none focus:ring-blue-400"
      >
        <span className="p-2 bg-gray-800 w-full rounded-full text-white transition-all ease-in duration-75 hover:bg-opacity-0">
          Cotizar
        </span>
      </button>

      <div className="p-4 w-full text-sm flex flex-col bg-[#75757550] rounded-sm my-3 ">
        <h1 className="text-xl py-2 flex flex-row justify-between">
          PRECIO:
          <span className="text-number text-white font-medium">
            {show.PRICE}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Precio mas alto del dia :
          <span className="text-number text-white font-medium">
            {show.HIGHDAY}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Precio mas bajo del dia :
          <span className="text-number text-white font-medium">
            {show.LOWDAY}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Variacion ultimas 24 horas :
          <span
            className={`text-number font-medium text-white   
          ${show.CHANGEPCT24HOUR > 0 ? " text-green-500 " : " text-red-500 "}`}
          >
            {show.CHANGEPCT24HOUR} %
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Ultima actualizacion :
          <span className=" text-white font-medium">{show.LASTUPDATE}</span>
        </h1>
      </div>
    </div>
  );
};

export default Cotizar;
