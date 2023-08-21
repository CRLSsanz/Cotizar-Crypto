import React, { useEffect, useState } from "react";
import axios from "axios";

const getMoneda = [
  { name: "American Dollar", moneda: "USD" },
  { name: "Euro", moneda: "EUR" },
  { name: "Chinese Yuan", moneda: "CNY" },
  { name: "Japanese Yen", moneda: "JPY" },
  { name: "Pound Sterling", moneda: "GBP" },
  { name: "Russian Ruble", moneda: "RUB" },
  { name: "Turkish Lira", moneda: "TRY" },
  { name: "Mexican Peso", moneda: "MXN" },
  { name: "Argentine Peso", moneda: "ARS" },
];

const initialShow = {
  PRICE: "$ 0.01",
  HIGHDAY: " 0",
  LOWDAY: " 0",
  CHANGEPCT24HOUR: "0.01",
  LASTUPDATE: "-",
};
const Cotizar = () => {
  const [coint, setCoint] = useState([]);
  const [moneda, setMoneda] = useState("");
  const [cryptomoneda, setCryptomoneda] = useState("");
  const [error, setError] = useState(false);
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
    if (cryptomoneda === "" || moneda === "") {
      setError(true);
      return;
    }
    const response = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
    );

    setShow(response.data.DISPLAY[cryptomoneda][moneda]);
    //console.log(show);
    setError(false);
  };

  let messageError = "Selecciona ambas monedas";
  if (error) {
    messageError = "Select both currencies";
    setTimeout(() => {
      setShow(initialShow);
      setError(false);
    }, 3000);
  } else {
    messageError = "";
  }

  return (
    <div className="p-4 w-full md:w-[600px] md:mx-auto flex flex-col mb-10 ">
      <div className="uppercase text-2xl text-center mb-4">
        Cryptocurrency <br /> quote
      </div>

      <h1 className="uppercase text-sm py-2 font-medium text-gray-50">
        Your currency
      </h1>

      <select
        className="py-2 px-4 shadow-md rounded-sm mb-3 bg-[#75757530] border border-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-orange-500 focus:border-purple-500 "
        onChange={(e) => setMoneda(e.target.value)}
      >
        <option value="">Press to select</option>
        {getMoneda?.map((item, index) => (
          <option key={index} value={item.moneda}>
            {item.name}
          </option>
        ))}
      </select>

      <h1 className="uppercase text-sm py-2 font-medium text-gray-50">
        Your cryptocurrency
      </h1>

      <select
        className="py-2 px-4 shadow-md rounded-sm mb-3 bg-[#75757530] border border-gray-500 focus:outline-none focus:bg-gray-800 focus:ring-orange-500 focus:border-purple-500 "
        onChange={(e) => setCryptomoneda(e.target.value)}
      >
        <option value="">Press to select</option>
        {coint?.map((item, index) => (
          <option key={index} value={item.CoinInfo.Name}>
            {item.CoinInfo.FullName}
          </option>
        ))}
      </select>

      <button
        onClick={handleSubmit}
        className="p-0.5 w-full md:w-4/6 flex mx-auto justify-center bg-gradient-to-l from-purple-400 to-blue-500 rounded-full my-3 uppercase text-sm font-normal tracking-widest
        focus:ring-2 focus:outline-none focus:ring-blue-400"
      >
        <span className="p-2 bg-gray-800 w-full rounded-full text-white transition-all ease-in duration-75 hover:bg-opacity-0">
          Quote
        </span>
      </button>

      <div className="p-4 md:px-8 w-full text-sm flex flex-col bg-[#75757550] rounded-sm my-3 ">
        {error ? (
          <div className="w-full p-2 bg-red-500/10 text-red-400 font-medium text-center transform transition-all duration-700">
            {messageError}
          </div>
        ) : (
          <div className=""> </div>
        )}

        <h1 className="text-2xl py-2 flex flex-row justify-between">
          PRICE:
          <span className="text-number text-white font-medium">
            {show.PRICE}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Highest price of the day :
          <span className="text-number text-white font-medium">
            {show.HIGHDAY}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Lowest price of the day :
          <span className="text-number text-white font-medium">
            {show.LOWDAY}
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Variation last 24 hours :
          <span
            className={`text-number font-medium    
          ${show.CHANGEPCT24HOUR > 0 ? " text-green-500 " : " text-red-400 "}`}
          >
            {show.CHANGEPCT24HOUR} %
          </span>
        </h1>
        <h1 className="flex flex-row justify-between">
          Last update :
          <span className=" text-white font-medium">{show.LASTUPDATE}</span>
        </h1>
      </div>
    </div>
  );
};

export default Cotizar;
