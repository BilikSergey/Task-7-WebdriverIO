import userData from '../../data/userData.json' assert { type: 'json' };

class LoginPage {
  get inputEmail() {
    return $('[name="email"]');
  }

  get inputPassword() {
    return $('[name="password"]');
  }

  get buttonSubmit() {
    return $$('button[type="submit"]')[1];
  }

  get errorMessageRecaptcha() {
    return $(".MuiAlert-message");
  }

  async visitLoginPage() {
    await browser.url("https://portal.telnyx.com/#/login/sign-in");
  }

  async login() {
    await this.inputEmail.setValue(userData.email);
    await this.inputPassword.setValue(userData.password);
    await this.buttonSubmit.click();
  }
}

export default new LoginPage();
