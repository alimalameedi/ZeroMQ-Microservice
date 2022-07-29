const zmq = require("zeromq");
const sock = zmq.socket('pull');
const secondSock = zmq.socket('push');

const fileReturn = 
{ 
    "currencyOneInformation": 'The United States dollar, or U.S. dollar, is made up of 100 cents. It is represented by the symbol $ or US$ to differentiate it from other dollar-based currencies. The U.S. dollar is considered a benchmark currency and is the most-used currency in transactions across the world.',
    "currencyTwoInformation": 'The euro (symbol: €; code: EUR) is the official currency of 19 out of the 27 member states of the European Union. This group of states is known as the eurozone or, officially, the euro area, and includes about 349 million citizens as of 2019.[12][13] The euro is divided into 100 cents.'
};

run();
run2();

async function run() {
    sock.connect("tcp://127.0.0.1:7000");
    console.log("Connected to server!");
    sock.on('message', function(msg){
        console.log(msg.toString());
    });
}

async function run2() {
    secondSock.bind("tcp://127.0.0.1:7005");
    console.log("Server is ready and listening on port 7005!");
    console.log("Press any key to start sending the JSON");
    process.stdin.once("data", send);
}

async function send() {
    console.log("About to send JSON data to client!");
    secondSock.send(JSON.stringify(fileReturn)); // sending JSON data back
}