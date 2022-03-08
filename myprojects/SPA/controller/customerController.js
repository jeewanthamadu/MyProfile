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


/*_________Customer Search bar___________*/
$("#btnCusSearch").click(function (){
    var searchId = $("#txtCusSearch").val();
    var response = searchCustomer(searchId);
    if (response){
        $("#txtCusID").val(response.id);
        $("#txtCusName").val(response.name);
        $("#txtCusAddress").val(response.address);
        $("#txtCusSalary").val(response.salary);
    }else {
        alert("Invalid customer Search");
        clearFields();
    }
});
function searchCustomer (id){
    for (let i=0;i<customerDB.length;i++){
        if (customerDB[i].id==id){
            return customerDB[i];
        }
    }
}

