const products = [
  {id:1,name:"Daily Vitamin Blend",category:"Wellness",price:249,description:"Everyday wellness product demo.",emoji:"🟠",bg:"#f8ead7",tag:"Popular"},
  {id:2,name:"Hydration Support",category:"Wellness",price:179,description:"A simple hydration essentials listing.",emoji:"💧",bg:"#e1f0f4",tag:"Everyday"},
  {id:3,name:"Gentle Hand Wash",category:"Personal Care",price:129,description:"A personal-care product listing.",emoji:"🧴",bg:"#e7efe3",tag:"Gentle"},
  {id:4,name:"First Aid Kit",category:"First Aid",price:299,description:"Basic first-aid supplies product demo.",emoji:"🩹",bg:"#f5e5e2",tag:"Essential"},
  {id:5,name:"Wellness Tea",category:"Wellness",price:199,description:"A caffeine-free herbal tea listing.",emoji:"🍵",bg:"#e4eddf",tag:"Calm"},
  {id:6,name:"Skin Care Cream",category:"Personal Care",price:219,description:"A daily skin-care product listing.",emoji:"🫙",bg:"#f3e7ef",tag:"Daily"},
  {id:7,name:"Digital Thermometer",category:"First Aid",price:349,description:"A home-health accessory product demo.",emoji:"🌡️",bg:"#e4eaf6",tag:"Home care"},
  {id:8,name:"Reusable Hot Pack",category:"First Aid",price:159,description:"A reusable comfort accessory listing.",emoji:"♨️",bg:"#f7eadb",tag:"Comfort"}
];
let activeCategory = "All";
let cart = [];
const grid = document.querySelector("#productGrid");
const count = document.querySelector("#cartCount");
const empty = document.querySelector("#emptyState");
const search = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function renderProducts() {
  const term = search.value.trim().toLowerCase();
  const visible = products.filter(p => (activeCategory === "All" || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <div class="product-art" style="background:${p.bg}">
        <span class="tag">${p.tag}</span><span class="emoji" aria-hidden="true">${p.emoji}</span>
      </div>
      <div class="product-info">
        <span class="category">${p.category}</span>
        <h3>${p.name}</h3><p>${p.description}</p>
        <div class="product-bottom"><span class="price">₹${p.price}</span>
          <button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button>
        </div>
      </div>
    </article>`).join("");
  empty.hidden = visible.length !== 0;
}
document.querySelector("#filters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
  renderProducts();
});
search.addEventListener("input", renderProducts);
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  const product = products.find(p => p.id === Number(button.dataset.add));
  cart.push(product);
  count.textContent = cart.length;
  showToast(`${product.name} added to demo cart`);
});
document.querySelector("#cartButton").addEventListener("click", () => {
  if (!cart.length) return showToast("Your demo cart is empty");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  showToast(`${cart.length} item(s) in demo cart · Total ₹${total}`);
});
renderProducts();
