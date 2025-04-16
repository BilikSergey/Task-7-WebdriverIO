class MainPage {
    async visitMainPage() {
      await browser.url("https://telnyx.com/");
    }
  }
  
  export default new MainPage();