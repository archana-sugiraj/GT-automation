const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
import{ CurvyProductionPageObject} from '../page-factory/curvyproduction';
const data = require('../testdata/data');


var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;
var curvyProductionPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
   curvyProductionPageObject = new CurvyProductionPageObject(page);
  });
  

  test('Launching CPP in test mode using the state', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.ppauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);  
  });

  test('Graph Summary,Instruction and Graph attributes Validation ', async ({ page }) => {   
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.ppauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000); 
    await page.waitForLoadState("networkidle");
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary).click();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmryheader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmtydetails)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon).click();
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

    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();

  });

  test.only('Check for the Tools,icon,text,input boxes', async ({ page }) => {   
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.ppauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000); 
    await page.waitForLoadState("networkidle");
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Tools)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curvetext_Test)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curvetext_icon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeDisabled();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeDisabled();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeDisabled();



    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curvetext_btn)).toBeVisible();
    await(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curvetext_btn)).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_close)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Pt1_of_2).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Pt1_of_2).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Pt2_of_2).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Pt2_of_2).nth(1)).toBeVisible();
    await page.waitForTimeout(2000);
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_X).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_X).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_X).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_X).nth(3)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Y).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Y).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Y).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_Y).nth(3)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_coordinate).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_coordinate).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_coordinatebefore)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.txt_coordinateafter)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toBeEnabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toBeEnabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done)).toBeEnabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_clear)).toBeEnabled();
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toHaveValue("0");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toHaveValue("0");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toHaveValue("0");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7)).toHaveValue("0");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toHaveValue("80");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toHaveValue("80");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5)).toHaveValue("80");
    await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6)).toHaveValue("80");
    





    





    
    await page.waitForTimeout(2000);
    await (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_close)).click();

    

  });