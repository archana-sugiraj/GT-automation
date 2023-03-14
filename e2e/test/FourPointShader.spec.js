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
  
    //New values for x1 and y1
    const x1Pos = "20";
    const y1Pos = "75";
  
    //change the x1 and y1 in the question view form elements to the above values
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0).fill(x1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill(y1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).click();
  
    var pixX1 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cx");
    var pixY1 = await page.frameLocator(pageObject.grapfIframe).locator(fourPointPageObject.firstPointOnFourShader).getAttribute("cy");
  
    //Create an object with the pixel values to use the existing logic for converting to coordinate values
    const pix_x1y1 = { x: pixX1, y: pixY1 };
    const returnx1y1Coordinates = await threePointPageObject.PxToCo(pix_x1y1);
  
    //Compare the calculated coordinate values of x1, y1 to the input values of x1,y1
    expect(await returnx1y1Coordinates.x).toEqual(Number(x1Pos));
    expect(await returnx1y1Coordinates.y).toEqual(Number(y1Pos));
});