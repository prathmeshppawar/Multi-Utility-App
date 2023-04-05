import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
    const [from_curr, setFrom_curr] = useState("USD");
    const [to_curr, setTo_curr] = useState("INR");
    const [amount, setAmount] = useState(1);
    useEffect(() => {
        const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
        fetchData(url, amount, from_curr, to_curr);
    }, [from_curr, to_curr, amount])
    
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7dad4c7b99msh830dd0f9e28c5e9p171d8fjsn5c19f37e2092",
    "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
  },
};
async function fetchData(url, amount, from_curr, to_curr) {
  const response = await fetch(url, options);
  const json = await response.json();
  console.log(json);
  if (!json.error) {
    document.getElementById("to-value").innerHTML = json.new_amount;
    document.getElementById("from-value").innerHTML = amount;
    document.getElementById("from-currency").innerHTML = from_curr;
    document.getElementById("to-currency").innerHTML = to_curr;
  } else {
    // alert("Please try again later.");
  }
}
    const submitted = (e) => {
      e.preventDefault();
      setFrom_curr(document.getElementById("from-curr").value);
      // from_curr = document.getElementById("from-curr").value;
      setTo_curr(document.getElementById("to-curr").value);
      // to_curr = document.getElementById("to-curr").value;
      setAmount(document.getElementById("amount").value);
      // amount = document.getElementById("amount").value;
    //   const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
    //   fetchData(url, amount, from_curr, to_curr);
    };
    const changed = (e) => {
        e.preventDefault();
        setFrom_curr(document.getElementById("from-curr").value);
        // from_curr = document.getElementById("from-curr").value;
        setTo_curr(document.getElementById("to-curr").value);
        // to_curr = document.getElementById("to-curr").value;
        setAmount(document.getElementById("amount").value);
        // amount = document.getElementById("amount").value;
        // const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
        // fetchData(url, amount, from_curr, to_curr);
        }
  return (
    <div className="home">
      <h2 className="title">CURRENCY - CONVERTER</h2>
      <form className="mb-4" id="myform2" onChange={changed}>
        <select id="from-curr" name="cars">
          <option value="USD">Unites States Dollar USD</option>
          <option value="INR">Indian rupee INR</option>
          <option value="EUR">Euro EUR</option>
          <option value="JPY">Japanese Yen JPY</option>
          <option value="GBP">British Pound GBP</option>
          <option value="AED">United Arab Emirates Dihram AED</option>
          <option value="KRW">South Korean Won KRW</option>
          <option value="SGD">Singapore Dollar SGD</option>
          <option value="RUB">Russian Ruble RUB</option>
          <option value="CNY">Chinese Yuan CNY</option>
        </select>
        <h3>TO</h3>
        <select id="to-curr" name="cars">
          <option value="INR">Indian rupee INR</option>
          <option value="USD">Unites States Dollar USD</option>
          <option value="EUR">Euro EUR</option>
          <option value="JPY">Japanese Yen JPY</option>
          <option value="GBP">British Pound GBP</option>
          <option value="AED">United Arab Emirates Dihram AED</option>
          <option value="KRW">South Korean Won KRW</option>
          <option value="SGD">Singapore Dollar SGD</option>
          <option value="RUB">Russian Ruble RUB</option>
          <option value="CNY">Chinese Yuan CNY</option>
        </select>
      </form>
      <div className="card">
        <form id="myform" onSubmit={submitted}>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amout"
            min="0"
            defaultValue={1}
          ></input>
        </form>
        <div className="city-data" id="city-data">
          <pre className="pre-cc">
            <span id="from-value">1</span> <span id="from-currency">USD</span>
          </pre>
          <pre className="pre-cc"> = </pre>
          <pre className="pre-cc">
            <span id="to-value">81.00</span> <span id="to-currency">INR</span>
          </pre>
        </div>
      </div>
      <script src="/path/to/resource.js" type="text/javascript" />
    </div>
  );
};

export default CurrencyConverter;
