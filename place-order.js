let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
let pricePerKg = selectedProduct ? selectedProduct.price : 0;

document.addEventListener("DOMContentLoaded", () => {
  if (selectedProduct) {
    document.getElementById("productName").innerText =
      `Product: ${selectedProduct.name} (₹${pricePerKg}/kg)`;
  }
});

let currentStep = 1;

function nextStep(step) {
  // STEP 1 VALIDATION
  if (currentStep === 1) {
    const qty = document.getElementById("quantity").value;
    if (!qty || qty <= 0) {
      alert("Please enter a valid quantity");
      return;
    }
  }

  // STEP 2 VALIDATION
  if (currentStep === 2) {
    const address = document.getElementById("address").value.trim();
    if (address === "") {
      alert("Please enter delivery address");
      return;
    }
  }

  // MOVE STEPS
  document.getElementById(`step${currentStep}`).classList.remove("active");
  document.querySelectorAll(".steps span")[currentStep - 1].classList.remove("active");

  currentStep = step;

  document.getElementById(`step${currentStep}`).classList.add("active");
  document.querySelectorAll(".steps span")[currentStep - 1].classList.add("active");

  // PRICE CALCULATION
  if (currentStep === 3) {
    const qty = document.getElementById("quantity").value;
    document.getElementById("priceInfo").innerText =
      `Product: ${selectedProduct.name}
       | Quantity: ${qty} kg
       | Total Price: ₹${qty * pricePerKg}`;
  }
}


  

function placeOrder() {
  alert("Order placed successfully!");
  localStorage.removeItem("selectedProduct");
}


function goBack() {
  window.location.href = "dashboard.html";
}
