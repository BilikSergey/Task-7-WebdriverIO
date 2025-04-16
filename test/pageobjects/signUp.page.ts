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

  get errorMessageTerms() {
    return $("#terms_and_conditions_message");
  }

  async signUp({
    email,
    firstName,
    lastName,
    password,
    check
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
    await this.buttonSubmit.click();
  }
}

export default new SignUpPage();
