
/*hide form*/
document.getElementById("itemId").style.setProperty("Display","none","important");
document.getElementById("customerId").style.setProperty("Display","none","important");

/*transition*/
document.getElementById("navOrderPage").addEventListener("click",function (){
    document.getElementById("orderId").style.setProperty("Display","block","important");
    document.getElementById("customerId").style.setProperty("Display","none","important");
    document.getElementById("itemId").style.setProperty("Display","none","important");
});

document.getElementById("navCustomerPage").addEventListener("click",function (){
    document.getElementById("customerId").style.setProperty("Display","block","important");
    document.getElementById("orderId").style.setProperty("Display","none","important");
    document.getElementById("itemId").style.setProperty("Display","none","important");
});

document.getElementById("navItemPage").addEventListener("click",function (){
    document.getElementById("itemId").style.setProperty("Display","block","important");
    document.getElementById("customerId").style.setProperty("Display","none","important");
    document.getElementById("orderId").style.setProperty("Display","none","important");
});