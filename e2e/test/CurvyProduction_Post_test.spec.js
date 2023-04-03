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
    await page.locator(threePointPageObject.modedropdown).selectOption('review');
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

     expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Whole)).toEqual("2");
     expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Whole)).toEqual("4,4");
     expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Ans)).toEqual("2");
     expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Ans)).toEqual("4,4");
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Correct)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Icon)).toBeVisible();
     await page.waitForTimeout(3000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).toBeVisible();
     await (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).click();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.Coordinate_txt)).toBeVisible();
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.Coordinate_txt)).toBeVisible();
     await page.waitForTimeout(5000);
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeVisible();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeVisible();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeVisible();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeVisible();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeDisabled();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeDisabled();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeDisabled();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeDisabled();
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toHaveValue("90");
     expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toHaveValue("90");
     await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.close_btn).click();
 
  });