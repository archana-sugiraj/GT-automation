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
  test('Using the 4.0 version state in 5.0', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.inputtextarea).type(data.version4_state1);
    await page.waitForTimeout(12000);
    await page.waitForLoadState("networkidle");
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await pageObject.clickOnLoadAPIButton();  
    
  });