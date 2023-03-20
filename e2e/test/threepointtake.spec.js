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

  test('Launching 3 point shader in test mode using the state', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(5000);   

  });

  test('Check for the presence of Tools in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Tools)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the presence of Undo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the  Disabled Undo in test mode ', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_undo)).toBeDisabled();
    await page.waitForTimeout(5000);  
  });

  test('Check for the presence of Redo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the Disabled Redo in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Redo)).toBeDisabled();
    await page.waitForTimeout(5000);  
  });

  test('Check for the presence of Reset in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeVisible();
    await page.waitForTimeout(5000);  
  });

  test('Check for the Disabled Reset in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Reset)).toBeDisabled();
    await page.waitForTimeout(5000);  
  });

  test.only('Check for 3 point shader tool  in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threepointshadertool)).toBeVisible();
    await page.waitForTimeout(15000);  
  });

  test('Check for 3 point shader tool icon in test mode', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.author_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threepointshadertool);
    expect (icon.locator(threePointPageObject.threepointshadertoolicon)).toBeVisible();
    await page.waitForTimeout(5000);  
  });