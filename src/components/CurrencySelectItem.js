import React from "react";
import Select from "react-select";

const CurrencySelectItem = ({
  currencies,
  value,
  setValue,
  setConvertionObjectLoaded,
}) => {
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

  const handleOnChange = (e) => {
    setConvertionObjectLoaded(false);
    setValue(e.value);
  };

  return (
    <Select
      value={value}
      placeholder={value}
      options={objectArr}
      onChange={(e) => handleOnChange(e)}
      styles={styles}
    />
  );
};

export default CurrencySelectItem;
