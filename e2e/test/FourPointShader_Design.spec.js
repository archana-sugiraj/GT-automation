const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';


var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
  });

  test('Plotting a 4 point shader in question view and Check for its presence', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
    await page.waitForTimeout(6000);
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader)).toBeVisible();
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader)).toBeVisible();
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader)).toBeVisible();
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader)).toBeVisible();
 });

 test('Check for switching to Solution View', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
});

test('Check for the presence of exact question view 4 point shader in Solution View ', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
    var pointsonquestionview = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    var pointsonsolutionview = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
    expect(pointsonquestionview).toStrictEqual(pointsonsolutionview);   
});

test('plotting a 4 point shader in Solution View and check for its presence', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
      await pageObject.clickOnLoadAPIButton();
      await threePointPageObject.clickOnOptionButton('Four Point Shader');
      await threePointPageObject.plotshaderOnGraph("Four Point Shader");
      await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
      //await page.waitForTimeout(5000);
      await threePointPageObject.clickOnOptionButton('Four Point Shader');
      await threePointPageObject.plotshaderOnGraph("Four Point Shader");
      expect(page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader_2)).toBeVisible();
      expect(page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader_2)).toBeVisible();
      expect(page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader_2)).toBeVisible();
      expect(page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader_2)).toBeVisible();
  });

  test("Check for the coordinates of 4 point shader", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  
    var points = await threePointPageObject.getPolygonAttributeByLocator("points",fourPointPageObject.fourShader_1);
    var pointsArr = points.split(" ");
    
    var x1 = pointsArr[0].split(",")[0];
    var y1 = pointsArr[0].split(",")[1];
  
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cx")).toEqual(x1);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cy")).toEqual(y1);
    var x2 = pointsArr[1].split(",")[0];
    var y2 = pointsArr[1].split(",")[1];
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader).getAttribute("cx")).toEqual(x2);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader).getAttribute("cy")).toEqual(y2);
  
    var x3 = pointsArr[2].split(",")[0];
    var y3 = pointsArr[2].split(",")[1];
  
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader).getAttribute("cx")).toEqual(x3);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader).getAttribute("cy")).toEqual(y3);
  
    var x4 = pointsArr[3].split(",")[0];
    var y4 = pointsArr[3].split(",")[1];
  
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader).getAttribute("cx")).toEqual(x4);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader).getAttribute("cy")).toEqual(y4);
  
  });


  test("Check for the coordinates after changing x,y values in the right panel", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Four Point Shader');
    await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  
    //New values for x and y
    const x1Pos = "20";
    const y1Pos = "75";
    const x2Pos = "10";
    const y2Pos = "25";
    const x3Pos = "30";
    const y3Pos = "65";
    const x4Pos = "40";
    const y4Pos = "55";

    //change the x and y in the question view form elements to the above values
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill(x1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill(y1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill(x2Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3).fill(y2Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4).fill(x3Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill(y3Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill(x4Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).fill(y4Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7).evaluate(e => e.blur());

  
    var pixX1 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cx");
    var pixY1 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cy");
  
    //Create an object with the pixel values to use the existing logic for converting to coordinate values
    const pix_x1y1 = { x: pixX1, y: pixY1 };
    const returnx1y1Coordinates = await threePointPageObject.PxToCo(pix_x1y1);
  
    //Compare the calculated coordinate values of x1, y1 to the input values of x1,y1
    expect(await returnx1y1Coordinates.x).toEqual(Number(x1Pos));
    expect(await returnx1y1Coordinates.y).toEqual(Number(y1Pos));

    var pixX2 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader).getAttribute("cx");
    var pixY2 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.secondPointOnFourShader).getAttribute("cy");
    const pix_x2y2 = { x: pixX2, y: pixY2 };
    const returnx2y2Coordinates = await threePointPageObject.PxToCo(pix_x2y2);
    expect(await returnx2y2Coordinates.x).toEqual(Number(x2Pos));
    expect(await returnx2y2Coordinates.y).toEqual(Number(y2Pos));

    var pixX3 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader).getAttribute("cx");
    var pixY3 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.threePointOnFourShader).getAttribute("cy");
    const pix_x3y3 = { x: pixX3, y: pixY3 };
    const returnx3y3Coordinates = await threePointPageObject.PxToCo(pix_x3y3);
    expect(await returnx3y3Coordinates.x).toEqual(Number(x3Pos));
    expect(await returnx3y3Coordinates.y).toEqual(Number(y3Pos));


    var pixX4 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader).getAttribute("cx");
    var pixY4 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.fourPointOnFourShader).getAttribute("cy");
    const pix_x4y4 = { x: pixX4, y: pixY4 };
    const returnx4y4Coordinates = await threePointPageObject.PxToCo(pix_x4y4);
    expect(await returnx4y4Coordinates.x).toEqual(Number(x4Pos));
    expect(await returnx4y4Coordinates.y).toEqual(Number(y4Pos));

});

test('Check for different style of 4 point shader', async ({ page }) => {    
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",fourPointPageObject.fourShader_1)).toBeNull();
  await threePointPageObject.selectStyle("Dashed");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",fourPointPageObject.fourShader_1)).toEqual("6,2");
  await threePointPageObject.selectStyle("Dotted");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",fourPointPageObject.fourShader_1)).toEqual("0,4")
});

test('Check for different Width of 4 point shader', async ({ page }) => {    
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await threePointPageObject.selectButtonByText("None");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",fourPointPageObject.fourShader_1)).toEqual("0");
  await threePointPageObject.selectButtonByText("2px");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",fourPointPageObject.fourShader_1)).toEqual("2");
  await threePointPageObject.selectButtonByText("3px");
  expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",fourPointPageObject.fourShader_1)).toEqual("3")
});

test("Check for the appearance of color palette of 4 point shader", async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.colordropdown).nth(2).click();
  await page.waitForTimeout(3000);
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.color_close).nth(3).click();
  await page.waitForTimeout(5000); 
 });

 test("Check for ShowHide button of 4 point shader", async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.waitForTimeout(5000);
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.showHide).nth(4).click();
  await page.waitForTimeout(5000);
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.showHide).nth(4).click();  
  await page.waitForTimeout(5000);  
 });

 test('Check for BOLD Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await page.waitForLoadState("networkidle");
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.waitForTimeout(2000);
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  await page.waitForTimeout(2000);
  const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
  await page.waitForTimeout(2000);
  await bothIframes.locator(fourPointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_0-button");
  await page.waitForTimeout(3000);
  const originalTextAfterBold =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
  expect(originalTextAfterBold).toEqual("<strong>" + originalText + "</strong>");
});

test('Check for ITALIC Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await page.waitForLoadState("networkidle");
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
  await bothIframes.locator(fourPointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_1-button");
  const originalTextAfterItalic =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
  expect(originalTextAfterItalic).toEqual("<em>" + originalText + "</em>");
});

test('Check for Subscript Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await page.waitForLoadState("networkidle");
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
  await bothIframes.locator(fourPointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_2-button");
  const originalTextAfterSub = await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
  expect(originalTextAfterSub).toEqual("<sub>" + originalText + "</sub>");
});

test('Check for Superscript Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await page.waitForLoadState("networkidle");
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
  await bothIframes.locator(fourPointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_3-button");
  const originalTextAfterItalic =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
  expect(originalTextAfterItalic).toEqual("<sup>" + originalText + "</sup>");
});

test('Check for Special character Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
  expect (bothIframes).toBeVisible();
  await bothIframes.click();
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
});

test('Check for Currency character Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
  await bothIframes.click();
  const currencycharacters=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.currencytab);
  expect (currencycharacters).toBeVisible();  
  await currencycharacters.click();
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
});

test('Check for Math Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
  await bothIframes.click();
  const mathSymbols=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.mathtab);
  expect (mathSymbols).toBeVisible();
  await mathSymbols.click();  
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
});

test('Check for Greek Appearance of 4 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
  await bothIframes.click();
  const greeksymbols=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.greektab);
  expect (greeksymbols).toBeVisible();  
  await greeksymbols.click();
  await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
});

test('Check for the alert message when the coordinates are out of range', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill('101');
  var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
  expect(helpMsg[0]).toEqual('You have entered a coordinate that exists outside the graphing area.');
});

test('Check for the alert message when the coordinates are null', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill('');
  var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
  expect(helpMsg[0]).toEqual('Please enter a value.');
});

test('Check for the alert message when the coordinates are less than 0', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Four Point Shader');
  await threePointPageObject.plotshaderOnGraph("Four Point Shader");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill('-4');
  var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
  expect(helpMsg[0]).toEqual('The value entered is less than the minimum coordinate system value.');
});








