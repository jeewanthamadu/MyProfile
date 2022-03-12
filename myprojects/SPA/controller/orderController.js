

generateOrderId();
setDate();


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