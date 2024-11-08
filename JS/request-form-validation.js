// Request form validation

function validateRequestForm() {
  const org = document.getElementById("org").value;
  const campus = document.getElementById("campus").value;
  const school = document.getElementById("school").value;
  const f_name = document.getElementById("f_name").value;
  const l_name = document.getElementById("l_name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const orgError = document.getElementById("org-error");
  const campusError = document.getElementById("campus-error");
  const schoolError = document.getElementById("school-error");
  const firstNameError = document.getElementById("f-name-error");
  const lastNameError = document.getElementById("l-name-error");
  const phoneError = document.getElementById("phone-error");
  const emailError = document.getElementById("email-error");

  orgError.textContent = "";
  campusError.textContent = "";
  schoolError.textContent = "";
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  if (org === "") {
    orgError.textContent = "*Please enter your organization name properly.";
    isValid = false;
  }
  if (campus === "") {
    campusError.textContent = "*Please enter your campus name properly.";
    isValid = false;
  }
  if (school === "") {
    schoolError.textContent = "*Please enter your school name properly.";
    isValid = false;
  }
  if (f_name === "") {
    firstNameError.textContent = "*Please enter your first name properly.";
    isValid = false;
  }
  if (l_name === "") {
    lastNameError.textContent = "*Please enter your last name properly.";
    isValid = false;
  }
  if (phone === "") {
    phoneError.textContent = "*Please enter your phone number properly.";
    isValid = false;
  }
  if (email === "" || !email.includes("@")) {
    emailError.textContent = "*Please enter a valid email address.";
    isValid = false;
  }

  return isValid;
}
