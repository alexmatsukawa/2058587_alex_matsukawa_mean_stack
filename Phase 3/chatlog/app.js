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
app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\chatbox.html");
})

var messageDataArr = [];
var messageid = 0;

io.on("connection",(socket)=> {
    console.log("Client connected...");

    socket.on("name",(name)=> {
        messageDataArr[0] = name;
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
        //console.log(messageDataArr);
        messageid++;
        //console.log(messageid);
        let message = new messageModel({
            _id: messageid,
            name: messageDataArr[0],
            message: messageDataArr[1],
            time_sent: messageDataArr[2]
        });

        messageModel.insertMany(message, (err, result) => {
            if(!err) {
                console.log("Message saved successsfully!");
            } else {
                console.log(err);
            }
        });;
    })
    
    socket.on("disconnect", () => {
        console.log("Client disconnected...")
    })
    

});

http.listen(8080, () => console.log("Server running on port number 8080..."));