const WHATSAPP_NUMBER = '919587934131';
const langBtn = document.getElementById('langBtn');
let hindi = false;
langBtn.addEventListener('click', () => {
  hindi = !hindi;
  document.documentElement.lang = hindi ? 'hi' : 'en';
  document.querySelectorAll('[data-en][data-hi]').forEach(el => {
    el.textContent = hindi ? el.dataset.hi : el.dataset.en;
  });
  document.querySelectorAll('.order').forEach(el => el.textContent = hindi ? 'WhatsApp पर ऑर्डर करें' : 'Order on WhatsApp');
  langBtn.textContent = hindi ? 'English' : 'हिन्दी';
});
document.querySelectorAll('.order').forEach(button => button.addEventListener('click', () => {
  const message = `Hello VL Collection, I want to enquire about this demo product. Product: ${button.dataset.product}, Price shown: ₹${button.dataset.price} (demo), Code: ${button.dataset.code}, Quantity: 1. Please confirm actual availability and price.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}));
document.getElementById('year').textContent = new Date().getFullYear();
