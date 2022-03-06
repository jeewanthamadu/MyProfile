/*_________customer part___________*/
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


})
