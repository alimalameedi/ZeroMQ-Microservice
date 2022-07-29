import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";

function WatchPage() {

    const data = 
    [ 
    {
        "id": "1",
        "name": "Facebook",
        "symbol": "META",
        "price": 182.15,
        "quantity": 5,
    },
    {
        "id": "2",
        "name": "Facebook",
        "symbol": "META",
        "price": 182.15,
        "quantity": 5,
    },
    {
        "id": "3",
        "name": "Facebook",
        "symbol": "META",
        "price": 182.15,
        "quantity": 5,
    },

    ]
    const [stocks, setStocks] = useState(data);
    const [addFormData, setAddFormData] = useState({
        name: '',
        symbol: '',
        price: '',
        quantity: ''
    });

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newStock = {
            name: addFormData.name,
            symbol: addFormData.symbol,
            price: addFormData.price,
            quantity: addFormData.quantity
        };

        const newStocks = [...stocks, newStock];
        setStocks(newStocks);
    };

    const handleDeleteClick = (stockId) => {
        const newStocks = [...stocks];

        const index = stocks.findIndex((stock) => stock.id === stockId);

        newStocks.splice(index, 1);
        setStocks(newStocks);
    }

    return (
        <div>
            <h2>Stocks Watch</h2>
            <br></br>
            <table className="tableOne">
                <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th># Of Shares</th>
                <th>Delete</th>
                </tr>
                {stocks.map((e) => (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.symbol}</td>
                        <td>{e.price}</td>
                        <td>{e.quantity}</td>
                        <td><MdDeleteForever onClick={(event) => handleDeleteClick(event, e)} /></td>
                    </tr>
                ))}
            </table>
            <center>
            <h2>Add a Stock</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input type="text"
                name="name"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
                />

                <input type="text"
                name="symbol"
                required="required"
                placeholder="Enter a symbol..."
                onChange={handleAddFormChange}
                />

                <input type="any"
                name="price"
                required="required"
                placeholder="Enter a price..."
                onChange={handleAddFormChange}
                />
                <input type="number"
                name="quantity"
                required="required"
                placeholder="Enter a quantity..."
                onChange={handleAddFormChange}
                />
                <button type="submit">Add Stock</button>
            </form>
            <ol className="instructionsList" style={{listStyle: 'none'}}>
                <li>The table above shows all stocks that you have chosen to keep track of. Follow instructions below, if needed.</li>
                <br></br>
                <li>1. Enter the stock name, symbol, price, and number of shares of the stock you'd like to add.</li>
                <li>2. Click the 'Add Stock' button.</li>
                {/* <li>3. Click the 'edit' journal edit icon on any row of stock data you'd like to change.</li> */}
                <li>4. Click the 'delete' trash can icon on any row of stock data you'd like to delete.</li>
                <li></li>
            </ol>
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
                    <td>Costco</td>
                </tr>
            </table>
            </center>
        </div>
    );
}


export default WatchPage;