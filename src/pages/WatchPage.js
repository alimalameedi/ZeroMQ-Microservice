import React from 'react';
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function WatchPage() {
    return (
        <div>
            <h2>Stocks Watch</h2>
            <center>
            <label>Stock:</label><select>
            <option>MSFT</option>
            <option>META</option>
            <option>GOOG</option>
            </select>
            <input type="number" class="smallerInput" min="1"></input>
            <label></label><input type="submit" value="Add Stock"></input>
            </center>
            <br></br>
            <table>
                <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th># Of Shares</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                <tr>
                <td>Facebook</td>
                <td>META</td>
                <td>182.15</td>
                <td>6</td>
                <td><MdEditNote /></td>
                <td><MdDeleteForever /></td>
                </tr>
                <tr>
                <td>Google</td>
                <td>GOOG</td>
                <td>267.56</td>
                <td>12</td>
                <td><MdEditNote /></td>
                <td><MdDeleteForever /></td>
                </tr>
                <tr>
                <td>Microsoft</td>
                <td>MSFT</td>
                <td>231.82</td>
                <td>3</td>
                <td><MdEditNote /></td>
                <td><MdDeleteForever /></td>
                </tr>

            </table>
        </div>
    );
}


export default WatchPage;