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

  test('Plotting a 3 point shader in question view and solution view', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("85");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("95");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("75");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("85");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("95");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("85");
    
    //element.selectOption('test');
    
    await page.locator(threePointPageObject.retrieveoutput).click();
    await page.locator(threePointPageObject.copytoinput).click();
    await page.locator(threePointPageObject.modedropdown).click();
    // ('mode_select').selectoption('test');
    await page.waitForTimeout(15000);

  });