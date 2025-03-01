document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (phone === "+66026491648" && password === "6677") {
        window.location.href = "dashboard.html";  
    } else {
        errorMessage.textContent = "Invalid number or password";
    }
});
function transferMoney() {
    let bank = document.getElementById("bank").value;
    let account = document.getElementById("account").value;
    let amount = document.getElementById("amount").value;
    let message = document.getElementById("message");

    if (bank === "" || account === "" || amount === "") {
        message.innerHTML = "All fields are required!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Processing transfer...";
        message.style.color = "yellow";

        setTimeout(() => {
            window.location.href = "otp_verification.html";
        }, 2000);
    }
}
function verifyOTP() {
    let otp = document.getElementById("otp").value;
    let otpMessage = document.getElementById("otp-message");

    if (otp.length < 4) {
        otpMessage.innerHTML = "Invalid code!";
        otpMessage.style.color = "red";
    } else {
        otpMessage.innerHTML = "Processing...";
        otpMessage.style.color = "yellow";

        setTimeout(() => {
            otpMessage.innerHTML = "Invalid code!";
            otpMessage.style.color = "red";
        }, 2000);
    }
}