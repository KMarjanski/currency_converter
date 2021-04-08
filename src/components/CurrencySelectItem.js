import React from "react";
import Select from "react-select";

const CurrencySelectItem = ({ currencies, value, setValue }) => {
  const objectArr = Object.keys(currencies)
    .sort()
    .map((key) => ({ value: key, label: key }));

  const styles = {
    control: (styles) => ({
      ...styles,
      height: "2.3125rem",
      borderRadius: ".25rem",
    }),
  };

  return (
    <Select
      value={value}
      defaultInputValue={value}
      options={objectArr}
      onChange={(e) => setValue(e.value)}
      styles={styles}
    />
  );
};

export default CurrencySelectItem;
