import React from 'react';

function ConversionPage() {
    return (
        <div>
        <center>
        <h2>Stock Value Conversion</h2>
        <label>Stock:</label><select>
            <option>MSFT</option>
            <option>META</option>
            <option>GOOG</option>
            </select>
        <input type="number" class="smallerInput" min="1"></input>
        <select>
            <option>$ - USD</option>
            <option>€ - EURO</option>
            <option>¥ - YEN</option>
        </select>
        <label></label><input type="submit" value="Show Value in Selected Currency"></input>
        <ol className="instructionsList">
                <li>The input option above allows the user to input a stock and quantity of shares.</li>
                <li>The user then converts the total value of that portfolio from USD to another selected currency. Follow instructions below, if needed.</li>
                <br></br>
                <li>1. Enter the stock symbol you'd like to choose.</li>
                <li>2. Enter the number of shares you'd like to include.</li>
                <li>3. Select the currency you'd like to convert the total portfolio evaluation (stock price x number of shares) to. The starting evaluation is in USD.</li>
                <li>4. Click the 'Show Value in Selected Currency' button and that will show you the new value converted into your selected currency.</li>
                <li></li>
            </ol>
        </center>
        </div>
    );
}


export default ConversionPage;