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
    await page.waitForTimeout(6000);
    await page.locator('text=Tricon QALV Test').click();
    await page.waitForTimeout(6000);
    await page.locator('text= Add assignment').click();
    await page.locator('[href="javascript:;"]').nth(16).click();
    await page.locator(".form-control").nth(0).click();
    await page.waitForTimeout(2000);
    await page.locator(".form-control").nth(0).fill("1");
    await page.locator(".form-control").nth(1).click();
    await page.locator(".form-control").nth(1).fill("Book a fever appointment");
    //await page.locator('button:text("Attach file")').click();
    const[filechooser2] = await Promise.all([
      page.waitForEvent('filechooser'),
      await page.waitForTimeout(1000),
      page.locator('button:text("Attach file")').click()
      ]);
     await filechooser2.setFiles("e2e/uploadFile/RailwireBilling_Nov_Feb.pdf");   
    await page.locator('button:text("Save")').click();
    await page.locator('button:text("Add activity")').click();
    await page.locator(".form-control").nth(0).click();
    await page.locator(".form-control").nth(0).fill("2");
    await page.locator(".form-control").nth(1).click();
    await page.locator(".form-control").nth(1).fill("Book a Rashes appointment");
    await page.locator('button:text("Save")').click();
    await page.locator('button:text("Set policy")').click();
    await page.waitForTimeout(6000); 
    await page.locator('[name="title"]').type("Assignment123");
    await page.locator("#endDate").fill("02/09/2023");
    await page.locator("#duedateTime").fill("11:59pm");
    await page.locator("#attempts").nth(1).click;
    await page.locator("#attempts").selectOption({label: '3'});  
    await page.locator("#assign").click();
    //await page.waitForTimeout(6000); 
    
  });
  
  