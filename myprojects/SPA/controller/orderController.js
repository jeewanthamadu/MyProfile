

generateOrderId();
setDate();

$("#btnOrderAdd").click(function (){
    addCart();
});

/*_________load customer and item ids___________*/
$("#orderCusIdCmb").change(function (e){
    let selectedCustomerId =$('#orderCusIdCmb').find(":selected").text();
    selectedCustomer(selectedCustomerId);
});

$("#itemIdCmb").change(function (e){
    let selectedItemId =$('#itemIdCmb').find(":selected").text();
    selectedItem(selectedItemId);
});



/*_________Auto Generate Order ID___________*/
function generateOrderId() {
    let index = orderDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = orderDB[orderDB.length - 1].getOrderID();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#txtOrderId").val("O00-001");
    } else if (temp <= 9) {
        $("#txtOrderId").val("O00-00" + temp);
    } else if (temp <= 99) {
        $("#txtOrderId").val("O00-0" + temp);
    } else {
        $("#txtOrderId").val("O00-" + temp);
    }

}


/*_________load customer ids to cmb ___________*/
function loadAllCustomerIds() {
    $("#orderCusIdCmb").empty();

    let cusHint=`<option disabled selected> Select Customer ID</option>`;

    $("#orderCusIdCmb").append(cusHint);

    for (let i in customerDB) {
        let option = `<option value="${customerDB[i].getCustomerID()}">${customerDB[i].getCustomerID()}</option>`
        $("#orderCusIdCmb").append(option);
    }
}

/* __________________________load item ids to cmb ______________________*/
function loadAllItemIds() {
    $("#itemIdCmb").empty();

    let itemHint=`<option disabled selected> Select Item ID</option>`;
    $("#itemIdCmb").append(itemHint);

    for (let i in itemDB) {
        let option = `<option value="${itemDB[i].getItemID()}">${itemDB[i].getItemID()}</option>`
        $("#itemIdCmb").append(option);
    }
}

/*__________________load item data to text fields___________________*/
function selectedItem(ItemId){
    for (const i in itemDB){
        if (itemDB[i].getItemID()==ItemId) {
            let element = itemDB[i];
            $("#txtOrderItemName").val(element.getItemName());
            $("#txtQtyOnHand").val(element.getItemQty());
            $("#txtPrice").val(element.getItemPrice());
        }
    }
}

/*_________________load customer data to text fields________________*/
function selectedCustomer(CustomerId){
    for (const i in customerDB){
        if (customerDB[i].getCustomerID()==CustomerId) {
            let element = customerDB[i];
            $("#txtOCusName").val(element.getCustomerName());
            $("#txtSalary").val(element.getCustomerSalary());
            $("#txtAddress").val(element.getCustomerAddress());
        }
    }
}

/*__________set Date____________*/
function setDate() {
    let d = new Date();
    let dd = d.toISOString().split("T")[0].split("-");
    $("#txtOrderDate").val(dd[0]+"-"+dd[1]+"-"+dd[2]);
    $("#txtOrderDate").text(dd[0]+"-"+dd[1]+"-"+dd[2]);
}



// ________________________add to cart_____________________

var fullTotal =0;

function addCart(){
    let itemCode =selectedItemId;
    let itemName=$("#txtOrderItemName").val();
    let qtyOnHand=$("#txtQtyOnHand").val();
    let price=$("#txtPrice").val();
    let orderQty=$("#oQty").val();
    let total= 0;

    if (qtyOnHand >= orderQty) {
        qtyOnHand = qtyOnHand - orderQty;
    }else{
        alert("Enter Valid QTY");
        $("#oQty").val("");
        return;
    }

    //___________________Updating qty_______________

    for (let i = 0; i < itemDB.length; i++) {
        if (id == itemDB[i].getItemID()) {
            itemDB[i].setItemQty(qtyOnHand);
        }
    }

    let newQty = 0;
    let newTotal= 0;

    if (checkDuplicates(id)==-1) {
        total = orderQty * price;
        fullTotal = fullTotal + total;
        let row =
            `<tr><td>${itemCode}</td><td>${itemName}</td><td>${price}</td><td>${orderQty}<td>${total}</td></tr>`;
        $("#orderTbody").append(row);
        $("#lblTotal").text(fullTotal+" LKR");
        alert("23445");
        clearInputItems();

    }else{

        let rowNo = checkDuplicates(id);
        newQty = orderQty;
        let oldQty = parseInt($($('#orderTbody>tr').eq(rowNo).children(":eq(3)")).text());
        let oldTotal = parseInt($($('#orderTbody>tr').eq(rowNo).children(":eq(4)")).text());

        fullTotal = fullTotal-oldTotal;
        newQty = parseInt(oldQty) + parseInt(newQty) ;
        newTotal = newQty * price;
        fullTotal = fullTotal + newTotal;

        // ________________Update row____________________
        $('#orderTbody tr').eq(rowNo).children(":eq(3)").text(newQty);
        $('#orderTbody tr').eq(rowNo).children(":eq(4)").text(newTotal);

        $("#lblFullTotal").text(fullTotal+" LKR");
        alert("test");
        clearInputItems();
    }


}


/* ______________Check Duplicate Item _____________________*/
function checkDuplicates(itemId) {
    for (let i = 0; i < $("#orderTbody> tr").length; i++) {
        if (itemId == $('#orderTbody').children().eq(i).children().eq(0).text()) {
            alert(i);
            return i;
        }

    }
    return -1;
}

/* ________Clear Input Field on Selected Item Area ______________*/
function clearInputItems() {
    $("#itemIdCmb").val("");
    $("#txtOrderItemName").val("");
    $("#txtQtyOnHand").val("");
    $("#txtPrice").val("");
    $("#txtOrderQty").val("");
}