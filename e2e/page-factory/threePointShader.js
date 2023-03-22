const { test, expect, Page } = require("@playwright/test");


export class ThreePointPageObject {
 
  loadAPI = 'button:has-text("Load API Below")';
  grapfIframe = '[name="ext_012345678_1"]';  
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

  threepointshaderonsolution = "//span[text()='ThreePointShader 2']";
  //solutionframe = '[frameborder="0"]';
  whole_Iframe='[name="ext_012345678_1"]';
  text_Iframe = '#mce_0_ifr';
  text_solIframe = '[allowtransparency="true"]';
  title ="//body[text()='ThreePointShader 1']";  
  Bold='[aria-label="Bold"]';
  tinymce ="//body[text() = 'ThreePointShader 1']";
  solutionviewtab='span:has-text("Solution View")';  
  questionviewtab='span:has-text("Question View")';
  buttonpanel ="#mceu_6";
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
  modedropdown = 'select[name="mode_select"]';
  txt_Tools="//h2[text()='Tools']";
  txt_undo="//span[text()='Undo']";
  txt_Redo="//span[text()='Redo']";
  txt_Reset="//span[text()='Reset']";
  retrieveoutputtextarea = '[name="ext_012345678_1_ostate"]';
  threepointshadertool = '#ThreeShader_2_item';
  threepointshadertoolicon = '#three-vertices-icon';
  solutionviewtext = "//body[text()='ThreePointShader 2']";
 ////*[@id="LABEL.TEXTDESCRPTION"]/div/gt-graph-description/div/div/a[1]
 closebutton = ".dpg-icon-system-close";
 Graphdesc = 'text=accordion-closeGraph Description >> button';
 link_Generate =  "//a[text() = 'Generate']";
 btn_Save =  "//button[text()='Save']";
 txt_3point_solution="//strong[text()='ThreePointShader 2']";
 btn_close = '.dpg-icon-system-close-white';
 txt_Pt1_of_3 = "//label[text()=' Point 1 of 3']";
 txt_Pt2_of_3 = "//label[text()=' Point 1 of 3']";
 txt_Pt3_of_3 = "//label[text()=' Point 1 of 3']";
 txt_X = "//label[text()='X']";
 txt_Y = "//label[text()='Y']";
 XYinput_Box = '[type="number"]';
 txt_outsidegraphingArea = "//span[text()='You have entered a coordinate that exists outside the graphing area.']";
 txt_minvalue = "//span[text()='The value entered is less than the minimum coordinate system value.']";
 txt_decimalvalue = "//span[text()='Please enter a value with less than or equal to 2 decimal places.']";
 txt_novalue = "//span[text()='Please enter a value.']";
 btn_done = "//button[text()='Done']";
 btn_clear = "//button[text()='Clear']";
 Popup_Reset = '//p[text()="If you reset the activity, all of your changes will be lost. Do you want to proceed?"]';
 btn_cancel = '//button[text()=" Cancel "]';
 btn_YesProceed = "//button[text()=' Yes, proceed ']";
 property_Panel = '.properties-panel-body';
 score_area = '[name="ext_012345678_1_eval"]';
 txt_GraphSummary = "//button[text()='Graph Summary']";
 txt_Gphsmryheader = '//h2[text()=" Graph Summary "]';
 txt_Gphsmry_clsIcon = ".ahe-icon-close-white";
 txt_Gphsmtydetails = ".modal-content-text";
 txt_instructions = "//button[text()='Instructions']";
 txt_instructionsheader  = '//h2[text()=" Instructions "]';
 txt_instruction_clsIcon = ".ahe-icon-close-white";
 txt_Ins_PanelHeader = '//h3[text()="Keyboard navigation"]';
 txt_tab = "//li[1]";
 txt_Enter = "//li[2]";
 txt_Undo_Ins = "//li[3]";
 txt_Redo_Ins = "//li[4]";
 txt_GraphTitle = "//h2[text()='Graph Title']";
 txt_SubTitle = "//h3[text()='Subtitle']";
 txt_Yaxis_label = "//h3[text()='Y-axis Label']";
 txt_X_axis_Label = "//h3[text()='X-axis Label']";
 txt_Success = ".alert-success";
 txt_Correct = "//span[text()='Correct']";
 pregrade_Icon = "#Symbols";
 pregrade_Text = "//span[text()='ThreePointShader 2']";
 txt_alert = ".alert-info";
 txt_Incorrect = "//span[text()='Incorrect']";
 txt_warning = ".alert-warning";
 txt_Incomplete = "//span[text()='Incomplete']";
 txt_Incomplete1 = "//span[text()='Incorrect']";
 


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
  