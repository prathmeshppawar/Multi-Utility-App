import React, { useState } from "react";
let num = 0;
export default function TextForm(props) {
  let txt, txtbox, textColor;
  if (props.mode === "light" && props.mode2 === "light") {
    document.body.style.backgroundColor = "white";
    textColor = "black";
    txtbox = "white";
    txt = "black";
  }
  if (props.mode === "dark" && props.mode2 === "light") {
    document.body.style.backgroundColor = "#042743";
    textColor = "white";
    txtbox = "#13466e";
    txt = "white";
  }
  if (props.mode === "light" && props.mode2 === "danger") {
    document.body.style.backgroundColor = "#f8d7da";
    textColor = "black";
    txtbox = "white";
    txt = "black";
  }
  if (props.mode === "dark" && props.mode2 === "danger") {
    if (props.color === "dark") {
      document.body.style.backgroundColor = "#042743";
      txtbox = "#13466e";
      txt = "white";
      textColor = "white";
    } else {
      document.body.style.backgroundColor = "#f8d7da";
      txtbox = "white";
      txt = "black";
      textColor = "black";
    }
  }

  const handleUpClick = () => {
    const upText = text.toUpperCase();
    setText(upText);
    props.showAlert("Converted to UPPERCASE!", "success");
  };
  const handleLoClick = () => {
    const loText = text.toLowerCase();
    setText(loText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    handleCount();
  };
  const clearFunc = () => {
    if (num === 0) {
      setText("");
      num++;
      handleCount();
    }
  };
  const clearText = () => {
    setText("");
    handleCount();
    props.showAlert("Text has been cleared!", "success");
  };
  const alternateText = () => {
    let newText = "";
    let a1, a2;
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        a1 = text[i].toUpperCase();
        newText += a1;
      }
      if (i % 2 === 1) {
        a2 = text[i].toLowerCase();
        newText += a2;
      }
    }
    setText(newText);
    props.showAlert("Converted to AlTeRnAtEcAsE!", "success");
  };
  let check = 0;
  const handleCount = () => {
    let refer = 0;

    if (text === "") {
      return 0;
    } else {
      let n = text.length;
      for (let i = 0; i < n; i++) {
        if (text[i] !== " " && text[i + 1] === " ") {
          refer++;
        }
        if(text[i-1]==="\n" && text[i]!==0 ){
          refer++;
        }
        if(text[i-1]==="\n" && text[i]==="\n"){
          refer--;
        }
        if(text[0]==="\n"){
          if(check===0){
            refer--;
            check++;
          }
        }
      }
      if (text[n - 1] === " ") {
        refer--;
      }
    }
    return refer + 1;
  };
  const [text, setText] = useState("Enter text here.");

  return (
    <>
      <div
        className="container"
        style={{
          color: textColor,
        }}
      >
        <h1 className="my-3 ">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="myText"
            style={{
              backgroundColor: txtbox,
              color: txt,
            }}
            value={text}
            onClick={clearFunc}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1 my-1">
          Convert To Uppercase
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1 my-1">
          Convert To Lowercase
        </button>
        <button onClick={clearText} className="btn btn-primary mx-1 my-1">
          Clear Text
        </button>
        <button onClick={alternateText} className="btn btn-primary mx-1 my-1">
          Alternate Case
        </button>
        <div className="container">
          <h1 className="my-3">Text Summary</h1>
          <p>
            {handleCount()} words and {text.length} letters.
          </p>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} letters.
          </p>
        </div>
      </div>
    </>
  );
}
