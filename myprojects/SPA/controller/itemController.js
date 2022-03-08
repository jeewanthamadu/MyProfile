

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


/*_________Item Search bar___________*/
$("#btnItemSearch").click(function (){
    var searchId = $("#txtItemSearch").val();
    var response = searchItem(searchId);
    if (response){
        $("#txtItemID").val(response.id);
        $("#txtItemName").val(response.name);
        $("#txtItemQty").val(response.qty);
        $("#txtItemPrice").val(response.price);
    }else {
        alert("Invalid customer Search");
        clearFields();
    }
});
function searchItem (id){
    for (let i=0;i<itemDB.length;i++){
        if (itemDB[i].id==id){
            return itemDB[i];
        }
    }
}
