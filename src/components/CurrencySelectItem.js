import React from "react";

const CurrencySelectItem = ({ currencies, value, setValue }) => {
  const objectArr = Object.keys(currencies)
    .sort()
    .map((key) => (
      <option key={key} value={key}>
        {key}
      </option>
    ));
  return (
    <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
      {objectArr}
    </select>
  );
};

export default CurrencySelectItem;
