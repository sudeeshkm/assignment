function validate(){
    document.getElementById("eerror").textContent="";
    document.getElementById("perror").textContent="";
    document.getElementById("merror").textContent="";
    document.getElementById("cperror").textContent="";
    document.getElementById("strength").textContent="";
    var x=verifyemail();
    var y=verifymob();
    var z=verifypass();
    return y && z && x;
}
function verifyemail() {
    var e = document.getElementById("em");
    var validRegex =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
    if (validRegex.test(e.value)){
        return true;
    }  
    else {
        document.getElementById("eerror").textContent="Invalid E-mail ID";
        document.getElementById("eerror").style.color="red";
        e.style.border="2px solid red";
        e.value="";
        return false;
    }
}

function verifymob() {
    var phone = document.getElementById("mob");
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if (phone.value.match(phoneNum)) {
        return true;
    }
    else {
        //alert("Invalid Mobile Number");
        document.getElementById("merror").textContent="Invalid Mobile Number";
        document.getElementById("merror").style.color="red";
        phone.style.border="2px solid red";
        phone.focus();
        phone.value="";
        return false;
    }

}

function verifypass() {
    var p = document.getElementById("pwd");
    var cp = document.getElementById("cpwd");
    var passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (cp.value != p.value) {
        document.getElementById("cperror").textContent="Password and confirm passwords does not match";
        document.getElementById("cperror").style.color="red";
        p.style.border="2px solid red";
        cp.style.border="2px solid red";
        pwd.value="";
        cp.value="";
        return false;
    }

    if (p.value.length < 8) {
        document.getElementById("perror").textContent="Password is too short";
document.getElementById("perror").style.color="red";
        p.style.border="2px solid red";
        pwd.value="";
        cp.value="";
        return false;
    }
    if (p.value.length > 15) {
        document.getElementById("perror").textContent="Password is too long";
        document.getElementById("perror").style.color="red";
        p.style.border="2px solid red";
        pwd.value="";
        cp.value="";
        return false;
    }
    if (pwd.value.match(passw)) {
        return true;
    }
    else {
       
        document.getElementById("perror").textContent="Input Password with 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        document.getElementById("perror").style.color="red";
        p.style.border="2px solid red";
        pwd.value="";
        cp.value="";
        return false;
    }
}
function passwordstrength() {
    var strength = document.getElementById('strength');
var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("pwd");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green;font-family:Franklin Gothic Medium;font-size:20px">Strong Password!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange;font-family:Franklin Gothic Medium;font-size:20px">Medium Password!</span>';
    } else {
        strength.innerHTML = '<span style="color:red;font-family:Franklin Gothic Medium;font-size:20px">Weak Password!</span>';
    }
}

// function colorchange() {
//     var f = document.getElementById("sform");
//     f.style.backgroundColor = "";
// }
// function colorback() {
//     var f = document.getElementById("sform");
//     f.style.backgroundColor = "transparent";
// }
