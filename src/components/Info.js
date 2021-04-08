import React from "react";
import { Col } from "react-bootstrap";

const Info = ({ Values, from, to, Name }) => {
  return (
    <Col className="text-center">
      <p className="mb-0">
        1 {from} = {from === Name[0].substring(0, 3) ? Values[0] : Values[1]}{" "}
        {to}
      </p>
      <p>
        1 {to} = {from === Name[1].substring(0, 3) ? Values[0] : Values[1]}{" "}
        {from}
      </p>
    </Col>
  );
};

export default Info;
