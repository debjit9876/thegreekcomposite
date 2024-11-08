function validateEmailForm() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error-1");

  emailError.textContent = "";

  let isValid = true;

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "*Please enter a valid email address.";
    isValid = false;
  }

  return isValid;
}
