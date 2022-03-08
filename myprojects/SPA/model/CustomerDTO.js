function CustomerDTO (id,name,address,salary){
var customerID=id;
var customerName=name;
var customerAddress=address;
var customerSalary=salary;

this.getCustomerID=function (){
    return customerID;
}
this.setCustomerID=function (id){
   customerID=id;
}
this.getCustomerName=function (){
    return customerName ;
}
this.setCustomerName=function (name){
    customerName=name;
}
this.getCustomerAddress=function (){
    return customerAddress ;
}
this.setCustomerAddress=function (address){
    customerAddress=address;
}
this.getCustomerSalary=function (){
    return customerSalary ;
}
this.setCustomerSalary=function (salary){
    customerSalary=salary;
}


}