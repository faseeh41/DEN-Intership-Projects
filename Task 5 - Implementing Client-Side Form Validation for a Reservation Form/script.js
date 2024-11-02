document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");

  form.addEventListener("input", (event) => {
    const input = event.target;
    validateField(input);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = form.checkValidity();
    if (isValid) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
      form.querySelectorAll("input").forEach((input) => validateField(input));
    }
  });

  function validateField(input) {
    const errorElement = input.nextElementSibling;
    if (input.validity.valid) {
      errorElement.textContent = "";
      errorElement.style.visibility = "hidden";
    } else {
      showError(input, errorElement);
    }
  }

  function showError(input, errorElement) {
    errorElement.style.visibility = "visible";
    if (input.validity.valueMissing) {
      errorElement.textContent = `Please fill out the ${input.name}.`;
    } else if (input.validity.patternMismatch || input.type === "email") {
      errorElement.textContent = `Please enter a valid ${input.name}.`;
    } else if (input.validity.rangeUnderflow) {
      errorElement.textContent = `Guests must be at least 1.`;
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = `Invalid format for ${input.name}.`;
    } else if (input.validity.rangeOverflow) {
      errorElement.textContent = `The value is too large for ${input.name}.`;
    }
  }

  // Disable past dates for Reservation Date input
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");

  form.addEventListener("input", (event) => {
    const input = event.target;
    validateField(input);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isValid = form.checkValidity();
    if (isValid) {
      alert("Reservation submitted successfully!");
    } else {
      alert("Please fix the errors before submitting.");
      form.querySelectorAll("input").forEach((input) => validateField(input));
    }
  });

  function validateField(input) {
    const errorElement = input.nextElementSibling;
    if (input.validity.valid) {
      errorElement.textContent = "";
      errorElement.style.visibility = "hidden";
    } else {
      showError(input, errorElement);
    }
  }

  function showError(input, errorElement) {
    errorElement.style.visibility = "visible";
    if (input.validity.valueMissing) {
      errorElement.textContent = `Please fill out the ${input.name}.`;
    } else if (input.validity.patternMismatch || input.type === "email") {
      errorElement.textContent = `Please enter a valid ${input.name}.`;
    } else if (input.validity.rangeUnderflow) {
      errorElement.textContent = `Guests must be at least 1.`;
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = `Invalid format for ${input.name}.`;
    } else if (input.validity.rangeOverflow) {
      errorElement.textContent = `The value is too large for ${input.name}.`;
    }
  }

  // Disable past dates for Reservation Date input
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
});
