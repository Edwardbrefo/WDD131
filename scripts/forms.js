 const now = new Date();
  document.getElementById("currentyear").textContent = now.getFullYear();
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = `Last Updated: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.getElementById("productSelect");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

const form = document.getElementById("reviewForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const review = {
        productId: formData.get("product"),
        rating: formData.get("rating"),
        reviewText: formData.get("reviewText")
    };
    console.log("Review submitted:", review);
    alert("Thank you for your review!");
    form.reset();
});


let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
const reviewCountDisplay = document.getElementById("reviewCount");
if (reviewCountDisplay) {
reviewCountDisplay.textContent = `You have submitted ${reviewCount} reviews.`;
}