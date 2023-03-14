const { test, expect, Page } = require("@playwright/test");

export class ThreePointPageObject {
 
  loadAPI = 'button:has-text("Load API Below")';
  grapfIframe = 'iframe[name="ext_012345678_1"]';  
  threePointLine = 'shader-line';
  firstPointOnThreeShader = '//*[@id="ThreeShader_1_Point_0"]';
  secondPointOnThreeShader = '//*[@id="ThreeShader_1_Point_1"]';
  threePointOnThreeShader = '//*[@id="ThreeShader_1_Point_2"]';
  threeShader_1 = '//*[@data-automation-id="ThreeShader_1"]';
//solutionview
  threeShader_2 = '//*[@data-automation-id="ThreeShader_2"]';
  firstPointOnThreeShader_2 = '//*[@id="ThreeShader_2_Point_0"]';
  secondPointOnThreeShader_2 = '//*[@id="ThreeShader_2_Point_1"]';
  threePointOnThreeShader_2 = '//*[@id="ThreeShader_2_Point_2"]'; 
  tabPanel =
    'div[role="tabpanel"] div:has-text("0 10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100")';


  whole_Iframe='[name="ext_012345678_1"]';
  text_Iframe = '#mce_0_ifr';
  title ="//body[text()='ThreePointShader 1']";  
  Bold='#mceu_0-button';
  tinymce ="#tinymce";
  solutionviewtab='span:has-text("Solution View")';  
  questionviewtab='span:has-text("Question View")';
  buttonpanel ="#mceu_6"
  splCharPopupButton ="#mceu_4-button";
  currencytab ="//span[text()='Currency']";
  mathtab ="//span[text()='Math']";
  greektab ="//span[text()='Greek']";
  color = "//label[text()='Color:']";
  colordropdown = '.picker-dropdown';
  colorpallette = "//label[text()='Color Picker']";
  showHide = "//label[text()='Show/Hide Points:']";
  retrieveoutput = ('button:text("Retrieve Output")');  
  copytoinput = ('button:text("<- copy ^ to input")');
  modedropdown = 'select:has-text("mode_select")';
 
 
  page;
  constructor(page){
    this.page = page;
  }
  async PxToCo(attr) {
    const xScale = 360 / (10 * 10);
    const yScale = 360 / (10 * 10);
    const xCo = 0 * 1 + (attr.x - 150) / xScale;
    const yCo = 0 * 1 + (50 + 360 - attr.y) / yScale;
    attr.x = this.roundNumber(xCo, 2);
    attr.y = this.roundNumber(yCo, 2); 
    
    return attr;
  } 
  
  async roundNumber(num, length) { 
    num = Math.round(num * Math.pow(10, length)) / Math.pow(10, length); 
    if (num.toString().indexOf('.') > -1 && num.toString().substr(num.toString().indexOf('.') + 1).length > length) { 
      num = num.toFixed(length); 
    } 
    return num; 
    }
    async findDivByClassName(option) {
      console.log(await this.page
        .frameLocator(this.grapfIframe)
        .locator(`div.${option} > gt-annotation`)
        .nth(0)
        .locator(`button:has-text("Edit")`)
        .innerHTML());
      await this.page
        .frameLocator(this.grapfIframe)
        .locator(`div.${option} > gt-annotation`)
        .locator(`button:has-text("Edit")`)
        .nth(0)
        //.locator('gt-annotation:has(div.promo)')
        .click();
    }
  
    async findInnerIframe(option){
      // console.log(this.page
      //   .frameLocator(this.grapfIframe).frameLocator(this.graph_title_Iframe));
      return await this.page
        .frameLocator(this.grapfIframe).frameLocator(this.graph_title_Iframe)
        .locator("body")
      ;
  
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
      .nth(3)
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

async getPolygonAttributeByLocator(option,locator) {
  return await this.page
    .frameLocator(this.grapfIframe)
    .locator(locator)
    .getAttribute(option);
}


async selectButtonById(option) {
  await this.page
    .frameLocator(this.grapfIframe)
    .locator(`#${option}`)
    .click();
}
}
  