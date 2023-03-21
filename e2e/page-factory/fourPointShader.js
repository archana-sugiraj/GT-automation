const { test, expect, Page } = require("@playwright/test");

export class FourPointPageObject {

    loadAPI = 'button:has-text("Load API Below")';
    grapfIframe = 'iframe[name="ext_012345678_1"]'; 
   
    fourShader_1 = '//*[@data-automation-id="FourShader_1"]';
    firstPointOnFourShader = '//*[@id="FourShader_1_Point_0"]';
    secondPointOnFourShader = '//*[@id="FourShader_1_Point_1"]';
    threePointOnFourShader = '//*[@id="FourShader_1_Point_2"]';
    fourPointOnFourShader = '//*[@id="FourShader_1_Point_3"]';
    

    //solutionview
  fourShader_2 = '//*[@data-automation-id="FourShader_2"]';
  firstPointOnFourShader_2 = '//*[@id="FourShader_2_Point_0"]';
  secondPointOnFourShader_2 = '//*[@id="FourShader_2_Point_1"]';
  threePointOnFourShader_2 = '//*[@id="FourShader_2_Point_2"]'; 
  fourPointOnFourShader_2 = '//*[@id="FourShader_2_Point_3"]'; 

    tabPanel =
    'div[role="tabpanel"] div:has-text("0 10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100")';

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
          await this.page
          .frameLocator(this.grapfIframe)
          .locator(this.tabPanel)
          .nth(1)
          .click();
          }
      }

    async clickOnOptionButton(option) {
        await this.page
          .frameLocator(this.grapfIframe)
          .locator(`button:has-text("${option}")`)
          .click();
      }
    

    async selectButtonById(option) {
        await this.page
          .frameLocator(this.grapfIframe)
          .locator(`#${option}`)
          .click();
      }
      }
        