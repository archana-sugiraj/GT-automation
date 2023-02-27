const { test, expect, Page } = require("@playwright/test");

export class ThreePointPageObject {
 
  loadAPI = 'button:has-text("Load API Below")';
  grapfIframe = 'iframe[name="ext_012345678_1"]';    
  threePointLine = 'shader-line';
  firstPointOnThreeShader = '//*[@id="ThreeShader_1_Point_0"]';
  secondPointOnThreeShader = '//*[@id="ThreeShader_1_Point_1"]';
  threePointOnThreeShader = '//*[@id="ThreeShader_1_Point_2"]';
  threeShader_1 = '//*[@data-automation-id="ThreeShader_1"]';
  whole_Iframe='[name="ext_012345678_1"]';
  text_Iframe = '#mce_0_ifr';
  title ="//body[text()='ThreePointShader 1']";  
  Bold='#mceu_0-button';
  tinymce ="#tinymce";
  solutionviewtab='span:has-text("Solution View")';  

  
  page;
  constructor(page){
    this.page = page;
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



async selectStyle(option) {
  await this.page
    .frameLocator(this.grapfIframe)
    .locator(`button:has-text("${option}")`)
    .click();
}

async selectButtonByText(option) {
  await this.page
    .frameLocator(this.grapfIframe)
    .locator(`button:has-text("${option}")`)
    .click();
}

async getPolygonAttribute(option) {
  return await this.page
    .frameLocator(this.grapfIframe)
    .locator(this.threeShader_1)
    .getAttribute(option);
}

async getCircleAttribute(option) {
  return await this.page
    .frameLocator(this.grapfIframe)
    .locator(this.ThreeShader_1_Point_0)
    .getAttribute(option);
}

async selectButtonById(option) {
  await this.page
    .frameLocator(this.grapfIframe)
    .locator(`#${option}`)
    .click();
}
}
  