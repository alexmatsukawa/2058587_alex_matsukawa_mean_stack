const { req, res } = require('express');
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.listen(8080, ()=> console.log("Server is running on port 8080..."));