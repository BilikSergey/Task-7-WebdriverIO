class MainFunctions {
  get dropDownMainMenu() {
    return $$(".c-UazGY");
  }

  get dropDownProductsMenu() {
    return $$(".c-swQxl");
  }

  get buttonVoiceAI() {
    return $("*=" + "Voice AI");
  }

  get voiceAIImage() {
    return $('[id*="47IXUipwXaswvrGRT7yea1"] img');
  }

  get voiceAITitle() {
    return $('[id*="47IXUipwXaswvrGRT7yea1"] h1');
  }

  get buttonSMSAPI() {
    return $("*=" + "SMS API");
  }

  get imageSMSAPI() {
    return $('[id="1Km13UufIOZIojgMFAN6R9"] img');
  }

  get titleSMSAPI() {
    return $('[id="1Km13UufIOZIojgMFAN6R9"] h1');
  }

  get buttonChat() {
    return $(".c-bpNouX");
  }

  get textAreaChat() {
    return $(".c-fJsHXZ");
  }

  get userMessageChat() {
    return $(".c-bCIlIy.c-bupPtx");
  }

  get assistantMessageChat() {
    return $$(".c-bCIlIy.c-khViZk");
  }

  get sendMessageButton() {
    return $(".c-cODSYQ.c-gGVcDH");
  }

  async openVoiceAIPage() {
    await this.dropDownMainMenu[1].click(); 
    await this.dropDownProductsMenu[0].click(); 
    await this.buttonVoiceAI.click(); 
  }

  async openSMSAPIPage() {
    await this.dropDownMainMenu[1].click();
    await this.dropDownProductsMenu[0].click();
    await this.buttonSMSAPI.click();
  }

  async clickButtonChat() {
    await this.buttonChat.click();
    await this.textAreaChat.setValue(
      "Hello! I just want to test your site for improving my QA skills"
    );
    await this.sendMessageButton.click();
  }
}
export default new MainFunctions();
