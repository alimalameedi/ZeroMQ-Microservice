import React from 'react';

function WatchPage() {
    return (
        <div>
            <h2>Stocks Watch Page</h2>
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