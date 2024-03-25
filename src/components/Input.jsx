import React from "react";

function Input({
  label,
  amount,
  currency,
  onCurrencyChange,
  onAmountChange,
  CurrencyList = [],
  amountDisable = false,
}) {
  return (
    <div className="flex rounded-xl w-[450px] px-6 py-5 shadow shadow-purple-400 bg-white">
      <div className="flex flex-col w-[150px] mx-7">
        <label className=" text-center text-black/50  font-sans text-xl ">{label}</label>
        <input
          className="text-xl px-5 -py-1 mt-3 w-38 h-8 bg-white shadow shadow-purple-300 rounded-md"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="px-2">
        <p className="text-xl text-black/50 ">Currency Type</p>
        <select
            className="text-xl px-5 py-1 mt-3 w-38 h-8 bg-white shadow shadow-purple-300 rounded-md hover:cursor-pointer"
          value={currency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
        >
          {CurrencyList.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
