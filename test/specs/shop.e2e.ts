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
    await expect(await shopPage.searchResult.getText()).toContain("1");
  });

  it(" Delete ware from cart", async () => {
    await shopPage.deleteWareAtCart();
    await expect(await shopPage.cartEmptyText.getText()).toContain(
      "Your cart is empty"
    );
    await expect(shopPage.buttonContinueShopping).toBeExisting();
  });
});
