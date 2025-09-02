// ---------------------------
// Part 1: Event Handling
// ---------------------------
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "Hello, you clicked the button!";
});

// ---------------------------
// Part 2: Interactive Features
// ---------------------------

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// ---------------------------
// Part 3: Form Validation
// ---------------------------
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent real form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Name validation
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Feedback to user
  const feedback = document.getElementById("formFeedback");
  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully! 🎉";
  }
});
