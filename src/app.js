const fallbackProducts = [
  { id: 1, name: 'Orbit Lamp', category: 'Lighting', price: 89, icon: '◉', color: '#cbd8f0' },
  { id: 2, name: 'Focus Timer', category: 'Productivity', price: 42, icon: '◷', color: '#f0c6ac' },
  { id: 3, name: 'Arc Stand', category: 'Workspace', price: 64, icon: '⌁', color: '#cbdcb7' }
];

let products = [];
const cart = [];
const grid = document.querySelector('[data-testid="product-grid"]');
const emptyState = document.querySelector('[data-testid="empty-state"]');
const searchInput = document.querySelector('[data-testid="search-input"]');
const cartDialog = document.querySelector('[data-testid="cart-dialog"]');

function money(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function renderProducts(query = '') {
  const filtered = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())
  );
  grid.innerHTML = filtered.map((product) => `
    <article class="product" data-testid="product-card" data-product-id="${product.id}">
      <div class="product-visual" style="--card-color:${product.color}" aria-hidden="true">${product.icon}</div>
      <div class="product-meta">
        <div><h3>${product.name}</h3><p>${product.category} · ${money(product.price)}</p></div>
        <button class="add-button" data-testid="add-to-cart" data-product-id="${product.id}">Add</button>
      </div>
    </article>
  `).join('');
  emptyState.hidden = filtered.length > 0;
}

function renderCart() {
  const items = document.querySelector('[data-testid="cart-items"]');
  items.innerHTML = cart.map((product) => `
    <div class="cart-row"><span>${product.name}</span><strong>${money(product.price)}</strong></div>
  `).join('');
  document.querySelector('[data-testid="cart-empty"]').hidden = cart.length > 0;
  document.querySelector('[data-testid="cart-count"]').textContent = String(cart.length);
  document.querySelector('[data-testid="cart-total"]').textContent = money(cart.reduce((sum, item) => sum + item.price, 0));
}

function showToast(message) {
  const toast = document.querySelector('[data-testid="toast"]');
  toast.textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 1200);
}

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-testid="add-to-cart"]');
  if (!button) return;
  const product = products.find((item) => item.id === Number(button.dataset.productId));
  if (!product) return;
  cart.push(product);
  renderCart();
  showToast(`${product.name} added to bag`);
});

searchInput.addEventListener('input', () => renderProducts(searchInput.value));
document.querySelector('[data-testid="cart-button"]').addEventListener('click', () => cartDialog.showModal());
document.querySelector('[data-testid="close-cart"]').addEventListener('click', () => cartDialog.close());
document.querySelector('[data-testid="checkout-button"]').addEventListener('click', () => showToast('Demo checkout ready'));

fetch('/api/products')
  .then((response) => response.ok ? response.json() : Promise.reject(new Error('API unavailable')))
  .catch(() => fallbackProducts)
  .then((data) => { products = data; renderProducts(); });

