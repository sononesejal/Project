function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
// Open Modal
function openProfile() {
  const modal = document.getElementById("profileModal");
  modal.style.display = "flex";

  const profile = JSON.parse(sessionStorage.getItem("buyerProfile"));

  if (profile) {
    showProfileInfo(profile);
  } else {
    document.getElementById("profileForm").style.display = "block";
    document.getElementById("profileInfo").style.display = "none";
  }
}



// Close Modal (back to dashboard)
function closeProfile() {
  document.getElementById("profileModal").style.display = "none";
}

// Submit Profile
function submitProfile() {
  const name = document.getElementById("buyerName").value.trim();
  const location = document.getElementById("location").value.trim();
  const business = document.getElementById("businessType").value.trim();

  if (name === "" || location === "" || business === "") {
    alert("Please fill all fields");
    return;
  }

  const profile = { name, location, business };

  // ✅ Save only for this session
  sessionStorage.setItem("buyerProfile", JSON.stringify(profile));

  showProfileInfo(profile);
}


// Show profile info view
function showProfileInfo(profile){
  document.getElementById("profileForm").style.display = "none";
  document.getElementById("profileInfo").style.display = "block";
  document.getElementById("displayName").innerText = profile.name;
  document.getElementById("displayLocation").innerText = profile.location;
  document.getElementById("displayBusiness").innerText = profile.business;
}

// Back to form view
function backToForm(){
  const profile = JSON.parse(localStorage.getItem("buyerProfile"));
  document.getElementById("profileForm").style.display = "block";
  document.getElementById("profileInfo").style.display = "none";
  document.getElementById("buyerName").value = profile.name;
  document.getElementById("location").value = profile.location;
  document.getElementById("businessType").value = profile.business;
}
// Detect buyer location using browser geolocation
window.onload = function() {
  const buyerLocation = document.getElementById('buyerLocation');
  const nearestHub = document.getElementById('nearestHub');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      buyerLocation.innerText = `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
      
      // For demo, calculate nearest hub (static example)
      nearestHub.innerText = "JD Hub - Pune, Maharashtra";
    }, () => {
      buyerLocation.innerText = "Location access denied. Please update manually.";
      nearestHub.innerText = "JD Hub - Pune, Maharashtra";
    });
  } else {
    buyerLocation.innerText = "Geolocation not supported by your browser.";
    nearestHub.innerText = "JD Hub - Pune, Maharashtra";
  }
}

// Manual location update
function updateLocation() {
  const newLoc = prompt("Enter your delivery location (City/District):");
  if (newLoc) {
    document.getElementById('buyerLocation').innerText = newLoc;
    // Optionally update nearest hub dynamically here
  }
}
