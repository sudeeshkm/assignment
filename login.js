function validate(){
document.getElementById("eerror").textContent="";
document.getElementById("perror").textContent="";
var x=verifyemail();
var z=verifypass();
return z && x;
}
function verifyemail(){
    var e = document.getElementById("exampleInputEmail1");
var validRegex = /^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
if (validRegex.test(e.value)){
    return true;
}
else {
    document.getElementById("eerror").textContent="Invalid E-mail ID";
    document.getElementById("eerror").style.color="red";
    e.style.border="2px solid red";
    e.value="";
    return false
}
}
function verifypass(){
    var p = document.getElementById("exampleInputPassword1");
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-z0-9])(?!.*\s).{8,15}$/;
    if(exampleInputPassword1.value.match(passw)){

    }
    else{
        document.getElementById("perror").textContent="Input Password with 8 to 15 characters which contain atleast one lowercase letter,one numeric digit,and one special character";
        document.getElementById("perror").style.color="red";
        p.style.border=" 2px solid red";
        exampleInputPassword1="";
        return false;
    }
}