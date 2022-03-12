//////////////-load customer and item ids /////////////////////////////////////

$("#orderCusIdCmb").change(function (e){
    let selectedCustomerId =$('#orderCusIdCmb').find(":selected").text();
    selectedCustomer(selectedCustomerId);
});


$("#itemIdCmb").change(function (e){
    let selectedItemId =$('#itemIdCmb').find(":selected").text();
    selectedItem(selectedItemId);
});

/* load customer ids to cmb (customer)*/
function loadAllCustomerIds() {
    $("#orderCusIdCmb").empty();

    let cusHint=`<option disabled selected> Select Customer ID</option>`;

    $("#orderCusIdCmb").append(cusHint);

    for (let i in customerDB) {
        let option = `<option value="${customerDB[i].getCustomerID()}">${customerDB[i].getCustomerID()}</option>`
        $("#orderCusIdCmb").append(option);
    }
}

/* load item ids to cmb (item)*/
function loadAllItemIds() {
    $("#itemIdCmb").empty();

    let itemHint=`<option disabled selected> Select Item ID</option>`;
    $("#itemIdCmb").append(itemHint);

    for (let i in itemDB) {
        let option = `<option value="${itemDB[i].getItemID()}">${itemDB[i].getItemID()}</option>`
        $("#itemIdCmb").append(option);
    }
}

/*load item data to text fields*/
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

/*load customer data to text fields*/
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