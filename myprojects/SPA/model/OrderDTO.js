
function OrderDTO (oId,cId,date,discount,total) {
    var orderID = oId;
    var orderCusID = cId;
    var orderDate = date;
    var orderdiscount = discount;
    var ordertotal = total;

    this.getOrderID = function () {
        return orderID;
    }
    this.setOrderID = function (oId) {
        orderID = oId;
    }

    this.getOrderCusID = function () {
        return orderCusID;
    }
    this.setOrderCusID = function (cId) {
        orderCusID = cId;
    }

    this.getOrderDate = function () {
        return orderDate;
    }
    this.setOrderDate = function (date) {
        orderDate = date;
    }

    this.getOrderDiscount = function () {
        return orderdiscount;
    }
    this.setOrderDiscount = function (discount) {
        orderdiscount = discount;
    }

    this.getOrderTotal = function () {
        return ordertotal;
    }
    this.setOrderTotal = function (total) {
        ordertotal = total;
    }


}