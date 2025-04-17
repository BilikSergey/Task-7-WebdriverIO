import loginPage from "../pageobjects/login.page.ts";
import testData from "../../data/testData.json";

describe("Login Test", () => {
  it("should verify reCAPTCHA error on login", async () => {
    await loginPage.visitLoginPage();
    await loginPage.login();
    await expect(loginPage.errorMessageRecaptcha).toHaveText(
      testData.recaptcha
    );
  });
});
