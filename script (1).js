const products = [
 {name:"Royal Banarasi Silk",type:"saree",price:2499,code:"VL-SR-001",color:"#8d2638",motif:"✦"},
 {name:"Maroon Wedding Zari",type:"saree",price:3299,code:"VL-SR-002",color:"#701e2c",motif:"✧"},
 {name:"Pastel Floral Organza",type:"saree",price:1799,code:"VL-SR-003",color:"#c58e91",motif:"❋"},
 {name:"Classic Mustard Cotton",type:"saree",price:899,code:"VL-SR-004",color:"#b78b22",motif:"✦"},
 {name:"Emerald Festive Silk",type:"saree",price:2899,code:"VL-SR-005",color:"#176653",motif:"✧"},
 {name:"Blush Pink Chiffon",type:"saree",price:1299,code:"VL-SR-006",color:"#d8a6aa",motif:"❋"},
 {name:"Indigo Printed Saree",type:"saree",price:1099,code:"VL-SR-007",color:"#273d76",motif:"✦"},
 {name:"Ivory Gold Occasion",type:"saree",price:3999,code:"VL-SR-008",color:"#c4ae7e",motif:"✧"},
 {name:"Anarkali Festive Suit",type:"suit",price:2199,code:"VL-ST-009",color:"#8e3047",motif:"✦"},
 {name:"Straight Cut Cotton Suit",type:"suit",price:999,code:"VL-ST-010",color:"#58785c",motif:"❋"},
 {name:"Embroidered Party Suit",type:"suit",price:2799,code:"VL-ST-011",color:"#59426d",motif:"✧"},
 {name:"Elegant Beige Suit Set",type:"suit",price:1599,code:"VL-ST-012",color:"#ad8d6e",motif:"✦"}
];
let currentFilter = "all";
let hindi = false;
const grid = document.getElementById("productGrid");
function renderProducts(){
  grid.innerHTML = "";
  products.filter(p => currentFilter === "all" || p.type === currentFilter).forEach(p => {
    const card = document.createElement("article");
    card.className = "product-card";
    const art = document.createElement("div");
    art.className = "product-art";
    art.style.setProperty("--fabric", p.color);
    const motif = document.createElement("span");
    motif.className = "motif"; motif.textContent = p.motif; art.appendChild(motif);
    const info = document.createElement("div"); info.className = "product-info";
    const type = document.createElement("div"); type.className = "product-type"; type.textContent = p.type === "saree" ? (hindi ? "साड़ी" : "Saree") : (hindi ? "सूट" : "Suit");
    const name = document.createElement("h3"); name.textContent = p.name;
    const price = document.createElement("div"); price.className = "product-price"; price.textContent = "₹" + p.price.toLocaleString("en-IN");
    const code = document.createElement("div"); code.className = "product-code"; code.textContent = (hindi ? "प्रोडक्ट कोड: " : "Product code: ") + p.code;
    const order = document.createElement("a"); order.className = "order-btn"; order.href = "https://wa.me/919587934131?text=" + encodeURIComponent(`Hello VL Collection, I want to order:\nProduct: ${p.name}\nPrice: ₹${p.price}\nProduct code: ${p.code}\nQuantity: 1`);
    order.target = "_blank"; order.rel = "noopener"; order.textContent = hindi ? "WhatsApp पर ऑर्डर करें ↗" : "Order on WhatsApp ↗";
    info.append(type,name,price,code,order); card.append(art,info); grid.appendChild(card);
  });
}
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  currentFilter = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProducts();
}));
document.getElementById("languageToggle").addEventListener("click", () => {
  hindi = !hindi;
  document.documentElement.lang = hindi ? "hi" : "en";
  document.getElementById("languageToggle").textContent = hindi ? "English" : "हिंदी";
  document.querySelectorAll("[data-en][data-hi]").forEach(el => el.innerHTML = hindi ? el.dataset.hi : el.dataset.en);
  renderProducts();
});
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
