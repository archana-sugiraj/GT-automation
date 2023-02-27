const { test, expect, Page } = require("@playwright/test");

export class PageObject {
  loadAPI = 'button:has-text("Load API Below")';
  grapfIframe = 'iframe[name="ext_012345678_1"]';
  lineAttribute = '//*[@data-id="Line_1"]';
  firstPointOnLine = '//*[@id="Line_1_Point_1"]';
  secondPointOnLine = '//*[@id="Line_1_Point_2"]';
  solutionview='text=Solution View';
linetopoint="//*[@data-id='Line_2_Point_0']"
linetopoint_0 = '//*[@id="Line_2_Point_1"]';
slopeButton = 'span:has-text("Slope")';
verticalCheckBox = 'span:has-text("Vertical")';
HorizonatalCheckBox = 'span:has-text("Horizontal")';
positiveSlope = 'span:has-text("Positive Slope")';

  
  tabPanel =
    'div[role="tabpanel"] div:has-text("0 10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100")';

  //tabPanel =
    'div[role="tabpanel"] .position-relative .position-relative)';
  doneButton = 'button:has-text("Done")';
  identifierIframe = "#mce_0_ifr";
  drawToggle = '//*[@class="toggle-container"]';
  hint='span:has-text("H.Int")';
  vHint ='span:has-text("V.Int")';
  comparesetting='text=H.Intcomparison Dropdown= >> input[type="number"]'


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
      }else{
        console.log("test else console")
        await this.page
      .frameLocator(this.grapfIframe)
      .locator(this.tabPanel)
      .nth(1)
      .click();
      }
  }

  async clickOnDoneButton() {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(this.doneButton)
      .click();
  }

  async selectWidth(option) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(`button:has-text("${option}")`)
      .click();
  }

  async getLineAttribute(option) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(this.lineAttribute)
      .getAttribute(option);
  }

  async selectStyle(option) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(`button:has-text("${option}")`)
      .click();
  }

  async selectIdentifierText() {
    await this.page
      .frameLocator(this.grapfIframe)
      .frameLocator("#mce_0_ifr")
      .locator("text=Line 1")
      .click({
        clickCount: 3,
      });
  }

  async selectIdentifier(option) {
    await this.page
      .frameLocator(this.grapfIframe)
      .locator(`[aria-label="${option}"] button[role="presentation"]`)
      .click();
  }
 
  async validateSubScriptText() {
    return await this.page
      .frameLocator(this.grapfIframe)
      .frameLocator(this.identifierIframe)
      .locator("//sub//em//strong")
      .textContent();
  }

  async validateSuperScriptText() {
    return await this.page
      .frameLocator(this.grapfIframe)
      .frameLocator(this.identifierIframe)
      .locator("//sup//em//strong")
      .textContent();
  }
  async clickOnsolutionview() {
    await this.page.frameLocator(this.grapfIframe).locator(this.solutionview).click()
  }
  async clickDrawToggle() {
    await this.page.frameLocator(this.grapfIframe).locator(this.drawToggle).click()
  }
  async clickhint() {
    await this.page.frameLocator(this.grapfIframe).locator(this.hint).click()
  }
  async dropdowncompare(value) {
    await this.page.frameLocator(this.grapfIframe).locator(this.comparesetting).fill(value)
  }
  async clickontab(){
    await this.page.frameLocator(this.grapfIframe).locator(this.tabPanel).nth(2).click();
  }

  async clickOnTabPanel(){
    await this.page.frameLocator(this.grapfIframe).locator(this.tabPanel).nth(2).click();
  }

  async clickOnVerticalCheckBox(){
    await this.page.frameLocator(this.grapfIframe).locator(this.vHint).click();

  }

  async sendValueToIdentifier() {
    await this.page
      .frameLocator(this.grapfIframe)
      .frameLocator("#mce_0_ifr")
      .locator("#tinymce").fill('Line 1')
  }
}

