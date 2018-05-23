$(function () {
    //pulls orders from local storage
    var orders = [];
    var oldOrdersJSON = localStorage.getItem("orders");
    var oldOrders = JSON.parse(oldOrdersJSON);
    if (oldOrders !=null)
 {
    orders = oldOrders;
 }


    //adds orders from local storage to YourOrders
    var oldOrdersHTML = '';
    orders.forEach(function(currentOrder){
        oldOrdersHTML += renderM(currentOrder);
    });
    $("#orderList").append(oldOrdersHTML);
    //writes HTML to website

  function renderCoffeeOrder(order){
    var finalHTML = '<div class="order">'
    finalHTML += '<span>' + order.coffeeOrder+ '</span>';
    finalHTML += '<span>' + order.email+ '</span>';
    finalHTML += '<span>' + order.size+ '</span>';
    finalHTML += '<span>' + order.flavorShot+ '</span>';
    finalHTML += '<span>' + order.strength+ '</span>';
    finalHTML += '<button type="button" class="btn btn-danger">'+'Remove Order'+'</button>'
    finalHTML += '<div>'
    return finalHTML;
  };
//gets current values from form with "submit" button
    $('form').submit(function (e){
       e.preventDefault();
    var currentOrder = {
    coffeeOrder: $('#coffeeOrder').val(),
    email: $("#emailInput").val(),
    size:$("input:checked").val(),
    flavorShot:$("#flavorShot").val(),
    strength:$("#strengthLevel").val(),   
};

orders.push(currentOrder);
var renderedHTML = renderCoffeeOrder(currentOrder);
$("#orderList").append(renderedHTML);

//saves order to list of orders in local storage
var orderJSON = JSON.stringify(orders);
localStorage.setItem('orders', orderJSON);

});
//deletes current order
$(document).on('click', '.btn-danger', function() {
    $(this).parent().remove();
});



});
