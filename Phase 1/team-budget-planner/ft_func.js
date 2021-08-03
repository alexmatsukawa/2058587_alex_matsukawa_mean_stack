function displayData() {
    document.getElementById("main").innerHTML="";
    let clientObj = localStorage.getItem("cliObj");
    let clientJson = JSON.parse(clientObj)
    var table = document.createElement("table")
    for(var i = 0; i < Object.keys(clientJson.cli_name[i]).length; i++) {
        var r, c;
        r = table.insertRow(i);
        c = r.insertCell(0);
        c.innerHTML = clientJson[i].cli_name;
        c = r.insertCell(1);
        c.innerHTML = clientJson[i].proj_name;
        c = r.insertCell(2);
        c.innerHTML = clientJson[i].budget;
    }
    document.getElementById("main").appendChild(table);
}