import React from "react";
import { Button } from "react-bootstrap";
import { ArrowDownUp } from "react-bootstrap-icons";
import "../css/ChangeButton.css";

const ChangeButton = ({ from, to, setFrom, setTo }) => {
  const handleOnClick = () => {
    let helper = from;
    setFrom(to);
    setTo(helper);
  };
  return (
    <Button
      onClick={handleOnClick}
      variant="light"
      className="changeButton p-0"
      style={{ width: "2.3125rem" }}
    >
      <ArrowDownUp className="pb-2" />
    </Button>
  );
};

export default ChangeButton;
