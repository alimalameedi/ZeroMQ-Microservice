import React, { useEffect, useState } from 'react';
import data from "../data.json";
import axios from "axios";

function ConversionPage() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [toCurrency, setToCurrency] = useState("");
    const [setData, data] = useState({});

    const priceConversion = { 'MSFT': 182.15, 'META': 212.62, 'GOOG': 161.11 }

    const handleSubmit2 = () => {
        const resultData = { 'name': name, 'price': priceConversion[name], 'quantity': quantity, 'toCurrency': toCurrency};
        axios.post("/", resultData)
        .then(res => console.log("Data send!"))
        .catch(err => console.log(err.data))
    }

    const handleSubmit = async () => {
        const resultData = { 'name': name, 'price': priceConversion[name], 'quantity': quantity, 'toCurrency': toCurrency};
        console.log(JSON.stringify(resultData));
        await fetch('/', {
            method: "POST",
            mode: 'no-cors',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(resultData)
          });
    }

    function alertValue(name, quantity, toCurrency) {
       console.log("Your name is:" + name);
       console.log("Your price is:" + priceConversion[name]);
       console.log("Your quantity is:" + quantity);
       console.log("Your currency conversion is:" + toCurrency);
    }


    return (
        <div>
        <center>
        <h2>Stock Value Conversion</h2>
        <label>Stock:</label><select value={name} onChange={(e) => {
            (setName(e.target.value))
            (setPrice(priceConversion[name]))
            }}>
            <option>MSFT</option>
            <option>META</option>
            <option>GOOG</option>
            </select>
        <input type="number" name="quantity" value={quantity} onChange={(e) => (setQuantity(parseInt(e.target.value)))} class="smallerInput" min="1"></input>
        <select value={toCurrency} onChange={(e) => (setToCurrency(e.target.value))}>
            <option>USD</option>
            <option>EURO</option>
            <option>YEN</option>
        </select>
        <label></label><input onClick={()=>handleSubmit2()} type="submit" value="Write JSON"></input>
        <label></label><input onClick={()=>alertValue(name, quantity, toCurrency)} type="submit" value="Show Value in Selected Currency"></input>
        <p>{data.currencyOneInformation}</p>
        <p>{data.currencyTwo}</p>
        <ul className="instructionsList" style={{listStyle:'none'}}>
                <li>The input option above allows the user to input a stock and quantity of shares.</li>
                <li>The user then converts the total value of that portfolio from USD to another selected currency. Follow instructions below, if needed.</li>
                <br></br>
                <li>1. Enter the stock symbol you'd like to choose.</li>
                <li>2. Enter the number of shares you'd like to include.</li>
                <li>3. Select the currency you'd like to convert the total portfolio evaluation (stock price x number of shares) to. The starting evaluation is in USD.</li>
                <li>4. Click the 'Show Value in Selected Currency' button and that will show you the new value converted into your selected currency.</li>
                <li></li>
            </ul>
        </center>
        </div>
    );
}


export default ConversionPage;