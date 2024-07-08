document
  .getElementById("show-register")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("register-form").classList.remove("hidden");
  });

document.getElementById("show-login").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  if (validateLogin(username, password)) {
    console.log(`Login attempt: Username: ${username}, Password: ${password}`);
    // Add your login logic here
    window.location.href = "main.html";
  } else {
    alert("Please fill in all fields");
  }
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const terms = document.getElementById("terms").checked;

    if (validateRegister(username, email, password, terms)) {
      console.log(
        `Register attempt: Username: ${username}, Email: ${email}, Password: ${password}`
      );
      // Add your registration logic here
      window.location.href = "main.html";
    } else {
      alert("Please fill in all fields correctly");
    }
  });

function validateLogin(username, password) {
  return username.trim() !== "" && password.trim() !== "";
}

function validateRegister(username, email, password, terms) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    username.trim() !== "" &&
    emailPattern.test(email) &&
    password.trim() !== "" &&
    terms
  );
}
