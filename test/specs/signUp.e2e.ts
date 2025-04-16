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
    signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: false
    });
    await expect(await signUpPage.errorMessageTerms.getText()).toContain(
      testData.terms
    );
  });

  it("User fails signup due to Recaptcha", async () => {
    signUpPage.signUp({
      email: faker.internet.email(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(await signUpPage.errorMessageRecaptcha.getText()).toContain(
      testData.recaptcha
    );
  });

  it("User fails signup due to invalid email", async () => {
    signUpPage.signUp({
      email: faker.internet.username(),
      firstName: faker.internet.username(),
      lastName: faker.internet.username(),
      password: userData.password,
      check: true,
    });
    await expect(await signUpPage.errorMessageRecaptcha.getText()).toContain(
      testData.recaptcha
    );
  });
});
