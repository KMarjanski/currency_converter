import React from "react";
import "../css/Info.css";

const Info = ({ Values, from, to, Name }) => {
  return (
    <div className="info">
      <p>
        1 {from} = {from === Name[0].substring(0, 3) ? Values[0] : Values[1]}{" "}
        {to}
      </p>
      <p>
        1 {to} = {from === Name[1].substring(0, 3) ? Values[0] : Values[1]}{" "}
        {from}
      </p>
    </div>
  );
};

export default Info;
