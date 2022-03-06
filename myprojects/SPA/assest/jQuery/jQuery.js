/*_________________customer part______________________*/

/*_________customer save___________*/
$("#btnCusAdd").click(function (){

    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    var customerOB ={
        id:customerId,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }
    customerDB.push(customerOB);
    clearFields()
    loadTableCusData();


    /*_________click customer Table ___________*/
    $("#customerTableBody > tr").click(function (){
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        /*_________set data for text fields__________*/
        $("#txtCusID").val(customerId);
        $("#txtCusName").val(customerName);
        $("#txtCusAddress").val(customerAddress);
        $("#txtCusSalary").val(customerSalary);

    });


});



$("#btnCusClearField").click(function (){
    clearFields();
});

/*_________customer Table Load___________*/
function loadTableCusData (){
    $("#customerTableBody").empty();
    for (var i of customerDB){
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.salary}</td></tr>`
        $("#customerTableBody").append(raw);
    }
}

/*_________clear text field___________*/
function clearFields (){
    $("#txtCusID,#txtCusName,#txtCusAddress,#txtCusSalary").val("");
}

/*_________field focusing___________*/
$("#txtCusID").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusName").focus();
    }
});

$("#txtCusName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusAddress").focus();
    }
});

$("#txtCusAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCusSalary").focus();
    }
});









/*_________________________item part__________________________________*/
/*_________item save___________*/
$("#btnItemAdd").click(function (){

    let itemId = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    var itemOB ={
        id:itemId,
        name:itemName,
        qty:itemQty,
        price:itemPrice
    }
    itemDB.push(itemOB);
    clearItemFields();
    loadTableItemData();



    /*_________click Item Table ___________*/
    $("#tblItem > tr").click(function (){
        let itemId = $(this).children(":eq(0)").text();
        let itemName = $(this).children(":eq(1)").text();
        let itemQty = $(this).children(":eq(2)").text();
        let itemPrice = $(this).children(":eq(3)").text();

        /*_________set data for text fields__________*/
        $("#txtItemID").val(itemId);
        $("#txtItemName").val(itemName);
        $("#txtItemQty").val(itemQty);
        $("#txtItemPrice").val(itemPrice);

    });


});

$("#btnItemClear").click(function (){
    clearItemFields();
});


/*_________customer Table Load___________*/
function loadTableItemData (){
    $("#tblItem").empty();
    for (var i of itemDB){
        let raw = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.qty}</td><td>${i.price}</td></tr>`
        $("#tblItem").append(raw);
    }
}
/*_________clear Item text field___________*/
function clearItemFields (){
    $("#txtItemID,#txtItemName,#txtItemQty,#txtItemPrice").val("");
}
