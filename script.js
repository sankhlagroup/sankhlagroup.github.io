const products = [
  {name:'Royal Blue Silk Saree',type:'saree',price:'₹1,699',code:'VL-SR01',photo:'https://c.pxhere.com/images/ce/4e/ef97c2117439bfe761319cfddc6e-1635354.jpg%21s1',tag:'WEB',desc:'Traditional blue saree with a rich zari-style border.',web:true},
  {name:'Sunset Orange Saree',type:'saree',price:'₹1,499',code:'VL-SR02',photo:'https://c.pxhere.com/images/f5/97/67d4287937ed9eb01bd5dfb0dc20-1635335.jpg%21s1',tag:'WEB',desc:'Bright festive saree styled for celebrations.',web:true},
  {name:'Classic Peach Saree',type:'saree',price:'₹1,599',code:'VL-SR03',photo:'https://c.pxhere.com/images/ef/65/d6b9086c8372e4204eb3b905a1b5-1635350.jpg%21s1',tag:'WEB',desc:'Elegant saree look with a warm traditional palette.',web:true},
  {name:'Magenta Zari Saree',type:'saree',price:'₹1,499',code:'VL-SR04',photo:'ai-magenta-saree.jpg',tag:'AI',desc:'Bold magenta festive style with gold-inspired motifs.'},
  {name:'Teal Embroidered Suit',type:'suit',price:'₹1,299',code:'VL-ST01',photo:'ai-teal-suit.jpg',tag:'AI',desc:'Teal three-piece ethnic set with embroidered detailing.'},
  {name:'Blush Anarkali Set',type:'suit',price:'₹1,899',code:'VL-ST02',photo:'ai-blush-anarkali.jpg',tag:'AI',desc:'Soft blush anarkali with a festive embroidered finish.'},
  {name:'Mustard Floral Kurti',type:'kurti',price:'₹899',code:'VL-KR01',photo:'ai-mustard-kurti.jpg',tag:'AI',desc:'Mustard floral kurti for everyday ethnic styling.'},
  {name:'Lavender Printed Set',type:'kurti',price:'₹999',code:'VL-KR02',photo:'ai-lavender-kurta.jpg',tag:'AI',desc:'Lavender printed kurta set with matching bottom.'},
  {name:'Royal Blue Festive Saree',type:'saree',price:'₹1,799',code:'VL-SR05',photo:'ai-blue-saree.jpg',tag:'AI',desc:'Royal blue saree designed for festive occasions.'}
];

const grid = document.getElementById('productGrid');
const count = document.getElementById('catalogCount');
const whatsapp = '919587934131';

function renderProducts(filter='all') {
  const visible = filter === 'all' ? products : products.filter(p => p.type === filter);
  count.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;
  grid.innerHTML = visible.map(p => {
    const typeLabel = p.type === 'saree' ? 'Saree' : p.type === 'suit' ? 'Suit' : 'Kurti';
    const message = encodeURIComponent(`Hello VL Collection, I want to order:\nProduct: ${p.name}\nPrice: ${p.price}\nProduct Code: ${p.code}\nQuantity: 1`);
    const src = p.web ? p.photo : `assets/${p.photo}`;
    return `<article class="product-card">
      <img class="product-image" src="${src}" alt="${p.name}" loading="lazy">
      <div class="product-meta">
        <div class="product-top"><span class="product-type">${typeLabel}</span><span class="photo-tag">${p.tag} PHOTO</span></div>
        <div class="product-info"><h3>${p.name}</h3><p class="product-desc">${p.desc}</p><div class="product-price">${p.price}</div><div class="product-code">Code: ${p.code}</div></div>
        <a class="order-btn" href="https://wa.me/${whatsapp}?text=${message}" target="_blank" rel="noopener">Order on WhatsApp ↗</a>
      </div>
    </article>`;
  }).join('');
}

document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(btn.dataset.filter);
}));

const languageToggle = document.getElementById('languageToggle');
let hindi = false;
languageToggle.addEventListener('click', () => {
  hindi = !hindi;
  document.documentElement.lang = hindi ? 'hi' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => { el.innerHTML = hindi ? el.dataset.hi : el.dataset.en; });
  languageToggle.textContent = hindi ? 'English' : 'हिंदी';
});

document.getElementById('year').textContent = new Date().getFullYear();
renderProducts();
