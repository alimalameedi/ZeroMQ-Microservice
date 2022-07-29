const express = require("express");
const fs = require('fs');
const axios = require('axios');
const PORT = 5000;
let usersData={};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => (req.body));

app.post('/', function (req, res) {
  // res.send(req.body);
  console.log("HEY!", req.body);
  usersData = req.body;
  fs.writeFile('../src/info.json', JSON.stringify(usersData), err => {
    if (err) {
      console.error(err)
      return;
    }
  });
})

let getData = () => {
  axios.get('/')
     .then(res => usersData.push(res.data))
     .catch(err => console.log(err.data))
  }

getData();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});