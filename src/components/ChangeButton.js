import React from "react";
import { Button } from "react-bootstrap";
import "../css/ChangeButton.css";

const ChangeButton = ({ from, to, setFrom, setTo }) => {
  const handleOnClick = () => {
    let helper = from;
    setFrom(to);
    setTo(helper);
  };
  return (
    <Button onClick={handleOnClick} className="changeButton">
      ⇅
    </Button>
  );
};

export default ChangeButton;
