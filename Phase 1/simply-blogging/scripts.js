function addBlog() {
    //alert("Event Fired");
    var title = document.getElementById('title').value;
    sessionStorage.setItem("title", JSON.stringify(title));
    console.log(title);

    var content = document.getElementById('content').value;
    sessionStorage.setItem("content", JSON.stringify(content));
    console.log(content);

    var imgURL = document.getElementById('img').value;
    sessionStorage.setItem("imgURL", JSON.stringify(imgURL));
    console.log(imgURL);

    var rowDiv = document.getElementById('blog-items');

    var colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-4 border border-secondary");
    colDiv.innerHTML = "<h3>" + parseTitle() + "</h3><p>" + parseContent() + "</p>" +
    "<img src=\"" + parseURL() + "\">";
    rowDiv.appendChild(colDiv);
    clearFields();
}

function clearFields() {
    document.getElementById("title").value = '';
    document.getElementById("content").value = '';
    document.getElementById("img").value = '';
}

function parseTitle() {
    var titleData = sessionStorage.getItem("title");
    let titleJSON = JSON.parse(titleData);
    return titleJSON;
}

function parseContent() {
    var contentData = sessionStorage.getItem("content");
    let contentJSON = JSON.parse(contentData);
    return contentJSON;
}

function parseURL() {
    var urlData = sessionStorage.getItem("imgURL");
    let urlJSON = JSON.parse(urlData);
    return urlJSON;
}