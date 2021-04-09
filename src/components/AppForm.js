import React from "react";
import { Form, Col } from "react-bootstrap";
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
  setConvertionObjectLoaded,
  convertion,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col className="m-0 mb-1 p-0 pr-1" xs="12" sm="6">
          <Form.Control
            type="number"
            value={fromAmount}
            min={0}
            onChange={(e) => setFromAmount(e.target.value)}
          />
        </Col>
        <Col className="m-0 mb-1 p-0 pr-1" xs="12" sm="6">
          <CurrencySelectItem
            setConvertionObjectLoaded={setConvertionObjectLoaded}
            currencies={currencies}
            value={from}
            setValue={setFrom}
            onChange={() => calculateConvertion()}
          />
        </Col>
        <Col className="m-0 mb-1 p-0 pr-1" xs="12" sm="6">
          <Form.Control type="text" value={convertion} readOnly />
        </Col>
        <Col className="m-0 mb-1 p-0 pr-1" xs="12" sm="6">
          <CurrencySelectItem
            setConvertionObjectLoaded={setConvertionObjectLoaded}
            currencies={currencies}
            value={to}
            setValue={setTo}
            onChange={() => calculateConvertion()}
          />
        </Col>
      </Form.Row>
    </Form>
  );
};

export default AppForm;
