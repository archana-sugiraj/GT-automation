const { test, expect, Page } = require("@playwright/test");

export class ThreePointPageObject {
    loadAPI = 'button:has-text("Load API Below")';
  grapfIframe = 'iframe[name="ext_012345678_1"]'; 
  tabPanel =
    'div[role="tabpanel"] div:has-text("0 10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100")';


  page;
  constructor(page) {
    this.page = page;
  }

  async launchApplication(url) {
    await this.page.goto(url);
  }

  async clickOnLoadAPIButton() {
    await this.page.click(this.loadAPI);
  }

  async clickOnOptionButton(option) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(`button:has-text("${option}")`)
      .click();
  }

  async plotshaderOnGraph(value) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator("rect")
      .nth(4)
      .click();

      if(value==='line'){
        await this.page
        .frameLocator(this.grapfIframe)
        .locator(this.tabPanel)
        .nth(2)
        .click();
        }
        else{
          await this.page
        .frameLocator(this.grapfIframe)
        .locator(this.tabPanel)
        .nth(1)
        .click();
}
}
}