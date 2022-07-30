const zmq = require("zeromq");
const sock = zmq.socket('pull');
const secondSock = zmq.socket('push');

const fileReturn = 
{ 
};

const currencyInfoCheck =
{
    "EURO": "The euro (symbol: €; code: EUR) is the official currency of 19 out of the 27 member states of the European Union. This group of states is known as the eurozone or, officially, the euro area, and includes about 349 million citizens as of 2019. The euro is divided into 100 cents.",
    "USD": "The United States dollar (symbol: $; code: USD; also abbreviated US$ or U.S. Dollar, to distinguish it from other dollar-denominated currencies; referred to as the dollar, U.S. dollar, American dollar, or colloquially buck) is the official currency of the United States and several other countries. The Coinage Act of 1792 introduced the U.S. dollar at par with the Spanish silver dollar, divided it into 100 cents, and authorized the minting of coins denominated in dollars and cents. U.S. banknotes are issued in the form of Federal Reserve Notes, popularly called greenbacks due to their predominantly green color",
    "YEN": "The yen (Japanese: 円, symbol: ¥; code: JPY; also abbreviated as JP¥) is the official currency of Japan. It is the third-most traded currency in the foreign exchange market, after the United States dollar (US$) and the euro.[2] It is also widely used as a third reserve currency after the US dollar and the euro.",
    "AUD": "The Australian dollar (sign: $; code: AUD) is the currency of Australia, including its external territories: Christmas Island, Cocos (Keeling) Islands, and Norfolk Island. It is officially used as currency by three independent Pacific Island states: Kiribati, Nauru, and Tuvalu. It is legal tender in Australia. Within Australia, it is almost always abbreviated with the dollar sign ($), with A$ or AU$ sometimes used to distinguish it from other dollar-denominated currencies. The $ symbol precedes the amount. It is subdivided into 100 cents.",
    "CAD": "The Canadian dollar (symbol: $; code: CAD; French: dollar canadien) is the currency of Canada. It is abbreviated with the dollar sign $, or sometimes CA$, Can$ or C$ to distinguish it from other dollar-denominated currencies. It is divided into 100 cents (¢). Owing to the image of a common loon on its back, the dollar coin, and sometimes the unit of currency itself, are sometimes referred to as the loonie by English-speaking Canadians and foreign exchange traders and analysts.",
    "KWD": "The Kuwaiti dinar (Arabic: دينار كويتي, code: KWD) is the currency of Kuwait. It is sub-divided into 1,000 fils. As of 2022, the Kuwaiti dinar is the currency with the highest value per base unit, with KD 1 equalling US$3.32, just ahead of the Bahraini dinar with BD 1 equalling US$2.65.",
    "INR": "The Indian rupee (symbol: ₹; code: INR) is the official currency of India. The rupee is subdivided into 100 paise (singular: paisa), though as of 2019, coins of denomination of 1 rupee is the lowest value in use. The issuance of the currency is controlled by the Reserve Bank of India. The Reserve Bank manages currency in India and derives its role in currency management on the basis of the Reserve Bank of India Act, 1934.",
    "JOD": "The Jordanian dinar (Arabic: دينار أردني; code: JOD; unofficially abbreviated as JD) has been the currency of Jordan since 1950. The dinar is divided into 10 dirhams, 100 qirsh (also called piastres) or 1000 fulus. It is pegged to the US dollar. The Central Bank of Jordan commenced operations in 1964 and became the sole issuer of Jordanian currency, in place of the Jordan Currency Board.",
    "BHD": "The dinar (Arabic: دينار Dīnār Baḥrēnī) (sign: .د.ب or BD; code: BHD) is the currency of Bahrain. It is divided into 1000 fils (فلس). The Bahraini dinar is abbreviated د.ب (Arabic) or BD (Latin). It is usually represented with three decimal places denoting the fils. The name dinar derives from the Roman denarius. As of December 2021, the Bahraini dinar is the second highest-valued currency unit, at 2.65 United States dollars per unit (the highest-valued unit is the Kuwaiti dinar at $3.32).",
    "GBP": "Sterling (ISO code GBP, abbreviation stg[3]) is the official currency of the United Kingdom and its associated territories. The pound (sign: £) is the main unit of sterling, and the currency itself may be referred to by the compound noun pound sterling or the term British pound, although neither of these are official names of the currency. One pound is subdivided into 100 pence.",
    "OMR": "The Omani rial (Arabic: ريال, ISO 4217 code OMR) is the currency of Oman. It is divided into 1000 baisa (also written baiza, بيسة). From 1973 to 1986, the rial was pegged to the U.S. dollar at 1 Omani rial = US$2.895. The rate was changed in 1986 to 1 Omani rial = US$2.6008, which translates to approximately US$1 = 0.384497 rial. The Central Bank of Oman buys U.S. dollars at 0.384 Omani rial, and sell U.S. dollars at 0.385 Omani rial. It is the third-highest-valued currency unit in the world after the Kuwaiti dinar and the Bahraini dinar."
};

run();
run2();

async function run() {
    sock.connect("tcp://127.0.0.1:7000");
    console.log("Connected to server!");
    sock.on('message', function(msg){
        fileReturn[JSON.parse(msg.toString().firstCurrency)] = currencyInfoCheck[JSON.parse(msg.toString().firstCurrency)];
        fileReturn[JSON.parse(msg.toString().secondCurrency)] = currencyInfoCheck[JSON.parse(msg.toString().secondCurrency)];
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