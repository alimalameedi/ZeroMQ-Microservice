import React from 'react';

function WatchPage() {
    return (
        <div>
            <h2>Stocks Watch</h2>
            <center>
            <label>Add Stock:</label><select>
            <option>MSFT</option>
            <option>META</option>
            <option>GOOG</option>
            </select>
            </center>
            <table>
                <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th># Of Shares</th>
                </tr>
                <tr>
                <td>Facebook</td>
                <td>META</td>
                <td>182.15</td>
                <td>6</td>
                </tr>
                <tr>
                <td>Google</td>
                <td>GOOG</td>
                <td>267.56</td>
                <td>12</td>
                </tr>
                <tr>
                <td>Microsoft</td>
                <td>MSFT</td>
                <td>231.82</td>
                <td>3</td>
                </tr>
            </table>
        </div>
    );
}


export default WatchPage;