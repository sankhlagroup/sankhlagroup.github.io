const products = [
  {
    name: 'Royal Blue Silk Saree',
    type: 'saree',
    price: '₹1,699',
    priceValue: 1699,
    code: 'VL-SR01',
    photo: 'assets/saree-blue.jpg',
    tag: 'WEB',
    desc: 'Traditional elegance in a rich royal blue finish.'
  },
  {
    name: 'Magenta Festive Saree',
    type: 'saree',
    price: '₹1,499',
    priceValue: 1499,
    code: 'VL-SR04',
    photo: 'assets/ai-magenta-saree.jpg',
    tag: 'AI',
    desc: 'Bold magenta festive styling with luxe detailing.'
  },
  {
    name: 'Blush Anarkali Set',
    type: 'suit',
    price: '₹1,899',
    priceValue: 1899,
    code: 'VL-ST02',
    photo: 'assets/ai-blush-anarkali.jpg',
    tag: 'AI',
    desc: 'Soft blush anarkali with a graceful festive flow.'
  },
  {
    name: 'Teal Embroidered Suit',
    type: 'suit',
    price: '₹1,299',
    priceValue: 1299,
    code: 'VL-ST01',
    photo: 'assets/ai-blush-anarkali.jpg',
    tag: 'AI',
    desc: 'Deep teal embroidery with tailored ethnic elegance.'
  },
  {
    name: 'Mustard Floral Kurti',
    type: 'kurti',
    price: '₹899',
    priceValue: 899,
    code: 'VL-KR01',
    photo: 'assets/kurti-mustard.jpg',
    tag: 'AI',
    desc: 'Fresh and vibrant everyday wear with floral charm.'
  },
  {
    name: 'Lavender Printed Kurta',
    type: 'kurti',
    price: '₹999',
    priceValue: 999,
    code: 'VL-KR02',
    photo: 'assets/ai-lavender-kurta.jpg',
    tag: 'AI',
    desc: 'Pastel lavender print designed for effortless style.'
  }
];

const cartStorageKey = 'sankhla-group-cart';
const productGrid = document.getElementById('productGrid');
const catalogCount = document.getElementById('catalogCount');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const whatsapp = '919587934131';

let cart = loadCart();

function loadCart() {
  try {
    const saved = localStorage.getItem(cartStorageKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function getProductByCode(code) {
  return products.find((product) => product.code === code);
}

function openCart() {
  document.body.classList.add('cart-open');
  cartPanel.setAttribute('aria-hidden', 'false');
  cartOverlay.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  document.body.classList.remove('cart-open');
  cartPanel.setAttribute('aria-hidden', 'true');
  cartOverlay.setAttribute('aria-hidden', 'true');
}

function addToCart(code) {
  const product = getProductByCode(code);
  if (!product) return;

  const item = cart.find((entry) => entry.code === code);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      code: product.code,
      name: product.name,
      photo: product.photo,
      priceValue: product.priceValue,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  openCart();
}

function updateCartQuantity(code, delta) {
  cart = cart.map((entry) => {
    if (entry.code !== code) return entry;

    const nextQuantity = entry.quantity + delta;
    return nextQuantity > 0 ? { ...entry, quantity: nextQuantity } : null;
  }).filter(Boolean);

  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty. Add a few favourites to get started.</div>';
    cartSubtotal.textContent = '₹0';
    cartTotal.textContent = '₹0';
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const product = getProductByCode(item.code);
    const image = product ? product.photo : item.photo;
    return `
      <div class="cart-item">
        <img src="${image}" alt="${item.name}" />
        <div class="cart-item-meta">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${formatCurrency(item.priceValue)} each</div>
          <div class="cart-controls">
            <button class="qty-btn" type="button" data-action="decrease" data-code="${item.code}">-</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn" type="button" data-action="increase" data-code="${item.code}">+</button>
          </div>
        </div>
        <div>
          <div class="cart-item-price">${formatCurrency(item.priceValue * item.quantity)}</div>
          <button class="cart-remove" type="button" data-code="${item.code}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  const subtotal = getCartSubtotal();
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartTotal.textContent = formatCurrency(subtotal);

  cartItems.querySelectorAll('.qty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const { action, code } = button.dataset;
      updateCartQuantity(code, action === 'increase' ? 1 : -1);
    });
  });

  cartItems.querySelectorAll('.cart-remove').forEach((button) => {
    button.addEventListener('click', () => {
      updateCartQuantity(button.dataset.code, -999);
    });
  });
}

function renderProducts(filter = 'all') {
  const visible = filter === 'all' ? products : products.filter((product) => product.type === filter);

  catalogCount.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;

  productGrid.innerHTML = visible.map((product) => {
    const typeLabel = product.type === 'saree' ? 'Saree' : product.type === 'suit' ? 'Suit' : 'Kurti';
    const message = encodeURIComponent(
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
            <div class="product-actions">
              <button class="add-cart-btn" type="button" data-code="${product.code}">Add to cart</button>
              <a class="order-btn" href="https://wa.me/${whatsapp}?text=${message}" target="_blank" rel="noopener">Order ↗</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.add-cart-btn').forEach((button) => {
    button.addEventListener('click', () => addToCart(button.dataset.code));
  });
}

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
});

cartButton.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
clearCartBtn.addEventListener('click', clearCart);

checkoutBtn.addEventListener('click', () => {
  if (!cart.length) return;

  const lines = cart.map((item) => `${item.name} x${item.quantity} (${formatCurrency(item.priceValue * item.quantity)})`);
  const total = getCartSubtotal();
  const message = encodeURIComponent(
    `Hello VL Collection, I want to place this order:\n${lines.join('\n')}\n\nTotal: ${formatCurrency(total)}`
  );

  window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank', 'noopener');
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
updateCartUI();
renderProducts();
