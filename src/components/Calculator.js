import React, { useState } from 'react'

const Calculator = () => {
  const [currOperand, setCurrOperand] = useState("");
  const [prevOperand, setPrevOperand] = useState("");
  const handleDigit = (num) => {
    setCurrOperand(currOperand + "" + num);
  };
  const handleOperation = (action) => {
    if (
      currOperand[currOperand.length - 1] === "+" ||
      currOperand[currOperand.length - 1] === "-" ||
      currOperand[currOperand.length - 1] === "*" ||
      currOperand[currOperand.length - 1] === "/"
    ) {
      var str = currOperand;
      var result = str.toString().substring(0, str.toString().length - 1);
      setCurrOperand(result + action);
    } else {
      setCurrOperand(currOperand + action);
    }
  };
  const handleSolution = () => {
    if (
      currOperand[currOperand.length - 1] === "+" ||
      currOperand[currOperand.length - 1] === "-" ||
      currOperand[currOperand.length - 1] === "*" ||
      currOperand[currOperand.length - 1] === "/"
    ) {
      var str = currOperand;
      var result = str.toString().substring(0, str.toString().length - 1);
      setPrevOperand(result);
      const sol = eval(result);
      setCurrOperand(sol);
    } else {
      setPrevOperand(currOperand);
      const sol = eval(currOperand);
      setCurrOperand(sol);
    }
  };
  const clearFunc = () => {
    setPrevOperand("");
    setCurrOperand("");
  };
  const delFunc = () => {
    var str = currOperand;
    var result = str.toString().substring(0, str.toString().length - 1);
    setCurrOperand(result);
  };
  return (
    <div className="App" id='body'>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{prevOperand}</div>
          <div className="current-operand">{currOperand}</div>
        </div>
        <button className="span-two" onClick={clearFunc}>
          AC
        </button>
        <button className="digit" onClick={delFunc}>
          DEL
        </button>
        <button
          className="operation"
          onClick={() => {
            handleOperation("/");
          }}
        >
          ÷
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(1);
          }}
        >
          1
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(2);
          }}
        >
          2
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(3);
          }}
        >
          3
        </button>
        <button
          className="operation"
          onClick={() => {
            handleOperation("*");
          }}
        >
          *
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(4);
          }}
        >
          4
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(5);
          }}
        >
          5
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(6);
          }}
        >
          6
        </button>
        <button
          className="operation"
          onClick={() => {
            handleOperation("+");
          }}
        >
          +
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(7);
          }}
        >
          7
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(8);
          }}
        >
          8
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(9);
          }}
        >
          9
        </button>
        <button
          className="operation"
          onClick={() => {
            handleOperation("-");
          }}
        >
          -
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(".");
          }}
        >
          .
        </button>
        <button
          className="digit"
          onClick={() => {
            handleDigit(0);
          }}
        >
          0
        </button>
        <button
          className="span-two"
          onClick={() => {
            handleSolution();
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator
