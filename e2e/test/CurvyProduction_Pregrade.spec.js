const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
import{ CurvyProductionPageObject} from '../page-factory/curvyproduction';
const data = require('../testdata/data');


var environment = globalSetup();
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

  test('Graph Summary,other attributes Validation ', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.ppstudent_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
     await page.locator(threePointPageObject.copytoinput).click();
     await pageObject.clickOnLoadAPIButton();
     await page.waitForTimeout(3000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeEnabled();
     await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary).click();
     await page.waitForTimeout(3000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmryheader)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmtydetails)).toBeVisible();
     await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon).click();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();

     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Success)).toBeVisible();
     const receivedsuccessmsg =await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Success).allTextContents();
     console.log(receivedsuccessmsg);
     const expsuccessmsg = ["SuccessAnswer is complete and entirely correct"];
     expect(receivedsuccessmsg).toStrictEqual(expsuccessmsg);
     await page.waitForTimeout(5000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Correct)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Icon)).toBeVisible();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).toBeVisible();
    await (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).click();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.Coordinate_txt)).toBeVisible();
    
 
  });