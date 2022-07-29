REACT APPLICATION README INFORMATION:

This application allows the user to create, watch, and convert stocks and shares to different currency types as well as simply create a watch list for the user to enjoy for personal use.


MICROSERVICE README INFORMATION:

The microservice that I've chosen to implement relies on using ZeroMQ as the main tool. Within ZeroMQ, we are utilizing a two-way push-pull pattern in order to allow for information to be sent from the server (push) to the worker (pull). When the information (in the form of a JSON object) is sent by my partner (the initial server) to me (the worker) (on one socket as the communication pipe), I am able to process his data on my end and prepare it for delivery. On a second socket, the roles are now reversed. The worker now becomes the server and prepares to send back the response JSON object to the previous server (the now worker - my partner). I would push my JSON response object onto the second socket and my partner would pull that information down. This would then complete the process and my partner would receive the appropriate date, write it to a local JSON file on their file system, and use that JSON file to add to their project / render as they need.

Instructions:
      REQUEST & RECEIVE INSTRUCTIONS:
      
        1) Open up two terminals, run 'node server.js' in one and 'node worker.js' in the second.
        
        2) Once the worker is connected and the server is listening on port 7000, push any button the server terminal. This will send the JSON object with parameter
        information you've requested to send.
       
        3) Then, you'll need to go to the worker and see if the information you sent was logged in the console. Then, you can push any button and hit enter on the
           worker terminal to process that JSON information that was received and send a JSON object with the new requested information back to the server.
           
        4) Once you do that, press any button on the server terminal and hit enter and it will write the new JSON object information you received back to a local JSON file on your file system to be exported and used wherever you'd like in your project.
        
         Request:
        - Starts as Server (switches to Worker later)
        - Will receive JSON object from the worker after sending a JSON object to the worker for processing.
        - If the received JSON is empty, an error will be thrown that no data was found.
        
        Receive:
          - Starts as Worker (switches to Server later)
          - Will receive JSON object from the server and send a JSON object back to the server
          - If the JSON object is empty, an error will be thrown suggesting that there was no information sent.
          - If the JSON object is not empty, it will be processed accordingly and matched to internal data (if the information is not found, an error will be thrown that there is incorrect data).
        
        EXAMPLE CALLS: (the left side of the arrows below is the command written, the right side of the arrows is what prints as a result).
        The server commands must run first in order to send the information to the worker, because these actions need to be in a precise order otherwise information will not be sent as needed.
        
                In one terminal:
                                cd src
                                node server.js --> prints "Server is ready and listening on port 7000! Press any key to start sending the currency parameter data!"
                                g (random key) --> About to send currency parameter data to user! Press to move onto run2 where you will receive the processed
                                information! 
                                !!!!STOP HERE AND GO TO WORKER TERMINAL!!!
                                g (random key) --> Connected to server! Press any key to print the requested data!
                                g (random key) --> prints requested data below.
                                {
                                currencyOneInformation: 'The United States dollar, or U.S. dollar, is made up of 100 cents. It is 
                                represented by the symbol $ or US$ to differentiate it from other dollar-based currencies. 
                                The U.S. dollar is considered a benchmark currency and is the most-used currency in transactions across the world.',
                                currencyTwoInformation: 'The euro (symbol: €; code: EUR) is the official currency of 19 out of the 27 member
                                states of the European Union. This group of states is known as the eurozone or, officially, the euro area, and includes about 
                                349 million citizens as of 2019. [12][13] The euro is divided into 100 cents.'
                                }

               In second terminal: 
                              cd src
                              node worker.js --> "Connected to server! Server is ready and listening on port 7005! Press any key to process and start sending the JSON!"
                              {"currencyOne":"USD","currencyTwo":"EUR"} --> information received from server and printed
                              g (random key) --> about to send JSON data to client!
                              !!!END OF WORKER TERMINAL OPERATIONS, NOW GO BACK TO WHERE YOU LEFT OFF IN SERVER TERMINAL!!!
                              
UML:
![UML](https://user-images.githubusercontent.com/82230435/180621693-45f2075e-a1ac-427a-a555-c84ccd36d00f.jpg)


