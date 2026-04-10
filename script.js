// OTP
function sendOTP() {
    let mobile = document.getElementById("mobile").value;

    if (mobile.length != 10) {
        alert("Enter valid mobile number");
    } else {
        alert("OTP Sent");
    }
}

// Login
function login() {
    let otp = document.getElementById("otp").value;

    if (otp === "1234")
         {
            window.location.href = "dashboard.html";
        
    }
     else 
        {
        alert("Wrong OTP");
    }
}

// Fetch Document
function fetchDoc() {
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;

    if (name === "") {
        alert("Enter details");
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("dept", dept);
        window.location.href = "document.html";
    }
}

// Show Document
window.onload = function () {
    if (document.getElementById("userName")) {
        document.getElementById("userName").innerText = localStorage.getItem("name");
        document.getElementById("docType").innerText = localStorage.getItem("dept");
    }
}

// Actions
function download() {
    alert("Document Downloaded");
}

function share() {
    alert("Document Shared");
}
