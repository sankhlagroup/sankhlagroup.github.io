const products = [
  {
    name: 'Royal Blue Silk Saree',
    type: 'saree',
    price: '₹1,699',
    code: 'VL-SR01',
    photo: 'assets/saree-blue.jpg',
    tag: 'WEB',
    desc: 'Traditional elegance in a rich royal blue finish.'
  },
  {
    name: 'Magenta Festive Saree',
    type: 'saree',
    price: '₹1,499',
    code: 'VL-SR04',
    photo: 'assets/ai-magenta-saree.jpg',
    tag: 'AI',
    desc: 'Bold magenta festive styling with luxe detailing.'
  },
  {
    name: 'Blush Anarkali Set',
    type: 'suit',
    price: '₹1,899',
    code: 'VL-ST02',
    photo: 'assets/ai-blush-anarkali.jpg',
    tag: 'AI',
    desc: 'Soft blush anarkali with a graceful festive flow.'
  },
  {
    name: 'Teal Embroidered Suit',
    type: 'suit',
    price: '₹1,299',
    code: 'VL-ST01',
    photo: 'suit-teal.jpg',
    tag: 'AI',
    desc: 'Deep teal embroidery with tailored ethnic elegance.'
  },
  {
    name: 'Mustard Floral Kurti',
    type: 'kurti',
    price: '₹899',
    code: 'VL-KR01',
    photo: 'assets/kurti-mustard.jpg',
    tag: 'AI',
    desc: 'Fresh and vibrant everyday wear with floral charm.'
  },
  {
    name: 'Lavender Printed Kurta',
    type: 'kurti',
    price: '₹999',
    code: 'VL-KR02',
    photo: 'assets/ai-lavender-kurta.jpg',
    tag: 'AI',
    desc: 'Pastel lavender print designed for effortless style.'
  }
];

const productGrid = document.getElementById('productGrid');
const catalogCount = document.getElementById('catalogCount');
const whatsapp = '919587934131';

function renderProducts(filter = 'all') {
  const visible = filter === 'all' ? products : products.filter((product) => product.type === filter);

  catalogCount.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;

  productGrid.innerHTML = visible
    .map((product) => {
      const typeLabel = product.type === 'saree' ? 'Saree' : product.type === 'suit' ? 'Suit' : 'Kurti';
      const orderMessage = encodeURIComponent(
        `Hello VL Collection, I want to order:\nProduct: ${product.name}\nPrice: ${product.price}\nProduct Code: ${product.code}\nQuantity: 1`
      );

      return `
        <article class="product-card">
          <div class="product-image-wrap">
            <img src="${product.photo}" alt="${product.name}" loading="lazy" />
            <span class="photo-tag">${product.tag} PHOTO</span>
          </div>
          <div class="product-content">
            <div class="product-top">
              <span>${typeLabel}</span>
              <span>${product.code}</span>
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.desc}</p>
            <div class="product-footer">
              <div>
                <div class="product-price">${product.price}</div>
                <div class="product-code">Style code: ${product.code}</div>
              </div>
              <a class="order-btn" href="https://wa.me/${whatsapp}?text=${orderMessage}" target="_blank" rel="noopener">Order ↗</a>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
});

const languageToggle = document.getElementById('languageToggle');
let hindi = false;

languageToggle.addEventListener('click', () => {
  hindi = !hindi;
  document.documentElement.lang = hindi ? 'hi' : 'en';
  document.querySelectorAll('[data-en]').forEach((element) => {
    element.innerHTML = hindi ? element.dataset.hi : element.dataset.en;
  });
  languageToggle.textContent = hindi ? 'English' : 'हिंदी';
});

document.getElementById('year').textContent = new Date().getFullYear();
renderProducts();

