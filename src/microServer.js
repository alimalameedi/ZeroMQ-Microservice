const zmq = require("zeromq");
const sock = zmq.socket('push');
const secondSock = zmq.socket('pull');
const fileSend = require('./info.json')

let fileReceived = "Initial empty received file";

run();

async function run() {
    sock.bind("tcp://127.0.0.1:7000");
    console.log("Server is ready and listening on port 7000!");
    console.log("Press any key to start sending the currency parameter JSON data!");
    process.stdin.once("data", send);
}

async function send() {
    console.log("About to send currency parameter JSON data to user!");
    sock.send(JSON.stringify(fileSend)); // sending currency information
    console.log("Press to move onto run2!");
    process.stdin.once("data", run2);
}

async function run2() {
    secondSock.connect("tcp://127.0.0.1:7005");
    console.log("Connected to server!");
    secondSock.on('message', function(msg){
        // console.log(msg.toString());
        fileReceived = JSON.parse(msg.toString());
    });
    console.log("Press any key to print the JSON data!");
    process.stdin.once("data", printData);
}

async function printData() {
    console.log(fileReceived);
    const fs = require('fs')
    fs.writeFile('./data.json', JSON.stringify(fileReceived), err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
}
