import loginPage from "../pageobjects/login.page.ts";
import testData from '../../data/testData.json'; 

describe('Login Test', () => {
  it('should verify reCAPTCHA error on login', async () => {
    await loginPage.visitLoginPage();  
    await loginPage.login();          
    const errorText = await loginPage.errorMessageRecaptcha.getText(); 
    await expect(errorText).toContain(testData.recaptcha); 
  });
});
