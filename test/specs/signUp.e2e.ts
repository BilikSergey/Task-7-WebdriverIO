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
      check: false
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
      RegExp(testData.recaptcha)
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
      RegExp(testData.recaptcha)
    );
  });
});

