const zmq = require("zeromq");
const sock = zmq.socket('pull');
const secondSock = zmq.socket('push');

const fileReturn = 
{ 
    "value": 1,
    "nameOfCurrency": ""
};

run();
run2();

async function run() {
    sock.connect("tcp://127.0.0.1:7000");
    console.log("Connected to server!");
    sock.on('message', function(msg){
        fileReturn["value"] = (JSON.parse(msg.toString()).price * JSON.parse(msg.toString()).quantity);
        switch(JSON.parse(msg.toString()).toCurrency) {
            case 'EURO':
                fileReturn["value"] *= 0.98;
                fileReturn["nameOfCurrency"] = 'European Euro';
                break;
            
            case 'YEN':
                fileReturn["value"] *= 133.34;
                fileReturn["nameOfCurrency"] = 'Japanese Yen';
                break;

            case 'AUD':
                fileReturn["value"] *= 0.70;
                fileReturn["nameOfCurrency"] = 'Australian Dollar';
                break;

            case 'CAD':
                fileReturn["value"] *= 0.79;
                fileReturn["nameOfCurrency"] = 'Canadian Dollar';
                break;
            
            case 'KWD':
                fileReturn["value"] *= 3.30;
                fileReturn["nameOfCurrency"] = 'Kuwaiti Dinar';
                break;

            case 'INR':
                fileReturn["value"] *= 0.013;
                fileReturn["nameOfCurrency"] = 'Indian Rupee';
                break;
            
            case 'JOD':
                fileReturn["value"] *= 1.41;
                fileReturn["nameOfCurrency"] = 'Jordanian Dollar';
                break;
            
            case 'BHD':
                fileReturn["value"] *= 2.65;
                fileReturn["nameOfCurrency"] = 'Bahranian Dinar';
                break;

            case 'GBP':
                fileReturn["value"] *= 1.22;
                fileReturn["nameOfCurrency"] = 'United Kingdom Sterling Pound';
                break;

            case 'OMR':
                fileReturn["value"] *= 2.60;
                fileReturn["nameOfCurrency"] = 'Omani Rial';
                break;
        
            default:
                console.log("There's no match!")
        }
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