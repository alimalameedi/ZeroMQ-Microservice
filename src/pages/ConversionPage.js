import React, { useState } from 'react';
import axios from "axios";

function ConversionPage() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [toCurrency, setToCurrency] = useState("");

    const priceConversion = { 'MSFT': 182.15, 'META': 212.62, 'GOOG': 161.11, 
                              'AMZN': 2523.2, 'AAPL': 168.33, 'DIS': 89.98, 
                              'MA': 132.33, 'TSLA': 1064.5, 'COST': 101.1, 'NFLX': 136.87 }


    function alertValue() {

        const resultData = { 'name': name, 'price': priceConversion[name], 'quantity': quantity, 'toCurrency': toCurrency};

        axios.post("/", resultData)
        .then(res => console.log("Data send!"))
        .catch(err => console.log(err.data))

        const receivedData = require('../data.json');
        
        const answer = window.prompt("Are you sure you want to send your data? Enter 'y' for yes and 'n' for no.")

        if (answer.toLowerCase() === 'y') {
            alert("The value of your " + name + " stock is: " + receivedData.value + " in the " + receivedData.nameOfCurrency + " currency.");
        }
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
            <option>AMZN</option>
            <option>AAPL</option>
            <option>DIS</option>
            <option>MA</option>
            <option>TSLA</option>
            <option>COST</option>
            <option>NFLX</option>
            </select>
        <input type="number" name="quantity" value={quantity} onChange={(e) => (setQuantity(parseInt(e.target.value)))} class="smallerInput" min="1"></input>
        <select value={toCurrency} onChange={(e) => (setToCurrency(e.target.value))}>
            <option>USD</option>
            <option>EURO</option>
            <option>YEN</option>
            <option>AUD</option>
            <option>CAD</option> 
            <option>KWD</option>
            <option>INR</option>
            <option>JOD</option>
            <option>BHD</option>
            <option>GBP</option>
            <option>OMR</option>
        </select>
        <label></label><input onClick={()=>alertValue()} type="submit" value="Show Value in Selected Currency"></input>
        {/* <label>The value of your {name} stock is: {receivedData.value} in the {receivedData.nameOfCurrency} currency.</label> */}
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
            <table class="tableTwo">
                <caption>Symbol to Name Conversion Key</caption>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>MSFT</td>
                    <td>Microsoft</td>
                </tr>
                <tr>
                    <td>META</td>
                    <td>Facebook</td>
                </tr>
                <tr>
                    <td>GOOG</td>
                    <td>Google</td>
                </tr>
                <tr>
                    <td>AMZN</td>
                    <td>Amazon</td>
                </tr>
                <tr>
                    <td>DIS</td>
                    <td>Disney</td>
                </tr>
                <tr>
                    <td>AAPL</td>
                    <td>Apple</td>
                </tr>
                <tr>
                    <td>NFLX</td>
                    <td>Netflix</td>
                </tr>
                <tr>
                    <td>MA</td>
                    <td>Mastercard</td>
                </tr>
                <tr>
                    <td>TSLA</td>
                    <td>Tesla</td>
                </tr>
                <tr>
                    <td>COST</td>
                    <td>COSTCO</td>
                </tr>
            </table>
        </center>
        </div>
    );
}


export default ConversionPage;