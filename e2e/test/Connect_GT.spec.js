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

  test('Opening QALV ', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator("#login-email").type("lucasinst@mheqa.com");
    await page.locator("#login-password").type("Cc123456");
    await page.locator("#login-submit-btn").click();
    
    await page.waitForLoadState("load");
    await page.waitForTimeout(5000);
    await page.locator('text=Tricon check').click();
    await page.waitForTimeout(2000);
    await page.locator('text= Add assignment').click();    
    await page.waitForLoadState("load");
    await page.waitForLoadState("networkidle");
    await page.locator('text= Question Bank').nth(0).click();
    await page.waitForTimeout(5000);
    await page.locator('#sourcepool').selectOption('Q');
    // Click text=Worksheet
    const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.waitForTimeout(5000),
    page.locator('.WK').click()
        
          ]);
    await page.waitForTimeout(5000);
     // Click #stem

     await page2.locator('#stem').click();
     //await page2.locator('#stem').type('__GT__');
     await page.waitForTimeout(2000);


  });