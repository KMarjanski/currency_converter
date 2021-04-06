import React from "react";
import CurrencySelectItem from "./CurrencySelectItem";
import "../css/Form.css";

const Form = ({
  currencies,
  from,
  to,
  setFrom,
  setTo,
  fromAmount,
  setFromAmount,
  calculateConvertion,
  convertion,
}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    calculateConvertion();
  };
  return (
    <form onSubmit={handleOnClick}>
      <input
        type="text"
        value={fromAmount}
        min={0}
        onChange={(e) => setFromAmount(e.target.value)}
      />
      <CurrencySelectItem
        currencies={currencies}
        value={from}
        setValue={setFrom}
        onChange={calculateConvertion()}
      />
      <br />
      <input type="text" value={convertion} disabled />
      <CurrencySelectItem
        currencies={currencies}
        value={to}
        setValue={setTo}
        onChange={calculateConvertion()}
      />
      <br />
    </form>
  );
};

export default Form;
