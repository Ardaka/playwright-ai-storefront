import { expect, test } from '@playwright/test';
import { StorePage } from './pages/store.page';

const mockedProducts = [
  { id: 10, name: 'Orbit Lamp', category: 'Lighting', price: 89, icon: '◉', color: '#cbd8f0' },
  { id: 20, name: 'Focus Timer', category: 'Productivity', price: 42, icon: '◷', color: '#f0c6ac' },
  { id: 30, name: 'Arc Stand', category: 'Workspace', price: 64, icon: '⌁', color: '#cbdcb7' }
];

test.beforeEach(async ({ page }) => {
  await page.route('**/api/products', (route) => route.fulfill({ json: mockedProducts }));
});

test('customer can find a product and add it to the bag @smoke', async ({ page }) => {
  const store = new StorePage(page);

  await test.step('Open the storefront and search', async () => {
    await store.open();
    await store.searchFor('lamp');
    await expect(store.productCards).toHaveCount(1);
    await expect(store.productCards.first()).toContainText('Orbit Lamp');
  });

  await test.step('Add the result and verify the bag', async () => {
    await store.addProduct('Orbit Lamp');
    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await store.openCart();
    await expect(page.getByTestId('cart-items')).toContainText('Orbit Lamp');
    await expect(page.getByTestId('cart-total')).toHaveText('$89.00');
  });
});

test('empty search result is explained to the customer @regression', async ({ page }) => {
  const store = new StorePage(page);
  await store.open();
  await store.searchFor('coffee');

  await expect(store.productCards).toHaveCount(0);
  await expect(page.getByTestId('empty-state')).toBeVisible();
});

