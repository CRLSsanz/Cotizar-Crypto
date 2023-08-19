import Cotizar from "./components/Cotizar";
import Navbar from "./components/Navbar";
import TableCoins from "./components/List";
import Main from "./pages/Main";
const fondoPanal =
  "https://raw.githubusercontent.com/CRLSsanz/trade/main/panal1.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-[#141414] text-gray-300"
      style={
        {
          //backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondoPanal})`,
          //backgroundSize: "cover",
          //backgroundAttachment: "fixed",
          //backgroundPosition: "50%",
        }
      }
    >
      <div className="w-full fixed z-50 top-0">
        <Navbar />
      </div>
      <Main />
    </div>
  );
}

export default App;
