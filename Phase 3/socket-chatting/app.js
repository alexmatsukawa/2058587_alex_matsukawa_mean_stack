let express = require('express');
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);

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
})

http.listen(8080,()=>console.log("Server running on port number 8080"));