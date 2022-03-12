

/*_________________________item part__________________________________*/

generateItemId();


/*_________item save___________*/
$("#btnItemAdd").click(function (){

    let itemId = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    /*var itemOB ={
        id:itemId,
        name:itemName,
        qty:itemQty,
        price:itemPrice
    }*/

    var itemOB=new ItemDTO(itemId,itemName,itemQty,itemPrice);

    itemDB.push(itemOB);
    clearItemFields();
    loadTableItemData();
    generateItemId();
    loadAllItemIds();
});


function bindItem (){
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

};

/*_________Update Customer___________*/
$("#btnItemUpdate").click(function (){
    let itemId = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    for (var i=0;i<itemDB.length;i++){
        if ( itemDB[i].getItemID()==itemId){
        itemDB[i].setItemName(itemName);
        itemDB[i].setItemQty(itemQty);
        itemDB[i].setItemPrice(itemPrice);
        }
    }
    loadTableItemData();
    clearItemFields();
    generateItemId();
});


/*_________Delete Item___________*/
function deleteItem (){
    $("#btnItemDelete").click(function (){
        let getClickItemData=$("#txtItemID").val();
        for (let i=0;i<itemDB.length;i++){
            if (itemDB[i].getItemID()==getClickItemData){
                itemDB.splice(i, 1);
            }
        }
        clearItemFields();
        loadTableItemData();
        generateItemId();
    });
}


/*_________clear button___________*/
$("#btnItemClear").click(function (){
    clearItemFields();
});


/*_________customer Table Load___________*/
function loadTableItemData (){
    $("#tblItem").empty();
    for (var i of itemDB){
        let raw = `<tr><td>${i.getItemID()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td></tr>`
        $("#tblItem").append(raw);
        bindItem();
        deleteItem();

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
        $("#txtItemID").val(response.getItemID());
        $("#txtItemName").val(response.getItemName());
        $("#txtItemQty").val(response.getItemQty());
        $("#txtItemPrice").val(response.getItemPrice());
    }else {
        alert("Invalid customer Search");
        clearFields();
    }
});
function searchItem (id){
    for (let i=0;i<itemDB.length;i++){
        if (itemDB[i].getItemID()==id){
            return itemDB[i];
        }
    }
}

/*_________Auto Generate Item ID___________*/
function generateItemId() {
    let index = itemDB.length - 1;
    let id;
    let temp;
    if (index != -1) {
        id = itemDB[itemDB.length - 1].getItemID();
        temp = id.split("-")[1];
        temp++;
    }

    if (index == -1) {
        $("#txtItemID").val("I00-001");
    } else if (temp <= 9) {
        $("#txtItemID").val("I00-00" + temp);
    } else if (temp <= 99) {
        $("#txtItemID").val("I00-0" + temp);
    } else {
        $("#txtItemID").val("I00-" + temp);
    }

}
