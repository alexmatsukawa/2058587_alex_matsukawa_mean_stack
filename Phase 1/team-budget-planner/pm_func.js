let clients = {};

function storeData() {
    // take value from text field using id or name
    //we can store json object. but we have to convert 
    // into string. 
    var client_name = document.getElementById('cli_name');
    var project_name = document.getElementById('proj_name');
    var budget_value = document.getElementById('budget');
    clients.push({
        "cli_name" : client_name,
        "proj_name" : proj_name,
        "budget" : budget_value
    });
    localStorage.setItem("cliObj",JSON.stringify(clients));
    console.log("Data stored in local storage.")
}

function clearData() {
    document.getElementById('cli_name').value = '';
    document.getElementById('proj_name').value = '';
    document.getElementById('budget').value = '';
}