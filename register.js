function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^\d{8}$/;

  if (!emailRegex.test(email)) {
    msg.style.color = "red";
    msg.innerText = "Enter a valid email address";
    return;
  }

  if (!passwordRegex.test(password)) {
    msg.style.color = "red";
    msg.innerText = "Password must be exactly 8 digits";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Registration successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "login.html"; // login page
  }, 1500);
}
