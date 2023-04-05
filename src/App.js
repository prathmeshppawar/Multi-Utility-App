import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Calculator from "./components/Calculator";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [mode2, setMode2] = useState("light");
  const [color, setColor] = useState("success");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      // showAlert("Light mode has been Enabled!",'success')
    } else {
      setMode("dark");
      setColor("dark");
      // }
      // showAlert("Dark mode has been Enabled!",'success')
    }
  };

  const toggleMode2 = () => {
    if (mode2 === "danger") {
      setMode2("light");
      // showAlert("Light mode has been Enabled!",'succes')
    } else {
      setMode2("danger");
      // if (mode === "dark") {
      setColor("danger");
      // }
      // showAlert("Danger mode has been Enabled!",'success')
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          about="About"
          color={color}
          mode2={mode2}
          mode={mode}
          toggleMode2={toggleMode2}
          toggleMode={toggleMode}
        />
        {window.location.pathname === "/" ||
        window.location.pathname === "/about" ? (
          <Alert alert={alert} />
        ) : (
          <></>
        )}
        <Routes>
          <Route
            path="/about"
            element={
              <About
                showAlert={showAlert}
                mode={mode}
                mode2={mode2}
                color={color}
              />
            }
          />
          <Route
            path="/weather"
            element={
              <Weather
                showAlert={showAlert}
                mode={mode}
                mode2={mode2}
                color={color}
              />
            }
          />
          <Route
            path="/calculator"
            element={
              <Calculator
                showAlert={showAlert}
                mode={mode}
                mode2={mode2}
                color={color}
              />
            }
          />
          <Route
            path="/currency"
            element={
              <CurrencyConverter
                showAlert={showAlert}
                mode={mode}
                mode2={mode2}
                color={color}
              />
            }
          />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
                mode2={mode2}
                color={color}
                heading="Enter The Text to Analyze"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
