const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';

var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;


test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
  });

  test('Plotting a 4 point shader in question and solution view with attributes to retrieve the state', async ({ page }) => {
      await pageObject.launchApplication(environment.baseUrl);
      await pageObject.clickOnLoadAPIButton();
      await threePointPageObject.clickOnOptionButton('Four Point Shader');
      await threePointPageObject.plotshaderOnGraph("Four Point Shader");
      await threePointPageObject.selectStyle("Dashed");
      await threePointPageObject.selectButtonByText("2px");   
      const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
      const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
      await bothIframes.locator(fourPointPageObject.tinymce).selectText();
      await page.waitForTimeout(3000);
      await threePointPageObject.selectButtonById("mceu_1-button");
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
      await threePointPageObject.clickOnOptionButton('Four Point Shader');
      await threePointPageObject.plotshaderOnGraph("Four Point Shader");
      await threePointPageObject.selectStyle("Dashed");
      await threePointPageObject.selectButtonByText("2px");
      const bothIframes1=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_solIframe).locator(fourPointPageObject.solutionviewtext);
      await bothIframes1.allTextContents();
      await bothIframes1.selectText();
      await page.waitForTimeout(2000);
      await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.Italic).click();
      await page.waitForTimeout(2000);
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("20");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("15");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("15");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("30");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("5");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("20");
      await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("5");
      await page.waitForTimeout(3000);        
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
      await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
      await page.locator(threePointPageObject.retrieveoutput).click();
      await page.waitForTimeout(8000);
});

  