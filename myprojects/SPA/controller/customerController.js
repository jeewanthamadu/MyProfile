/*_________________customer part______________________*/
generateId();



/*_________customer save___________*/
$("#btnCusAdd").click(function (){
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    /*var customerOB ={
        id:customerId,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }*/

    var customerOB=new CustomerDTO(customerId,customerName,customerAddress,customerSalary);

    customerDB.push(customerOB);
    clearFields();
    loadTableCusData();
    generateId();

});


/*_________Update Customer___________*/
$("#btnCusUpdate").click(function (){
    let customerId = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();

    for (var i=0;i<customerDB.length;i++){
        if (customerDB[i].getCustomerID()==customerId){
        customerDB[i].setCustomerName(customerName);
        customerDB[i].setCustomerAddress(customerAddress);
        customerDB[i].setCustomerSalary(customerSalary);
        }
    }
    loadTableCusData();
    clearFields();
    generateId();
});


/*_________Delete Customer___________*/
function deleteCustomer (){
$("#btnCusDelete").click(function (){
    let getClickData=$("#txtCusID").val();
    for (let i=0;i<customerDB.length;i++){
        if (customerDB[i].getCustomerID()==getClickData){
            customerDB.splice(i, 1);
        }
    }
    clearFields();
    loadTableCusData();
generateId();
});
}



/*_________click customer Table ___________*/
function bindCustomer (){
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
}

/*_________clear button___________*/
$("#btnCusClearField").click(function (){
    clearFields();
});

/*_________customer Table Load___________*/
function loadTableCusData (){
    $("#customerTableBody").empty();
    for (var i of customerDB){
        let raw = `<tr><td>${i.getCustomerID()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerSalary()}</td></tr>`
        $("#customerTableBody").append(raw);
        bindCustomer();
        deleteCustomer();
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
        $("#txtCusID").val(response.getCustomerID());
        $("#txtCusName").val(response.getCustomerName());
        $("#txtCusAddress").val(response.getCustomerAddress());
        $("#txtCusSalary").val(response.getCustomerSalary());
    }else {
        alert("Invalid customer Search");
        clearFields();
    }
});
function searchCustomer (id){
    for (let i=0;i<customerDB.length;i++){
        if (customerDB[i].getCustomerID()==id){
            return customerDB[i];
        }
    }
}

/*_________Auto Generate ID___________*/
function generateId() {
    let index = customerDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = customerDB[customerDB.length - 1].getCustomerID();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#txtCusID").val("C00-001");
    } else if (temp <= 9) {
        $("#txtCusID").val("C00-00" + temp);
    } else if (temp <= 99) {
        $("#txtCusID").val("C00-0" + temp);
    } else {
        $("#txtCusID").val("C00-" + temp);
    }

}
