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

test('Design Mode to Post Test Mode --> SAD Flow', async ({ page }) => {    

            //Design Mode
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("75");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("20");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("65");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("40");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("70");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).evaluate(e => e.blur());
    var points = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_1);
    console.log(points);
    await page.waitForTimeout(2000);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await threePointPageObject.plotshaderOnGraph("Three point shader");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("85");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("45");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("75");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("35");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("95");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("35");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).evaluate(e => e.blur());
    await page.waitForTimeout(1000);
    var points1 = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_2);
    console.log(points1);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();

    await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
    await page.locator(threePointPageObject.retrieveoutput).click();
    await page.waitForTimeout(2000);

                                   //TEST Mode

    await page.locator(threePointPageObject.modedropdown).selectOption('test');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(2000);
    const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threepointshadertool);
    await (icon).click();
    await page.locator(threePointPageObject.retrieveoutput).click();
    expect (page.locator(threePointPageObject.score_area)).toHaveValue('0');
    await page.waitForTimeout(3000);
    
              
                          //PREVIEW Mode

    await page.waitForTimeout(2000);
    await page.locator(threePointPageObject.modedropdown).selectOption('preview');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(3000);
    var Qpoints = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_1);
    var Spoints = await threePointPageObject.getPolygonAttributeByLocator("points",threePointPageObject.threeShader_2);
    console.log(Qpoints); 
    console.log(Spoints);
    await page.waitForTimeout(3000);
    expect(points).toStrictEqual(Qpoints);  
    expect(points1).toStrictEqual(Spoints);

                           //PREGRADE Mode
    await page.waitForTimeout(2000);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_warning)).toBeVisible();
    const receivedwarningmsg =await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_warning).allTextContents();
    console.log(receivedwarningmsg);
    const expwarningsmsg = ["WarningAnswer is not complete"];
    expect(receivedwarningmsg).toStrictEqual(expwarningsmsg);
    await page.waitForTimeout(5000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Incomplete)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threeShader_1)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threeShader_2)).toBeHidden();

                        //POST_TEST Mode
    await page.waitForTimeout(2000);
    await page.locator(threePointPageObject.modedropdown).selectOption('review');
    await page.locator(threePointPageObject.copytoinput).click();
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Incomplete1)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threeShader_1)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.threeShader_2)).toBeHidden();
    await page.waitForTimeout(2000);
});