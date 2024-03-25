import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurInfo from "./Hooks/useCurInfo";
import Input from "./components/Input";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);

  const currencyListObj = useCurInfo(from);

  const CurrencyList = Object.keys(currencyListObj);

  const finalAmount = () => {
    let ans = amount * Number(currencyListObj[to]);
    setConvertAmount(ans.toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertAmount);
    setConvertAmount(amount);
  };

  return (
    <>
      <h1 className="text-center text-3xl mt-5">Currency Convertor</h1>
      <div className="flex justify-center items-center h-screen -mt-[100px]">
        <div className="flex flex-col gap-2">
          <Input
            amount={amount}
            label={"From"}
            CurrencyList={CurrencyList}
            currency={from}
            onAmountChange={setAmount}
            onCurrencyChange={(from) => {
              setFrom(from);
            }}
          />
          <br />
          <div className="flex justify-center relative">
            <button
              onClick={swap}
              className="bg-purple-300 px-5 py-2 mt-1 w-15 h-10 rounded-md -translate-x-1 absolute -translate-y-7 hover:bg-purple-400" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 pb-1 bg "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </button>
          </div>

          <Input
            amount={convertAmount}
            label={"To"}
            CurrencyList={CurrencyList}
            currency={to}
            onAmountChange={setConvertAmount}
            amountDisable
            onCurrencyChange={(to) => {
              setTo(to);
            }}
          />
          <button
            className="bg-purple-300 px-5 py-2 mt-1 rounded-lg text-xl hover:bg-purple-400"
            onClick={() => {
              finalAmount();
            }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
