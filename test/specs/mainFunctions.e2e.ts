import mainFunctionsPage from "../pageObjects/mainFunctions.page.ts";

describe("Main page", () => {
  beforeEach(async () => {
    await browser.url('');
  });

  it("Verify presence of elements on the Voice AI page", async () => {
    await mainFunctionsPage.openVoiceAIPage();
    await mainFunctionsPage.voiceAIImage.waitForDisplayed({ timeout: 5000 });
    await expect(mainFunctionsPage.voiceAIImage).toBeDisplayed();
    await expect(mainFunctionsPage.voiceAITitle).toBeDisplayed();
  });

  it("Verify presence of elements on the SMS API page", async () => {
    await mainFunctionsPage.openSMSAPIPage();
    await expect(mainFunctionsPage.imageSMSAPI).toBeDisplayed();
    await expect(mainFunctionsPage.titleSMSAPI).toBeDisplayed();
  });

  it("Verify AI assistant chat", async () => {
    await mainFunctionsPage.clickButtonChat();
    await mainFunctionsPage.userMessageChat.waitForExist({ timeout: 5000 });
    await expect(mainFunctionsPage.userMessageChat).toBeExisting();
    expect(mainFunctionsPage.assistantMessageChat).toBeElementsArrayOfSize(2);
  });
});
