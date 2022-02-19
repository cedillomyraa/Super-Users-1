//create the constructor es2015/class
class User{
    //these are parameters--------------------------------------------
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    //we need to reset orginal appearance by removing the alert error
    $("input").removeClass("alert-error");
    //validations
    if(user.email.length==0){
        // if we get here it means that email is empty and it is not valid
        valid=false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing email");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Missing password");
    }
    if(user.fname.length==0){
        valid=false;
        console.log("Missing first name");
    }
    if(user.lname.length==0){
        valid=false;
        console.log("Missing last name");
    }
    //add the validation for first name and last name
    return valid;
}


//local variable
function registerUser(){
    let email=$("#txtEmail").val();//check id in HTML
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    if(isValid(user)){
        saveUser(user);//this is in the storeManager.js
    }
}

function init(){
    console.log("Inint Register");
    //hook event
    $("#btnRegister").click(registerUser);
}
window.onload=init;