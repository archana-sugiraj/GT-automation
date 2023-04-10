const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
import{ CurvyProductionPageObject} from '../page-factory/curvyproduction';


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

  test('plotting a Curvy Production Possibility,3 and a 4 point shader and verifying the same in all modes', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
    await page.waitForTimeout(3000);
   await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("30");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("40");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("80");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("40");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("70");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("30");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("70");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());
await page.waitForTimeout(5000);
var Qpoints_4  = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);

await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader).click();
await page.waitForTimeout(3000);
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("75");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("20");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("65");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("40");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("70");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).evaluate(e => e.blur());
    var Qpoints_3 = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_1);
    await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.firstPointonCurvy).click();
    await page.waitForTimeout(3000);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).evaluate(e => e.blur());
    await page.waitForTimeout(3000);
    var Qpoints_C = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    var Spoints_4  = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
    var Spoints_3 = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_1);
    var Spoints_C = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
    await page.waitForTimeout(3000);
    expect(Qpoints_4).toStrictEqual(Spoints_4);
    expect(Qpoints_3).toStrictEqual(Spoints_3);
    expect(Qpoints_C).toStrictEqual(Spoints_C);
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



  });  
