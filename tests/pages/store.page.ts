import { expect, type Locator, type Page } from '@playwright/test';

export class StorePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly productCards: Locator;
  readonly cartButton: Locator;
  readonly cartDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId('search-input');
    this.productCards = page.getByTestId('product-card');
    this.cartButton = page.getByTestId('cart-button');
    this.cartDialog = page.getByTestId('cart-dialog');
  }

  async open() {
    await this.page.goto('/');
    await expect(this.productCards.first()).toBeVisible();
  }

  async searchFor(term: string) {
    await this.searchInput.fill(term);
  }

  async addProduct(name: string) {
    await this.productCards.filter({ hasText: name }).getByTestId('add-to-cart').click();
  }

  async openCart() {
    await this.cartButton.click();
    await expect(this.cartDialog).toBeVisible();
  }
}

