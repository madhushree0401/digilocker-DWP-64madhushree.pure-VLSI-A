// Mobile verify button
document.querySelector("button").addEventListener("click", function () {
    let mobile = document.querySelector("input[placeholder='Mobile Number']").value;

    if (mobile === "") {
        alert("Please enter mobile number");
    } else if (mobile.length !== 10) {
        alert("Enter valid 10 digit mobile number");
    } else {
        alert("OTP Sent Successfully!");
    }
});


// Continue button
document.querySelectorAll("button")[1].addEventListener("click", function () {
    let otp = document.querySelector("input[placeholder='Enter OTP']").value;
    let username = document.querySelector("input[placeholder='Username']").value;
    let password = document.querySelector("input[placeholder='Password']").value;

    if (otp === "" || username === "" || password === "") {
        alert("Please fill all details");
    } else {
        alert("Signup Successful!");
    }
});