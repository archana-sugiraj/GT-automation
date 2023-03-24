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

  test('Launching 4 point shader in Preview mode using the state', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);   

  });

  test('Graph Summary Validation', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary).click();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmryheader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmtydetails)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon).click();
  });

  test('Graph attributes Validation', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourauthor_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();
    await page.waitForTimeout(3000);

  });

  test('Validating the presence of 4 point shader in Preview mode', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("40");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("80");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("40");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("70");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("70");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());
    var points = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
    console.log(points);
    await page.waitForTimeout(4000);
  

    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
      await threePointPageObject.clickOnOptionButton('Four Point Shader');
      await threePointPageObject.plotshaderOnGraph("Four Point Shader");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("20");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("15");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("15");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("30");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("5");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("20");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("5");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());
      var points1 = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_2);
      console.log(points1);    
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
      await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
await page.locator(threePointPageObject.retrieveoutput).click();
await page.locator(threePointPageObject.modedropdown).selectOption('preview');
await page.locator(threePointPageObject.copytoinput).click();
await pageObject.clickOnLoadAPIButton();
await page.waitForTimeout(3000);
var Qpoints = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
var Spoints = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_2);
console.log(Qpoints); 
console.log(Spoints);
await page.waitForTimeout(3000);
expect(points).toStrictEqual(Qpoints);  
expect(points1).toStrictEqual(Spoints);  
    

  });




  
  

