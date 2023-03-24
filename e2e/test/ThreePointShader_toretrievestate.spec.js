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

  test('Plotting a 3 point shader in question and solution view with attributes', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await threePointPageObject.selectStyle("Dotted");
    await threePointPageObject.selectButtonByText("3px");
    
    
   const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
   const originalText =await bothIframes.locator(threePointPageObject.tinymce).allTextContents();
 await bothIframes.locator(threePointPageObject.tinymce).selectText();
 await page.waitForTimeout(6000);
 await threePointPageObject.selectButtonById("mceu_3-button");
 await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
 await threePointPageObject.clickOnOptionButton('Three point shader');
await threePointPageObject.plotshaderOnGraph("Three point shader");
await threePointPageObject.selectStyle("Dotted");
await threePointPageObject.selectButtonByText("3px");
const bothIframes1=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_solIframe).locator(threePointPageObject.solutionviewtext);
await bothIframes1.allTextContents();
await bothIframes1.selectText();
await page.waitForTimeout(6000);
await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.Bold).click();
await page.waitForTimeout(2000);
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("85");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("45");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("75");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("35");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("95");
await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("35");
await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
await page.locator(threePointPageObject.retrieveoutput).click();

 await page.waitForTimeout(6000);
  });

  