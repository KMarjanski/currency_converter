import React from "react";
import { Form } from "react-bootstrap";
import CurrencySelectItem from "./CurrencySelectItem";
import "../css/AppForm.css";

const AppForm = ({
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
    <Form onSubmit={handleOnClick}>
      <Form.Row>
        <Form.Control
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
      </Form.Row>
      <Form.Row>
        <Form.Control type="text" value={convertion} readOnly />
        <CurrencySelectItem
          currencies={currencies}
          value={to}
          setValue={setTo}
          onChange={calculateConvertion()}
        />
      </Form.Row>
    </Form>
  );
};

export default AppForm;
