if (localStorage.getItem("cliObj") == undefined) {
    let clients = [];
    localStorage.setItem("cliObj", JSON.stringify(clients));
}

function storeData() {
    var localClientData = localStorage.getItem("cliObj");
    var clientData = JSON.parse(localClientData);

    var client_name = document.getElementById('cli_name').value;
    var project_name = document.getElementById('proj_name').value;
    var budget_value = document.getElementById('budget').value;
    clientData.push({
        "cli_name" : client_name,
        "proj_name" : project_name,
        "budget" : budget_value
    });
    localStorage.setItem("cliObj",JSON.stringify(clientData));
    console.log("Data stored in local storage.")
}

function clearData() {
    document.getElementById('cli_name').value = '';
    document.getElementById('proj_name').value = '';
    document.getElementById('budget').value = '';
}