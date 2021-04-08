import React from "react";
import { Button } from "react-bootstrap";
import "../css/ConvertButton.css";

const ConvertButton = ({
  apiKey,
  from,
  to,
  calculateConvertion,
  setConvertURL,
}) => {
  return (
    <Button
      onClick={() => {
        calculateConvertion();
        setConvertURL(
          `https://free.currconv.com/api/v7/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=${apiKey}`
        );
      }}
      variant="dark"
    >
      Convert
    </Button>
  );
};

export default ConvertButton;
