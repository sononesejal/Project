function resetPassword() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
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

  if (password !== confirmPassword) {
    msg.style.color = "red";
    msg.innerText = "Passwords do not match";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Password reset successful! Redirecting to login...";

  setTimeout(() => {
    window.location.href = "login.html"; // Login page
  }, 1500);
}
