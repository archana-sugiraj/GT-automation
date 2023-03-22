const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
const data = require('../testdata/data');

var environment =globalSetup();
var pageObject;
var threePointPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
  });

  test('Launching 3 point shader in Preview mode using the state', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);   

  });


  test('Graph Summary Validation ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary)).toBeEnabled();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphSummary).click();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmryheader)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmtydetails)).toBeVisible();
    await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Gphsmry_clsIcon).click();
  });

  test.only('Graph attributes Validation ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();


  });

