import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CoinsMarkets } from "../api/CoinsMarkets";

const List = () => {
  const [coins, setCoins] = useState(CoinsMarkets);
  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const getData = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1";

    //const response = await axios.get(url2);
    //setCoins(CoinsMarkets);
    //console.log(coins);
  };

  useEffect(() => {
    //getData();
  }, []);

  const titles = ["#", "Coins", "Price", "Price change", "24h Volume"]; //

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const TableRow = ({ item, index }) => {
    return (
      <tr className="text-sm md:text-base border border-gray-600 items-center active:bg-gray-700">
        <td className="px-3 py-3 text-center">{index}</td>
        <td className="px-3 whitespace-nowrap">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "25px" }}
            className="inline-block"
          />
          <span className="px-2">{item.name}</span>
          <span className="text-gray-400 uppercase pr-3">- {item.symbol}</span>
        </td>
        <td className="px-3 text-right whitespace-nowrap ">
          {item.current_price.toFixed(3)} $
        </td>
        <td
          className={`px-3 text-center ${
            item.price_change_percentage_24h > 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {item.price_change_percentage_24h.toFixed(1)}%
        </td>
        <td className="px-3 text-center">{item.total_volume}</td>
      </tr>
    );
  };

  const clearInput = () => {
    setSearch("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] px-4">
      <div className="w-full mb-4">
        <input
          ref={inputRef}
          type="text"
          className="w-3/4 p-2 bg-gray-800 rounded-l-md text-center mb-2 border border-gray-500
          focus:outline-none focus:border-orange-500 "
          placeholder="Search a Coin"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-1/4 p-2 rounded-r-md bg-[#ff5709b6] border border-orange-500"
          //onClick={() => setSearch("") & (inputRef.current.value = "")}
          onClick={clearInput}
        >
          Clear
        </button>
      </div>

      <div className="w-full max-h-[calc(100vh-170px)] rounded-md overflow-scroll">
        <table className="w-full bg-gray-800 text-gray-200">
          <thead className="sticky -top-0.5 bg-gray-900">
            <tr className="text-white text-center">
              {titles.map((el, index) => (
                <td key={index} className="text-sm font-medium uppercase p-2">
                  {el}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((item, index) => (
              <TableRow key={index} item={item} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
