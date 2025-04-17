import shopPage from "../pageobjects/shop.page.ts";

describe("Shop Test", () => {
  beforeEach(async () => {
    await shopPage.visitShopPage();
    await shopPage.clickButtonShop();
  });

  it("Adding an item to the cart", async () => {
    await shopPage.addToCart();
    await expect(shopPage.formOfWareAtCart).toBeDisplayed();
  });

  it("Checking Swag Alert item details", async () => {
    await shopPage.clickOnSwagAlert();
    await expect(shopPage.pictureOfWareSwagAlert).toBeExisting();
    await expect(shopPage.titleOfWareSwagAlert).toBeExisting();
    await expect(shopPage.priceOfWareSwagAlert).toBeExisting();
  });

  it("Search item", async () => {
    await shopPage.searchHat();
    await expect(shopPage.wareHat).toBeExisting();
    await expect(shopPage.searchResult).toHaveText(RegExp("1"));
  });

  it("Delete ware from cart", async () => {
    await shopPage.deleteWareAtCart();
    await expect(shopPage.cartEmptyText).toHaveText("Your cart is empty");
    await expect(shopPage.buttonContinueShopping).toBeExisting();
  });

  it("Go to the facebook", async () => {
    await shopPage.clickButtonFacebook();
    await expect(await browser.getUrl()).toContain("facebook.com/Telnyx");
  });

  it("Go to the instagram", async () => {
    await shopPage.clickButtonInstagram();
    await expect(await browser.getUrl()).toContain("instagram.com/telnyx");
  });

  it("Go to the X", async () => {
    await shopPage.clickButtonX();
    await expect(await browser.getUrl()).toContain("x.com/telnyx");
  });

  it("Go to the vimeo", async () => {
    await shopPage.clickButtonVimeo();
    await expect(await browser.getUrl()).toContain("vimeo.com/telnyx");
  });
});
