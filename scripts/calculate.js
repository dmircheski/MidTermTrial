let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');
let checkbox = document.getElementById('agree');

document.getElementById('btn').addEventListener("click", calculate);

function checkField1() {
    if (num1.value.length == 0) {
        document.getElementById('error1').innerHTML = "Cannot leave number 1 field empty";
        return false;
    } else {
        document.getElementById('error1').innerHTML = "";
        return true;
    }
}

function checkField2() {
    if (num2.value.length == 0) {
        document.getElementById('error2').innerHTML = "Cannot leave number 2 field empty";
        return false;
    } else {
        document.getElementById('error2').innerHTML = "";
        return true;
    }
}

function checkCheckBox() {
    if(checkbox.checked) {
        return true
    } else {
        return false;
    }
}

function calculate() {
    if(checkField1() && checkField2() && checkCheckBox() == true) {
        let result = Number(num1.value) + Number(num2.value);
        localStorage.setItem("Result", result);
    } else {
        alert("You need to check the box");
    }
}