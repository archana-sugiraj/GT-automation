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
 
 
test('Check for the presence of 3 point shader', async ({ page }) => {
     await pageObject.launchApplication(environment.baseUrl);
     await pageObject.clickOnLoadAPIButton();
     await threePointPageObject.clickOnOptionButton('Three point shader');
     await pageObject.plotshaderOnGraph("Three point shader");
     expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader)).toBeVisible();
     expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.secondPointOnThreeShader)).toBeVisible();
     expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.threePointOnThreeShader)).toBeVisible();
  
  });
     
test('Check for different style of 3 point shader', async ({ page }) => {
    
     await pageObject.launchApplication(environment.baseUrl);
     await pageObject.clickOnLoadAPIButton();
     await threePointPageObject.clickOnOptionButton('Three point shader');
     await pageObject.plotshaderOnGraph("Three point shader");
     expect(await threePointPageObject.getPolygonAttribute("stroke-dasharray")).toBeNull();
     await threePointPageObject.selectStyle("Dashed");
     expect(await threePointPageObject.getPolygonAttribute("stroke-dasharray")).toEqual("6,2");
     await threePointPageObject.selectStyle("Dotted");
     expect(await threePointPageObject.getPolygonAttribute("stroke-dasharray")).toEqual("0,4")
});


test("Check for different width of 3 point shader", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await pageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await threePointPageObject.selectButtonByText("None");
    expect(await threePointPageObject.getPolygonAttribute("stroke-width")).toEqual("0");
    await threePointPageObject.selectButtonByText("2px");
    expect(await threePointPageObject.getPolygonAttribute("stroke-width")).toEqual("2");
    await threePointPageObject.selectButtonByText("3px");
    expect(await threePointPageObject.getPolygonAttribute("stroke-width")).toEqual("3");
  });

  test("Check for the coordinates of 3 point shader", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await pageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
  
    var points = await threePointPageObject.getPolygonAttribute("points");
    var pointsArr = points.split(" ");
    
    var x1 = pointsArr[0].split(",")[0];
    var y1 = pointsArr[0].split(",")[1];
  
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader).getAttribute("cx")).toEqual(x1);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader).getAttribute("cy")).toEqual(y1);
  
    var x2 = pointsArr[1].split(",")[0];
    var y2 = pointsArr[1].split(",")[1];
    
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.secondPointOnThreeShader).getAttribute("cx")).toEqual(x2);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.secondPointOnThreeShader).getAttribute("cy")).toEqual(y2);
  
    var x3 = pointsArr[2].split(",")[0];
    var y3 = pointsArr[2].split(",")[1];
  
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.threePointOnThreeShader).getAttribute("cx")).toEqual(x3);
    expect(await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.threePointOnThreeShader).getAttribute("cy")).toEqual(y3);
  
  });

  test.only("Check for the coordinates after changing x1,y1 values in 3 point shader", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await pageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
  
    //New values for x1 and y1
    const x1Pos = "60";
    const y1Pos = "55";
  
    //change the x1 and y1 in the question view form elements to the above values
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill(x1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill(y1Pos);
  
    //shift the focus to next elements to amend the changes in the graph
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).click();
  
    //Get the pixel values of first coordinate of x1, y1
    var pixX1 = await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader).getAttribute("cx");
    var pixY1 = await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.firstPointOnThreeShader).getAttribute("cy");
  
    //Create an object with the pixel values to use the existing logic for converting to coordinate values
    const pix_x1y1 = { x: pixX1, y: pixY1 };
    const returnx1y1Coordinates = await threePointPageObject.PxToCo(pix_x1y1);
  
    //Compare the calculated coordinate values of x1, y1 to the input values of x1,y1
    expect(await returnx1y1Coordinates.x).toEqual(Number(x1Pos));
    expect(await returnx1y1Coordinates.y).toEqual(Number(y1Pos));
  
    
  
  });
  
  
  
  
  
  test('Check for BOLD Appearance of 3 point shader Text', async ({ page }) => {
     await pageObject.launchApplication(environment.baseUrl);
     await pageObject.clickOnLoadAPIButton();
     await threePointPageObject.clickOnOptionButton('Three point shader');
     await pageObject.plotshaderOnGraph("Three point shader");
     const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
     const originalText =await bothIframes.locator(threePointPageObject.tinymce).allTextContents();
     await bothIframes.locator(threePointPageObject.tinymce).selectText();
     await threePointPageObject.selectButtonById("mceu_0-button");
     const originalTextAfterBold =await bothIframes.locator(threePointPageObject.tinymce).innerHTML();
     expect(originalTextAfterBold).toEqual("<strong>" + originalText + "</strong>");
  });

  test('Check for ITALIC Appearance of 3 point shader Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
    const originalText =await bothIframes.locator(threePointPageObject.tinymce).allTextContents();
    await bothIframes.locator(threePointPageObject.tinymce).selectText();
    await threePointPageObject.selectButtonById("mceu_1-button");
    const originalTextAfterItalic =await bothIframes.locator(threePointPageObject.tinymce).innerHTML();
    expect(originalTextAfterItalic).toEqual("<em>" + originalText + "</em>");
 });

 test('Check for Subscript Appearance of 3 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Three point shader');
  await pageObject.plotshaderOnGraph("Three point shader");
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  const originalText =await bothIframes.locator(threePointPageObject.tinymce).allTextContents();
  await bothIframes.locator(threePointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_2-button");
  const originalTextAfterSubscript =await bothIframes.locator(threePointPageObject.tinymce).innerHTML();
  expect(originalTextAfterSubscript).toEqual("<sub>" + originalText + "</sub>");
});

test('Check for Superscript Appearance of 3 point shader Text', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Three point shader');
  await pageObject.plotshaderOnGraph("Three point shader");
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
  const originalText =await bothIframes.locator(threePointPageObject.tinymce).allTextContents();
  await bothIframes.locator(threePointPageObject.tinymce).selectText();
  await threePointPageObject.selectButtonById("mceu_3-button");
  const originalTextAfterSuperscript =await bothIframes.locator(threePointPageObject.tinymce).innerHTML();
  expect(originalTextAfterSuperscript).toEqual("<sup>" + originalText + "</sup>");
});

test('Check for switching to Solution View', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Three point shader');
  await pageObject.plotshaderOnGraph("Three point shader");
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
  
});

test('Plotting 3 point shader on Solution View', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Three point shader');
  await pageObject.plotshaderOnGraph("Three point shader");
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
  await threePointPageObject.clickOnOptionButton('Three point shader');
  await pageObject.plotshaderOnGraph("Three point shader");
  await page.waitForTimeout(5000);
  
});



test('Check for the presence of exact 3 point shader in Solution View', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    var pointsonquestionview = await threePointPageObject.getPolygonAttribute("points");
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    var pointsonsolutionview = await threePointPageObject.getPolygonAttribute("points");
    expect(pointsonquestionview).toStrictEqual(pointsonsolutionview);   
});

test.only('plotting 3 point shader in Solution View', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
    await page.waitForTimeout(5000);
    await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
    //await page.waitForTimeout(5000);
    await threePointPageObject.clickOnOptionButton('Three point shader');
    await pageObject.plotshaderOnGraph("Three point shader");
});



    


   


