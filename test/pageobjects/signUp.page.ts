class SignUpPage {
  get buttonSignUp() {
    return $$('[href="/sign-up"]')[0];
  }

  get inputEmail() {
    return $("#email");
  }

  get inputFirstName() {
    return $("#first_name");
  }

  get inputLastName() {
    return $("#last_name");
  }

  get inputPassword() {
    return $("#password");
  }

  get checkBox() {
    return $("#terms_and_conditions");
  }

  get buttonSubmit() {
    return $$('button[type="submit"]')[0];
  }

  get errorMessageRecaptcha() {
    return $(".c-UUKrH");
  }

  get errorMessageEmptyEmailInput() {
    return $("#email_message");
  }

  get errorMessageEmptyFirstNameInput() {
    return $("#first_name_message");
  }

  get errorMessageEmptyLastNameInput() {
    return $("#last_name_message");
  }

  get errorMessageTerms() {
    return $("#terms_and_conditions_message");
  }

  get buttonApplyPromoCode() {
    return $("[aria-hidden='false'] [class*='c-khZXrc c-cXPFLv']");
  }

  get inputPromoCode() {
    return $("#promo_code");
  }

  get passwordMinLength() {
    return $("#passwordMinLength");
  }

  get passwordOneNumber() {
    return $("#passwordOneNumber");
  }

  get passwordOneSymbol() {
    return $("#passwordOneSymbol");
  }

  get passwordUpperCase() {
    return $("#passwordUpperCase");
  }

  get passwordLowerCase() {
    return $("#passwordLowerCase");
  }

  get requiredField() {
    return $("#required");
  }

  async clickButtonApplyPromoCode() {
    await this.buttonApplyPromoCode.click();
  }

  async signUp({
    email,
    firstName,
    lastName,
    password,
    check,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    check: boolean;
  }) {
    await this.buttonSignUp.click();
    await this.inputEmail.setValue(email);
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputPassword.setValue(password);
    if (check) await this.checkBox.click();
    else await this.checkBox.scrollIntoView();
    await this.buttonSubmit.waitForDisplayed({ timeout: 5000 });
    await this.buttonSubmit.waitForEnabled({ timeout: 5000 });
    await this.buttonSubmit.waitForClickable({ timeout: 5000 });
    await this.buttonSubmit.click();
  }
}

export default new SignUpPage();
