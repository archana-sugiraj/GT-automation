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

  test('Plotting a Curvy Production Possibility in question view and Check for its presence', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.firstPointonCurvy)).toBeVisible();
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.secondPointonCurvy)).toBeVisible();

  });

  test('Plotting a Curvy Production Possibility in question view and switching between solution and question view', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await page.waitForTimeout(3000);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.questionviewtab).click();
    await page.waitForTimeout(3000);
  }); 

  test.only('Plotting a Curvy Production Possibility and check its plotted with only two points', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);    
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeVisible();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toBeHidden();
  });
    

