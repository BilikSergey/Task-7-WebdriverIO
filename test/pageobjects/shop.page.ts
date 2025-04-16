class ShopPage {
  get buttonShop() {
    return $("#HeaderMenu-shop");
  }

  get buttonAddToCart() {
    return $("[id*=product-grid6960027533390-submit]");
  }

  get buttonCheckOut() {
    return $("#CartDrawer-Checkout");
  }

  get dropDownSort() {
    return $("#SortBy");
  }

  get priceList() {
    return $$('[id="product-grid"] [class*="price-item--sale"]');
  }

  get titleList() {
    return $$(".card__heading.h5");
  }

  get titleSwagAlert() {
    return $$('[href="/products/telnyx-pullover-hoodie"]');
  }

  get formOfWareAtCart() {
    return $(".i4DWM");
  }

  get pictureOfWareSwagAlert() {
    return $(".product__media.media.media--transparent");
  }

  get titleOfWareSwagAlert() {
    return $(".product__title");
  }

  get priceOfWareSwagAlert() {
    return $("#price-template--14828910936142__main");
  }

  get buttonSearch() {
    return $(".modal__toggle-open.icon.icon-search");
  }

  get inputSearch() {
    return $("#Search-In-Modal");
  }

  get wareHat() {
    return $(
      '#CardLink--6960027533390'
    );
  }

  get searchResult() {
    return $("#ProductCountDesktop");
  }

  get cartDeleteButton() {
    return $(".icon.icon-remove");
  }

  get cartEmptyText() {
    return $(".cart__empty-text");
  }

  get buttonContinueShopping() {
    return $(".drawer__close");
  }

  async visitShopPage() {
    await browser.url("https://shop.telnyx.com/");
  }

  async clickButtonShop() {
    await this.buttonShop.click();
  }

  async addToCart() {
    await this.buttonAddToCart.click();
    await this.buttonCheckOut.click();
  }

  async sortByPriceDescending() {
    await this.dropDownSort.selectByAttribute("value", "price-descending");
  }

  async sortByPriceAscending() {
    await this.dropDownSort.selectByAttribute("value", "price-ascending");
  }

  async sortByTitleAscending() {
    await this.dropDownSort.selectByAttribute("value", "title-ascending");
  }

  async sortByTitleDescending() {
    await this.dropDownSort.selectByAttribute("value", "title-descending");
  }

  async clickOnSwagAlert() {
    await this.titleSwagAlert[0].click();
  }

  async deleteWareAtCart() {
    await this.buttonAddToCart.click();
    await this.cartDeleteButton.click();
  }

  async searchHat() {
    await this.buttonSearch.click();
    await this.inputSearch.setValue("hat");
    await browser.keys("Enter");
  }
}

export default new ShopPage();
