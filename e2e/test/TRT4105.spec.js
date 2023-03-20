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

  test('plotting 3 point shader in Solution View and check for its presence only in the solution view', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.questionviewtab).click();   
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_2))).toBeHidden();
  });

  test('plotting 3 point shader in Solution View and check after updating the coordinates', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");

  });

