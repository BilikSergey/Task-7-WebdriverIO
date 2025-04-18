import { faker } from "@faker-js/faker";
import signUpPage from "../pageobjects/signUp.page.ts";
import mainPage from "../pageobjects/main.page.ts";
import testData from "../../data/testData.json";
import userData from "../../data/userData.json";

describe("Sign Up Tests", () => {
  beforeEach(async () => {
    await mainPage.visitMainPage();
  });

  it("User fails signup due to unchecked terms", async () => {
    await signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: false,
    });
    await expect(signUpPage.errorMessageTerms).toHaveText(
      RegExp(testData.terms)
    );
  });

  it("User fails signup due to Recaptcha", async () => {
    await signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(signUpPage.errorMessageRecaptcha).toHaveText(
      RegExp(testData.passwordError)
    );
  });

  it("User fails signup due to invalid email", async () => {
    await signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(signUpPage.errorMessageRecaptcha).toHaveText(
      RegExp(testData.passwordError)
    );
  });

  it("Verify password message during sign up", async () => {
    await signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: "",
      check: true,
    });
    await expect(signUpPage.requiredField).toBeDisplayed();
    await expect(signUpPage.passwordOneNumber).toBeDisplayed();
    await expect(signUpPage.passwordLowerCase).toBeDisplayed();
    await expect(signUpPage.passwordUpperCase).toBeDisplayed();
    await expect(signUpPage.passwordMinLength).toBeDisplayed();
    await expect(signUpPage.passwordOneSymbol).toBeDisplayed();
  });

  it("Verify empty email message during sign up", async () => {
    await signUpPage.signUp({
      email: "",
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(signUpPage.errorMessageEmptyEmailInput).toHaveText(
      testData.emptyField
    );
  });

  it("Verify empty first name message during sign up", async () => {
    await signUpPage.signUp({
      email: faker.internet.username(),
      firstName: "",
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(signUpPage.errorMessageEmptyFirstNameInput).toHaveText(
      testData.emptyField
    );
  });

  it("Verify empty last name message during sign up", async () => {
    await signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: "",
      password: userData.password,
      check: true,
    });
    await expect(signUpPage.errorMessageEmptyLastNameInput).toHaveText(
      testData.emptyField
    );
  });

  it("Verify button for applying a promo code", async () => {
    await signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: false,
    });
    await signUpPage.buttonApplyPromoCode.waitForDisplayed({ timeout: 5000 });
    await signUpPage.buttonApplyPromoCode.waitForEnabled({ timeout: 5000 });
    await signUpPage.clickButtonApplyPromoCode();
    await expect(signUpPage.inputPromoCode).toBeExisting();
  });
});
