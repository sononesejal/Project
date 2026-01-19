
function sendOTP() {
  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password: exactly 8 digits
  const passwordRegex = /^\d{8}$/;

  // Validate email
  if (user === "") {
    msg.style.color = "red";
    msg.innerText = "Email is required";
    return;
  }

  if (!emailRegex.test(user)) {
    msg.style.color = "red";
    msg.innerText = "Enter a valid email address";
    return;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    msg.style.color = "red";
    msg.innerText = "Password must be exactly 8 digits";
    return;
  }

  // Show OTP section
  document.getElementById("otpSection").style.display = "block";
  msg.style.color = "green";
  msg.innerText = "OTP sent successfully!";
}

function verifyOTP() {
  const otp = document.getElementById("otp").value.trim();
  const msg = document.getElementById("msg");

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1200);

  msg.style.color = "green";
  msg.innerText = "Login successful!";
    setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1200);
}

