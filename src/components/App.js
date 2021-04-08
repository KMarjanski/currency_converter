import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Form from "./AppForm";
import "../css/App.css";
import ChangeButton from "./ChangeButton";
import Info from "./Info";

const apiKey = "75603abb0998080373c2";
const currenciesURL = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;

const App = () => {
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("PLN");
  const [currencies, setCurrencies] = useState({});
  const [convertionObject, setConvertionObject] = useState({});
  const [convertionObjectLoaded, setConvertionObjectLoaded] = useState(false);
  const [currenciesLoaded, setCurrenciesLoaded] = useState(false);
  const [fromAmount, setFromAmount] = useState(0);
  const [convertion, setConvertion] = useState(0);
  const [error, setError] = useState("Loading...");

  let objNameArr = convertionObjectLoaded
    ? Object.keys(convertionObject).map((item) => item)
    : "123";
  let objValuesArr = convertionObjectLoaded
    ? Object.values(convertionObject).map((item) => item)
    : "123";

  let convertURL = `https://free.currconv.com/api/v7/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(currenciesURL)
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((result) => {
        setCurrencies(result);
        setCurrenciesLoaded(true);
      })
      .catch((error) => {
        if (error.toString() === "Error: 400") {
          setError(
            `Sorry... Free API limit reached, try again later (up to 1 hour)`
          );
        } else setError(error.toString());
      });

    fetch(convertURL)
      .then(setConvertionObjectLoaded(false))
      .then((res) => {
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((result) => {
        setConvertionObject(result);
        setConvertionObjectLoaded(true);
      })
      .catch((error) => {
        if (error.toString() === "Error: 400") {
          setError(
            `Sorry... Free API limit reached, try again later (up to 1 hour)`
          );
        } else setError(error.toString());
      });
  }, [convertURL]);

  const calculateConvertion = () => {
    let convertionCount = 0;

    for (let i = 0; i < objNameArr.length; i++) {
      if (objNameArr[i] === `${from}_${to}`) {
        convertionCount = objValuesArr[i];
      }
    }

    setConvertion((fromAmount * convertionCount).toFixed(2));
  };

  const componentForm = currenciesLoaded ? (
    <Form
      currencies={currencies.results}
      from={from}
      to={to}
      setFrom={setFrom}
      setTo={setTo}
      fromAmount={fromAmount}
      setFromAmount={setFromAmount}
      calculateConvertion={calculateConvertion}
      convertion={convertion}
    />
  ) : (
    <h2>{error}</h2>
  );

  const componentButton = currenciesLoaded ? (
    <ChangeButton from={from} to={to} setFrom={setFrom} setTo={setTo} />
  ) : null;

  const componentInfo = convertionObjectLoaded ? (
    currenciesLoaded ? (
      <Info Values={objValuesArr} Name={objNameArr} from={from} to={to} />
    ) : null
  ) : currenciesLoaded ? (
    <Col className="text-center">Loading...</Col>
  ) : null;

  return (
    <Container className="mh-100vh" fluid>
      <Row className="mh-100vh">
        <Col className="my-auto">
          <Row>
            <Col className="text-center mb-3">
              <h1>Currency converter</h1>
            </Col>
          </Row>
          <Row className="justify-content-center mb-3">
            <Col
              style={{ maxWidth: "15.5rem", minWidth: "15.5rem" }}
              xs="7"
              sm="5"
              md="3"
              xl="2"
              className="pl-2 pr-21"
            >
              {componentForm}
            </Col>
            <Col className="p-0 m-0 mb-1" xs="auto">
              {componentButton}
            </Col>
          </Row>
          <Row>{componentInfo}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
