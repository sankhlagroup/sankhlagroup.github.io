@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap');

:root {
  --ink: #14110f;
  --ink-soft: #2e2a27;
  --paper: #f6f1ea;
  --panel: #fffdf8;
  --gold: #c7a96c;
  --gold-soft: #e6d3a0;
  --line: rgba(20, 17, 15, 0.12);
  --shadow: 0 22px 60px rgba(20, 17, 15, 0.12);
  --radius: 24px;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'DM Sans', Arial, sans-serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  line-height: 1.6;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(246, 241, 234, 0.82);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 0.84rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
}

.brand strong { font-weight: 700; }

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: var(--ink);
  color: var(--paper);
  font-weight: 700;
  letter-spacing: 0;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.main-nav a {
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink-soft);
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible { color: var(--gold); }

.lang-btn {
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lang-btn:hover { background: var(--ink); color: var(--paper); }

.hero {
  padding: 56px 0 32px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
}

.eyebrow,
.section-label {
  margin: 0 0 18px;
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 700;
}

.hero h1,
.about h2,
.collection h2,
.contact h2 {
  margin: 0;
  line-height: 0.98;
  font-family: var(--serif);
  font-weight: 700;
  letter-spacing: -0.04em;
}

.hero h1 {
  font-size: clamp(3.3rem, 6vw, 6rem);
  max-width: 620px;
}

.hero h1 em,
.about h2 em,
.collection h2 em,
.contact h2 em {
  color: var(--gold);
  font-style: italic;
  font-weight: 600;
}

.lede {
  max-width: 580px;
  color: var(--ink-soft);
  font-size: 1.08rem;
  margin: 22px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid var(--ink);
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover { transform: translateY(-2px); }

.button.primary {
  background: var(--ink);
  color: var(--paper);
  box-shadow: var(--shadow);
}

.button.secondary {
  background: transparent;
  color: var(--ink);
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 28px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--ink-soft);
}

.hero-visual {
  position: relative;
  min-height: 620px;
}

.visual-card {
  position: absolute;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: var(--shadow);
  background: #e9e0d5;
  border: 8px solid rgba(255, 255, 255, 0.8);
}

.visual-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-main {
  width: min(100%, 420px);
  height: 520px;
  right: 55px;
  top: 24px;
}

.card-small {
  width: 220px;
  height: 252px;
  bottom: 10px;
  overflow: hidden;
}

.card-small.top {
  left: 14px;
  top: 0;
}

.card-small.bottom {
  left: 110px;
  bottom: 32px;
}

.stats {
  background: #efe7dc;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  padding: 26px 0;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.stat-item strong {
  font-size: clamp(2.2rem, 3vw, 3rem);
  font-family: var(--serif);
}

.stat-item span {
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.section {
  padding: 104px 0;
}

.section-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 32px;
  align-items: center;
}

.about h2,
.collection h2,
.contact h2 {
  font-size: clamp(2.6rem, 4vw, 4.2rem);
}

.about-copy {
  display: grid;
  gap: 24px;
}

.about-copy p {
  margin: 0;
  font-size: 1.1rem;
  color: var(--ink-soft);
}

.founder-card {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  width: fit-content;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 18px;
  box-shadow: 0 10px 30px rgba(20, 17, 15, 0.05);
}

.initial {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--serif);
  font-size: 1.5rem;
}

.founder-card strong,
.founder-card small {
  display: block;
}

.founder-card small {
  color: var(--ink-soft);
}

.collection-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 26px;
}

.tagline {
  text-align: right;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  font-weight: 700;
}

.tagline em {
  color: var(--gold);
  font-style: normal;
}

.shop-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 18px;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter {
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  padding: 10px 18px;
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter.active {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.catalog-count {
  font-weight: 700;
  color: var(--ink-soft);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.product-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(20, 17, 15, 0.04);
}

.product-image-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.product-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image-wrap img {
  transform: scale(1.04);
}

.photo-tag {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(20, 17, 15, 0.76);
  color: var(--paper);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  padding: 6px 9px;
  border-radius: 999px;
  text-transform: uppercase;
}

.product-content {
  padding: 18px 18px 20px;
}

.product-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.product-name {
  margin: 12px 0 8px;
  font-size: 1.45rem;
  font-family: var(--serif);
  line-height: 1.1;
}

.product-desc {
  margin: 0;
  color: var(--ink-soft);
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 18px;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--ink);
}

.product-code {
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
}

.order-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--gold-soft);
  color: var(--ink);
  font-weight: 700;
  border: 1px solid rgba(199, 169, 108, 0.8);
}

.demo-note {
  margin: 26px 0 0;
  color: var(--ink-soft);
  font-size: 0.94rem;
}

.why-grid,
.process-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card,
.process-grid > div {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(20, 17, 15, 0.04);
}

.feature-card span,
.process-grid span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(199, 169, 108, 0.2);
  color: var(--ink);
  font-weight: 700;
}

.feature-card h3,
.process-grid h3 {
  margin: 18px 0 12px;
  font-size: 1.5rem;
  font-family: var(--serif);
}

.feature-card p,
.process-grid p {
  margin: 0;
  color: var(--ink-soft);
}

.contact {
  background: #f1e9de;
  border-top: 1px solid var(--line);
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.contact-details {
  display: grid;
  gap: 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
}

.contact-details p {
  margin: 0;
  display: grid;
  gap: 6px;
}

.contact-details span {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
}

.contact-details a,
.contact-details strong {
  font-size: 1.05rem;
}

.site-footer {
  border-top: 1px solid var(--line);
  background: #f9f4ee;
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  min-height: 88px;
  color: var(--ink-soft);
}

@media (max-width: 960px) {
  .hero-grid,
  .section-layout,
  .contact-grid,
  .product-grid,
  .why-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual {
    min-height: 520px;
  }

  .card-main { right: 30px; }
}

@media (max-width: 640px) {
  .main-nav {
    gap: 10px 14px;
    justify-content: flex-start;
  }

  .nav-wrap,
  .footer-wrap,
  .collection-top,
  .shop-bar {
    align-items: flex-start;
    flex-direction: column;
  }

  .brand {
    letter-spacing: 0.08em;
  }

  .hero {
    padding-top: 32px;
  }

  .hero-meta {
    gap: 12px;
  }

  .hero-visual {
    min-height: 420px;
  }

  .card-main {
    width: 83%;
    height: 310px;
    right: 0;
    top: 30px;
  }

  .card-small {
    width: 160px;
    height: 180px;
  }

  .card-small.bottom { left: 32px; }
}
