function storeData() {
    // take value from text field using id or name
    //we can store json object. but we have to convert 
    // into string. 
    let clients = {id:100,name:"Ajay",age:21};
    sessionStorage.setItem("empObj",JSON.stringify(emp));
    sessionStorage.setItem("obj1","Raj");
    localStorage.setItem("obj1","Raju");
    console.log("Data store in session and local storage")
}

function clearData() {
    document.getElementById('cli_name').value = '';
    document.getElementById('proj_name').value = '';
    document.getElementById('budget').value = '';
}