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
        </center>
        </div>
    );
}


export default ConversionPage;