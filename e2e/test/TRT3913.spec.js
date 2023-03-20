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

  test('Editing the Title', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await threePointPageObject.findDivByClassName('canvas-container');
    await page.waitForTimeout(2000);
    var graphTitleObject = await threePointPageObject.findInnerIframe("");
    var originalText = graphTitleObject.allTextContents();
    console.log(originalText);

    graphTitleObject.innerHTML("New Title");
    await page.waitForTimeout(2000);


  });