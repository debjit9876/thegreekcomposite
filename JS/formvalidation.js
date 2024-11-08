// Form validation 

function validateForm(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const emailError = document.getElementById("email-error");
    
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "*Please enter your name properly.";
        isValid = false;
    }

    if (phone === "") {
        phoneError.textContent =
            "*Please enter your phone number properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "*Please enter a valid email address.";
        isValid = false;
    }

    return isValid;
}