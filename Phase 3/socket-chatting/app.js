let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

var responses = ['How are you?', 'How was your day?', 'How may I help you?', 'What questions do you have for me?', 'Pleased to meet you. How may I help you today?', 'Sorry, I didn\'t quite get that. Could you please try again?'];
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
    socket.on("name",(name)=> {
        console.log("Hello " + name + ",");
    })
    socket.on("message",(msg)=> {
        console.log("Client Message: " + msg);
    })

    socket.on("time-sent",(timestamp)=> {
        console.log("Time Sent: " + timestamp);
        console.log("");
    })
    // sending data to client
    var resIndex = Math.floor(Math.random() * responses.length);
    //console.log(resIndex);
    socket.emit("serv-msg", responses[resIndex]);
})

http.listen(8080,()=>console.log("Server running on port number 8080"));