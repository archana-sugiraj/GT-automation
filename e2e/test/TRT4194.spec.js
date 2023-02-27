const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';

var environment =globalSetup();
var pageObject;var threePointPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
  });

  test('Check for the presence of 3 point shader', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader)).toBeVisible();
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.secondPointOnThreeShader)).toBeVisible();
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.threePointOnThreeShader)).toBeVisible();
 
 });

 test('Check for the presence of exact 3 point shader in Solution View', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
  
    var pointsonquestionview = await threePointPageObject.getPolygonAttribute("points");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    var pointsonsolutionview = await threePointPageObject.getPolygonAttribute("points");
    expect(pointsonquestionview).toStrictEqual(pointsonsolutionview);
    
});

test('plotting 3 point shader in Solution View and check for its presence', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
      await pageObject.clickOnLoadAPIButton();
      await threePointPageObject.clickOnOptionButton('Three point shader');
      await pageObject.plotshaderOnGraph("Three point shader");
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
      //await page.waitForTimeout(5000);
      await threePointPageObject.clickOnOptionButton('Three point shader');
      await pageObject.plotshaderOnGraph("Three point shader");
      expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader)).toBeVisible();
      expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.secondPointOnThreeShader)).toBeVisible();
      expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.threePointOnThreeShader)).toBeVisible();
  });



