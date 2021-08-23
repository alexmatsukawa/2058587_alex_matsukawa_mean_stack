var readlineSync = require('readline-sync');
var fs = require('fs');

let numUsers = 0;
let userData = JSON.parse(fs.readFileSync("dataStore.json").toString());

var usersToAdd = readlineSync.questionInt("How many users would you like to add? ");
numUsers = usersToAdd;
//console.log(numUsers);

for(var i = 0; i < numUsers; i++) {
    var email = readlineSync.questionEMail("Enter Email: ");
    debugger;
    var fname = readlineSync.question("Enter First Name: ");
    debugger;
    var lname = readlineSync.question("Enter Last Name: ");
    debugger;
    var gender = readlineSync.question("Enter Gender: ");
    debugger;
    var age = readlineSync.questionInt("Enter Age: ");
    debugger;
    var time = new Date().toLocaleString();
    userData.push({
        "email" : email,
        "first-name" : fname,
        "last-name" : lname,
        "gender" : gender,
        "age" : age,
        "recording-time": time
    });
    console.log("New User Added. \n");
}
console.log(userData);
debugger;
fs.writeFileSync("dataStore.json", JSON.stringify(userData));