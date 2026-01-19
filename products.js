// BACK BUTTON
document.getElementById("backBtn").onclick = () => {
  window.location.href = "dashboard.html";
};

// CROP DATA (ADD IMAGE PATH)
const crops = [
  { name: "Tomato", img: "assets/tomoto.jpg", qty: 120, price: 40, grade: "A", jd: 40, market: 45 },
  { name: "Brocoli", img: "assets/brocoli.jpg", qty: 0, price: 100, grade: "B", jd: 100, market: 120 },
  { name: "Onion", img: "assets/onion.jpg", qty: 80, price: 40, grade: "A+", jd: 40, market: 45 },
  { name: "Corriender", img: "assets/coriender.jpg", qty: 60, price: 60, grade: "A", jd: 60, market: 70 },
  { name: "Cabbage", img: "assets/cabbage.jpg", qty: 90, price: 35, grade: "A", jd: 35, market: 38 },
  { name: "Peas", img: "assets/peas.jpg", qty: 40, price: 40, grade: "A", jd: 40, market: 45 },
  { name: "Ginger", img: "assets/ginger.jpg", qty: 0, price: 80, grade: "B+", jd: 80, market: 90 },
  { name: "Carriots", img: "assets/carriots.jpg", qty: 65, price: 40, grade: "A+", jd: 40, market: 45 },
  { name: "Garlic", img: "assets/garlic.jpg", qty: 90, price: 100, grade: "A", jd: 100, market: 140 },
  { name: "Capsicum", img: "assets/capsicum.jpg", qty: 40, price: 60, grade: "A", jd: 60, market: 70 },
  { name: "Potato", img: "assets/potato.jpg", qty: 0, price: 40, grade: "B+", jd: 40, market: 40 },
  { name: "Spinach", img: "assets/palak.jpg", qty: 65, price: 20, grade: "A+", jd: 20, market: 25 }
];

const slider = document.getElementById("slider");

crops.forEach(crop => {
  const card = document.createElement("div");
  card.className = "crop-card";

  card.innerHTML = `
    ${crop.qty === 0 ? `<div class="out-stock">Out of Stock</div>` : ""}
    <img src="${crop.img}" alt="${crop.name}">
    <div class="crop-content">
      <h3>${crop.name}</h3>
      <p><strong>Qty:</strong> ${crop.qty} kg</p>
      <p><strong>Price:</strong> ₹${crop.price}/kg</p>
      <p><strong>Grade:</strong> ${crop.grade}</p>
      <div class="price-insight">
        JD: ₹${crop.jd} | Market: ₹${crop.market}
      </div>
      <button class="buy-btn" onclick="buyNow('${crop.name}', ${crop.price})">Buy Now</button>

    </div>
  `;

  slider.appendChild(card);
});
function buyNow(name, price) {
  const selectedProduct = {
    name: name,
    price: price
  };

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  window.location.href = "place-order.html";
}
