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
        <label># Of Stocks:</label>
        <input></input>
        <label>Total Value:</label><input placeholder="VALUE"></input><select>
            <option>$ - USD</option>
            <option>€ - EURO</option>
            <option>¥ - YEN</option>
            </select>
        </center>
        </div>
    );
}


export default ConversionPage;