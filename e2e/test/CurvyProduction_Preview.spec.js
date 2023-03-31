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

  test('Launching CPP in preview mode using the state and verifying the Graph summary/ attributes and the presence of CPPs ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.ppauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);  
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
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curve_Whole)).toBeVisible();
    expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Whole)).toEqual("2");
    expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Whole)).toEqual("4,4");
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(curvyProductionPageObject.curve_Sol)).toBeVisible();
    
    
    // expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve2_Whole).nth(1)).toEqual("2");
    // expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve2_Whole).nth(1)).toEqual("4,4");
  });

  test('Launching CPP in preview mode using the state and verifying the presence of exact CPPs ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).evaluate(e => e.blur());
    var qpoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
    console.log(qpoints);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await page.waitForTimeout(2000);
  await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
  await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
  await page.waitForTimeout(3000);
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("80");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("90");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("90");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).evaluate(e => e.blur());
  await page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.footPrint).click();
  //var spoints = await threePointPageObject.getPolygonAttributeByLocator(("d",curvyProductionPageObject.curve_Sol).nth(1));
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Whole)).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Sol)).toBeVisible();
  await page.waitForTimeout(2000);
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
  await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
  await page.locator(threePointPageObject.retrieveoutput).click();
  await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000); 
    await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Whole)).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Sol)).toBeVisible();
  await page.waitForTimeout(2000); 
    
  
  });
    






