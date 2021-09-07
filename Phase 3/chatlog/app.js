let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let mongoose = require('mongoose');
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(bodyParser.json());

let url = "mongodb://localhost:27017/tcs_mean";
mongoose.connect(url).then(res => console.log("Connected...")).catch(error => console.log(error));

const messageModel = require("./model/messageSchema");
const counterModel = require("./model/counterSchema");


app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\chatbox.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected...");

    var messageDataArr = [];
    var messageJSONArr = [];
    let counter = new counterModel({__id: "messageid", sequence_value: 0})
    counterModel.insertMany(counter, (err, result) => {
        if(!err) {
            console.log("Counter Started...");
        } else {
            console.log(err);
        }
    })

    socket.on("name",(name)=> {
        messageDataArr[0] = name.value;
        console.log("Hello " + name + ",");
    })
    socket.on("message",(msg)=> {
        messageDataArr[1] = msg;
        console.log("Message From Client: " + msg);
    })

    socket.on("time-sent",(timestamp)=> {
        messageDataArr[2] = timestamp;
        console.log("Time Sent: " + timestamp);
        console.log("");
    })

    //console.log(messageDataArr);
    //messageArr

    socket.on("disconnect", () => {
        console.log("Client disconnected...")
    })
    

});

http.listen(8080, () => console.log("Server running on port number 8080..."));