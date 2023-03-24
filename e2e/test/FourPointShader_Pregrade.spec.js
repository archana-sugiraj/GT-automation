const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
const data = require('../testdata/data');

var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
  });

  test('Graph Summary Validation ', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourstudent_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
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

 test('Graph attributes Validation', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourstudent_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
     await page.locator(threePointPageObject.copytoinput).click();
     await pageObject.clickOnLoadAPIButton();
     await page.waitForTimeout(3000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_GraphTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_SubTitle)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Yaxis_label)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_X_axis_Label)).toBeVisible();

});

test('Success message Validation ', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourstudent_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
     await page.locator(threePointPageObject.copytoinput).click();
     await pageObject.clickOnLoadAPIButton();
     await page.waitForTimeout(3000);
     expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Success)).toBeVisible();
    const receivedsuccessmsg =await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Success).allTextContents();
    console.log(receivedsuccessmsg);
    const expsuccessmsg = ["SuccessAnswer is complete and entirely correct"];
    expect(receivedsuccessmsg).toStrictEqual(expsuccessmsg);
    await page.waitForTimeout(5000);
});

test('Validating the Text,icon,coordinates and tool in pregrade', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await page.locator(threePointPageObject.retrieveoutputtextarea).type(data.fourstudent_state);
    await page.locator(threePointPageObject.modedropdown).selectOption('sample');
     await page.locator(threePointPageObject.copytoinput).click();
     await pageObject.clickOnLoadAPIButton();
     await page.waitForTimeout(3000);
     await page.waitForLoadState("networkidle");
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.txt_Correct)).toBeVisible();
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Icon)).toBeVisible();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).toBeVisible();
    await (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.pregrade_Text)).click();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt1_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt2_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt3_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.txt_Pt4_of_4)).toBeVisible();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6)).toBeDisabled();
    expect (page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7)).toBeDisabled();
    await page.waitForTimeout(3000);
});
  
test.only('Validating the presence of Question view and solution view of 4 point shader in Pregrade mode', async ({ page }) => {
    
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
     await threePointPageObject.plotshaderOnGraph("Four Point Shader");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("30");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("40");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("80");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("40");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("70");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("30");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("70");
     await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());
     var points = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
     console.log(points);
     await page.waitForTimeout(4000);
   
 
     await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
       await threePointPageObject.clickOnOptionButton('Four Point Shader');
       await threePointPageObject.plotshaderOnGraph("Four Point Shader");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill("20");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("15");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill("15");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill("30");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("5");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("20");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill("5");
       await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());
       var points1 = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_2);
       console.log(points1);    
       await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
       await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
 await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
 await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
 await page.locator(threePointPageObject.retrieveoutput).click();
 await page.locator(threePointPageObject.modedropdown).selectOption('test');
 await page.locator(threePointPageObject.copytoinput).click();
 await pageObject.clickOnLoadAPIButton();
 await page.waitForTimeout(2000);
 const icon = page.frameLocator(threePointPageObject. whole_Iframe).locator(fourPointPageObject.fourpointshadertool);
 await (icon).click();
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(0).fill('20');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(1).fill('15');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(2).fill('30');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(3).fill('15');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(4).fill('30');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(5).fill('5');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(6).fill('20');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.XYinput_Box).nth(7).fill('5');
 await page.frameLocator(threePointPageObject. whole_Iframe).locator(threePointPageObject.btn_done).click();
 await page.locator(threePointPageObject.retrieveoutput).click();
 await page.locator(threePointPageObject.modedropdown).selectOption('review');
 await page.locator(threePointPageObject.copytoinput).click();
 await pageObject.clickOnLoadAPIButton();
 await page.waitForTimeout(3000);
 var Qpoints = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
 var Spoints = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_2);
 console.log(Qpoints); 
 console.log(Spoints);
 await page.waitForTimeout(3000);
 expect(points).toStrictEqual(Qpoints);  
 expect(points1).toStrictEqual(Spoints);  
 });
 

