if (sessionStorage.getItem("cart") == undefined) {
    var cart = [];
    sessionStorage.setItem("cart", JSON.stringify(cart));
}
function addItem1() {
    var cartData = JSON.parse(sessionStorage.getItem('cart'));
    var itemName1 = document.getElementById('item-1-name').innerHTML;
    console.log(itemName1);
    var itemPrice1 = document.getElementById('item-1-price').innerHTML;
    console.log(itemPrice1);
    cartData.push({
        "item": itemName1,
        "price": itemPrice1
    });
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    updateCart();
}
function addItem2() {
    var cartData = JSON.parse(sessionStorage.getItem('cart'));
    var itemName2 = document.getElementById('item-2-name').innerHTML;
    var itemPrice2 = document.getElementById('item-2-price').innerHTML;
    cartData.push({
        "item": itemName2,
        "price": itemPrice2
    });
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    updateCart();
}
function addItem3() {
    var cartData = JSON.parse(sessionStorage.getItem('cart'));
    var itemName3 = document.getElementById('item-3-name').innerHTML;
    var itemPrice3 = document.getElementById('item-3-price').innerHTML;
    cartData.push({
        "item": itemName3,
        "price": itemPrice3
    });
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    updateCart();
}
function addItem4() {
    var cartData = JSON.parse(sessionStorage.getItem('cart'));
    var itemName4 = document.getElementById('item-4-name').innerHTML;
    var itemPrice4 = document.getElementById('item-4-price').innerHTML;
    cartData.push({
        "item": itemName4,
        "price": itemPrice4
    });
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    updateCart();
}
function displayCart() {
    document.getElementById("checkout").innerHTML = "";
    var sessionCartData = sessionStorage.getItem("cart");
    console.log(sessionCartData);
    var cartData = JSON.parse(sessionCartData);
    console.log(cartData);
    var table = document.createElement("table");
    table.setAttribute("class", "table table-striped table-bordered");
    var thead = document.createElement("thead");
    thead.setAttribute("class", "thead-dark");
    var trH = document.createElement("tr");
    var th0 = document.createElement("th");
    th0.setAttribute("scope", "col");
    th0.innerHTML = "Item Name";
    var th1 = document.createElement("th");
    th1.setAttribute("scope", "col");
    th1.innerHTML = "Price";
    trH.appendChild(th0);
    trH.appendChild(th1);
    thead.appendChild(trH);
    table.appendChild(thead);
    var tbody = document.createElement("tbody");
    for (var i = 0; i < cartData.length; i++) {
        var tr = document.createElement("tr");
        var td0 = document.createElement("td");
        td0.innerHTML = cartData[i].item;
        var td1 = document.createElement("td");
        td1.innerHTML = cartData[i].price;
        tr.appendChild(td0);
        tr.appendChild(td1);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.getElementById("checkout").appendChild(table);
    var p = document.createElement("p");
    var checkoutTotal = 0;
    for (var j = 0; j < cartData.length; j++) {
        checkoutTotal += parseFloat(cartData[j].price.replace(/\$|,/g, ''));
    }
    p.innerHTML = "Total Price: $" + checkoutTotal;
    document.getElementById("checkout").appendChild(p);
}
function updateCart() {
    document.getElementById('cart-size').innerHTML = '';
    var cartData = JSON.parse(sessionStorage.getItem('cart'));
    var counter = 0;
    for (var k = 0; k < cartData.length; k++) {
        counter++;
    }
    document.getElementById('cart-size').innerHTML = 'Cart Size: ' + counter;
}
