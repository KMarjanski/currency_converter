import React from "react";
import { Form } from "react-bootstrap";

const CurrencySelectItem = ({ currencies, value, setValue }) => {
  const objectArr = Object.keys(currencies)
    .sort()
    .map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ));
  return (
    <Form.Control
      as="select"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {objectArr}
    </Form.Control>
  );
};

export default CurrencySelectItem;
