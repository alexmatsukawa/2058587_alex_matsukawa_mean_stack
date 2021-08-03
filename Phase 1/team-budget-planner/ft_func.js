function displayData() {
    document.getElementById("main").innerHTML="";
    var br = document.createElement("br");
    document.getElementById("main").appendChild(br);
    let clientObj = localStorage.getItem("cliObj");
    console.log(clientObj);
    let clientJson = JSON.parse(clientObj);
    console.log(clientJson);
    var table = document.createElement("table");
    table.setAttribute("border", "1px solid")
    var r, c;
    r = table.insertRow(0);
    c = r.insertCell(0);
    c.innerHTML = "Client Name";
    c = r.insertCell(1);
    c.innerHTML = "Project Name";
    c = r.insertCell(2);
    c.innerHTML = "Budget ($)";
    for(var i = 0; i < clientJson.length; i++) {
        r = table.insertRow(i + 1);
        c = r.insertCell(0);
        c.innerHTML = clientJson[i].cli_name;
        c = r.insertCell(1);
        c.innerHTML = clientJson[i].proj_name;
        c = r.insertCell(2);
        c.innerHTML = clientJson[i].budget;
    }
    document.getElementById("main").appendChild(table);
    var p = document.createElement("p");
    var budgetTotal = 0;
    for(var j = 0; j < clientJson.length; j++) {
        budgetTotal += parseInt(clientJson[j].budget);
    }
    p.innerHTML = "The total budget for all projects is " + budgetTotal + ".";
    document.getElementById("main").appendChild(p);
}