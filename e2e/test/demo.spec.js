const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import{ PageObject} from '../page-factory/page'

var environment =globalSetup();
var pageObject;

test.beforeEach(async ({ page }) => {
  pageObject =  new PageObject(page);
})

test('test', async ({ page }) => {

  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await pageObject.clickOnOptionButton("Line");
  await pageObject.potLineOnGraph("line");
  await page.waitForTimeout(6000);
  await pageObject.clickOnDoneButton();
  await page.waitForTimeout(6000);


  for(let i=1;i<=3;i++){
    await pageObject.selectWidth(`${i}px`);
    expect(await pageObject.getLineAttribute("stroke-width")).toEqual(`${i}`);
  }

  await pageObject.selectStyle("Solid");
  expect(await pageObject.getLineAttribute("stroke-dasharray")).toBeNull();

  await pageObject.selectStyle("Dashed");
  expect(await pageObject.getLineAttribute("stroke-dasharray")).toEqual("4,4");

  await pageObject.selectStyle("Dotted");
  expect(await pageObject.getLineAttribute("stroke-dasharray")).toEqual("0,4");
  await page.waitForTimeout(5000);
  await pageObject.sendValueToIdentifier();
  await pageObject.selectIdentifierText();
  await pageObject.selectIdentifier("Bold");
  await pageObject.selectIdentifier("Italic");
  await pageObject.selectIdentifier("Subscript");
  await page.waitForLoadState();

  expect(await pageObject.validateSubScriptText()).toEqual('Line 1');
  await pageObject.selectIdentifier("Superscript");
  expect(await pageObject.validateSuperScriptText()).toEqual('Line 1');
await pageObject.clickOnsolutionview();

  await pageObject.clickOnOptionButton("Line");
  await pageObject.potLineOnGraph('Solution');
  await pageObject.clickOnDoneButton();

  await pageObject.clickDrawToggle();
  await pageObject.clickhint();
  await pageObject.dropdowncompare('45');
  await pageObject.clickOnTabPanel();

  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint).getAttribute("cx")).toEqual("312");
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint).getAttribute("cy")).toEqual("410");
  await pageObject.clickOnVerticalCheckBox()
  //await page.frameLocator(pageObject.grapfIframe).locator('span:has-text("V.Int")').click();
  await page.frameLocator(pageObject.grapfIframe).locator('text=V.Intcomparison Dropdown= >> input[type="number"]').fill('60');
  //await page.frameLocator(pageObject.grapfIframe).locator('div[role="tabpanel"] div:has-text("0 10 20 30 40 50 60 70 80 90 100 10 20 30 40 50 60 70 80 90 100")').nth(2).click();
  await pageObject.clickOnTabPanel();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint_0).getAttribute("cx")).toEqual("150");
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint_0).getAttribute("cy")).toEqual("194");
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.slopeButton).first().isDisabled()).toBeTruthy();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.verticalCheckBox).isDisabled()).toBeTruthy();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.HorizonatalCheckBox).isDisabled()).toBeTruthy();
  await page.frameLocator(pageObject.grapfIframe).locator(pageObject.hint).click();
  await page.frameLocator(pageObject.grapfIframe).locator(pageObject.slopeButton).first().click();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.verticalCheckBox).isDisabled()).toBeTruthy();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.HorizonatalCheckBox).isEnabled()).toBeTruthy();
  await page.frameLocator(pageObject.grapfIframe).locator(pageObject.positiveSlope).click();
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint).getAttribute("cx")).toEqual("294");
  expect(await page.frameLocator(pageObject.grapfIframe).locator(pageObject.linetopoint).getAttribute("cy")).toEqual("50");
 
});
