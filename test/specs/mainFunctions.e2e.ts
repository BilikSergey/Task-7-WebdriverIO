import mainPage from "../pageobjects/main.page.ts";
import mainFunctionsPage from "../pageobjects/mainFunctions.page.ts";

describe("Main page", () => {
  beforeEach(async () => {
    await mainPage.visitMainPage();
  });

  it("Verify presence of elements on the Voice AI page", async () => {
    await mainFunctionsPage.openVoiceAIPage();
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
    await expect(mainFunctionsPage.userMessageChat).toBeExisting();
    expect(mainFunctionsPage.assistantMessageChat).toBeElementsArrayOfSize(2);
  });
});
