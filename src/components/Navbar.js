import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {

  let ans,textColor;
  if(props.mode==='light' && props.mode2==='light'){
    ans = 'light';
    textColor = 'light';
  }
  if(props.mode==='dark' && props.mode2==='light'){
    ans = 'dark';
    textColor = 'dark';
  }
  if(props.mode==='light' && props.mode2==='danger'){
    ans = 'danger';
    textColor = 'dark';
  }
  if(props.mode==='dark' && props.mode2==='danger'){
    ans = props.color;
    textColor = 'dark';
  }

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${textColor} bg-${ans}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/weather">
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/calculator">
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/currency">
                  Currency Converter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div
              className={`mx-3 form-check form-switch text-${
                props.mode2 === "light" ? "danger" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked="false"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode2}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode2 === "light" ? "Red" : "light"} Mode
              </label>
            </div>
            
            
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                aria-checked="false"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title here",
  about: "Set About here",
};
