const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
const data = require('../testdata/data');

var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
  });

  test('Launching 4 point shader in test mode using the state', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);  
  });

  test('Graph Summary Validation ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary).click();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmryheader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmtydetails)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon).click();
  });

  test('Instruction Validation ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instructions)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instructions)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instructions).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instructionsheader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instruction_clsIcon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Ins_PanelHeader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_tab).nth(1)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Enter)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Undo_Ins)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo_Ins)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_instruction_clsIcon).click();

  });

  test('Graph attributes Validation ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();
  });

  test('Check for the presence of Tool in test mode ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Tools)).toBeVisible();

  });

  test('Check for 4 point shader tool text  in test mode ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_4point_sol)).toBeVisible();
     
  });

  test('Check for the presence of Undo in test mode ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeVisible();
  });

  test('Check for the  Disabled/Enabled Undo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeDisabled();
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('30');
    await page.waitForTimeout(3000);
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('40');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeEnabled();
  });
  // below case will fail due to the issue with the Undo button
  test('Validating the  Undo button in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeDisabled();
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('30');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('40');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('10');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('50');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('70');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('80');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('10');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('50');

  });

  test('Check for the presence of Redo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the Disabled/Enabled Redo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeDisabled();
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
  await (icon).click();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('30');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('40');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeEnabled();
        
  });

  test('Validating the  Redo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('80');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('90');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('80');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('90');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('10');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('20');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toHaveValue('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toHaveValue('');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo).click();    
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('80');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('90');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toHaveValue('10');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toHaveValue('20');
        
  });

  test('Check for the presence of Reset in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the Enabled Reset in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.Popup_Reset)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_cancel)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_YesProceed)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_cancel)).toBeEnabled();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_YesProceed)).toBeEnabled();
  
  });

  test('Validating the  Reset in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('80');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('90');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_cancel).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('80');
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('90');
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_YesProceed).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.property_Panel)).toBeHidden();
    
  });

  test('Check for 4 point shader tool  in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool)).toBeVisible();
    await page.waitForTimeout(3000);  
  });

  test('Check for 4 point shader tool icon in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertoolicon)).toBeVisible();
    await page.waitForTimeout(3000);  
  });

  test('clicking 4 point shader tool and presence of close button', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_close)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('clicking 4 point shader tool and check for the presence of Label for all the coordinates', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_coordinates)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt1_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt2_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt3_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt4_of_4)).toBeVisible();
    await (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_close)).click();
    await page.waitForTimeout(5000);  
  });

  test('clicking 4 point shader tool and check for the presence of X and Y Label for all the input boxes', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X).nth(3)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Y).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Y).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Y).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Y).nth(3)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('clicking 4 point shader tool and check for the  presence of enabled and disabled X and Y input boxes', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeEditable();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeEditable();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toBeDisabled();
    await page.waitForTimeout(5000);  
  });

  test('clicking 4 point shader tool and Validating X coordinates with Done & Clear button Validation', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('800');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_outsidegraphingArea)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('-400');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_minvalue)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('22.789');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_decimalvalue)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_novalue)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('40');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('40');
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeDisabled();

 } )  ;

 test('clicking 4 point shader tool and Validating Y coordinates with Done & Clear button Validation', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('800');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_outsidegraphingArea)).toBeVisible();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('-400');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_minvalue)).toBeVisible();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('22.789');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_decimalvalue)).toBeVisible();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_novalue)).toBeVisible();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('30');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('30');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeDisabled();
});

test('clicking 4 point shader tool and filling all the coordinates with Done & Clear button Validation', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('30');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toHaveValue('30');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('60');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toHaveValue('60');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('10');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toHaveValue('10');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('50');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toHaveValue('50');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).fill('70');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toHaveValue('70');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5).fill('20');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toHaveValue('20');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeDisabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeDisabled();
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6).fill('40');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toHaveValue('40');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7).fill('90');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toHaveValue('90');
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeEnabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeEnabled();

});

test('Clear & Done button Validation', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('30');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('40');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('50');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('60');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).fill('70');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5).fill('80');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6).fill('90');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7).fill('100');
  await page.waitForTimeout(3000);
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear).click();
  await page.waitForTimeout(3000);
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeDisabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeDisabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeEnabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeEnabled();
  expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeDisabled();
});

test.only('Scoring 100% and verifying the attributes', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_4point_sol)).toBeVisible();
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
    await (icon).click();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('20');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('15');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('30');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('15');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).fill('30');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5).fill('5');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6).fill('20');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7).fill('5');
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7).evaluate(e => e.blur());
  await page.waitForTimeout(3000);
  await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done).click();
  await page.waitForTimeout(5000);
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",fourPointPageObject.fourShader_1)).toEqual("2");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",fourPointPageObject.fourShader_1)).toEqual("6,2")
  await page.locator(threePointPageObject.retrieveoutput).click();
  await page.waitForTimeout(6000);
  expect (page.locator(threePointPageObject.score_area)).toHaveValue('100');
});

  


 


  
  
  

  
 
  

  
  
 
   
  
  

  




  

