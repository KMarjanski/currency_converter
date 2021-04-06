import React from "react";
import "../css/ChangeButton.css";

const Button = ({ from, to, setFrom, setTo }) => {
  const handleOnClick = () => {
    let helper = from;
    setFrom(to);
    setTo(helper);
  };
  return (
    <button onClick={handleOnClick} className="changeButton">
      Change
    </button>
  );
};

export default Button;
