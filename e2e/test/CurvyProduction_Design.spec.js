const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import { PageObject } from '../page-factory/page';
import{ ThreePointPageObject} from '../page-factory/threePointShader';
import{ FourPointPageObject} from '../page-factory/fourPointShader';
import{ CurvyProductionPageObject} from '../page-factory/curvyproduction';


var environment =globalSetup();
var pageObject;
var threePointPageObject;
var fourPointPageObject;
var curvyProductionPageObject;

test.beforeEach(async ({ page }) => {
   pageObject = new PageObject(page);
   threePointPageObject = new ThreePointPageObject(page);
   fourPointPageObject = new FourPointPageObject(page);
   curvyProductionPageObject = new CurvyProductionPageObject(page);
  });

  test('Plotting a Curvy Production Possibility in question view and Check for its presence', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.firstPointonCurvy)).toBeVisible();
    expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.secondPointonCurvy)).toBeVisible();

  });  

  test('Plotting a Curvy Production Possibility and check it is plotted with only two points', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);    
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeVisible();
    await page.waitForTimeout(3000);
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toBeHidden();
  });
    
  test('Plotting a Curvy Production Possibility and check for the status of XY coordinates input box', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);    
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeDisabled();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toHaveValue('0');
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeEnabled();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeEnabled();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeVisible();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeDisabled();
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toHaveValue('0');
    expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toBeHidden();
  });

  test('Check for BOLD Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(2000);
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
    await page.waitForTimeout(2000);
    const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
    await page.waitForTimeout(2000);
    await bothIframes.locator(fourPointPageObject.tinymce).selectText();
    await threePointPageObject.selectButtonById("mceu_0-button");
    await page.waitForTimeout(3000);
    const originalTextAfterBold =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
    expect(originalTextAfterBold).toEqual("<strong>" + originalText + "</strong>");
  });
  
  test('Check for ITALIC Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(2000);
    const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
    const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
    await page.waitForTimeout(2000);
    await bothIframes.locator(fourPointPageObject.tinymce).selectText();
    await page.waitForTimeout(2000);
    await threePointPageObject.selectButtonById("mceu_1-button");
    const originalTextAfterItalic =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
    expect(originalTextAfterItalic).toEqual("<em>" + originalText + "</em>");
  });
  
  test('Check for Subscript Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(2000);
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
    const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
    await page.waitForTimeout(2000);
    await bothIframes.locator(fourPointPageObject.tinymce).selectText();
    await page.waitForTimeout(2000);
    await threePointPageObject.selectButtonById("mceu_2-button");
    const originalTextAfterSub = await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
    expect(originalTextAfterSub).toEqual("<sub>" + originalText + "</sub>");
  });
  
  test('Check for Superscript Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await page.waitForLoadState("networkidle");
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(2000);
    const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
    await page.waitForTimeout(2000);
    const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
    await page.waitForTimeout(2000);
    await bothIframes.locator(fourPointPageObject.tinymce).selectText();
    await threePointPageObject.selectButtonById("mceu_3-button");
    const originalTextAfterItalic =await bothIframes.locator(fourPointPageObject.tinymce).innerHTML();
    expect(originalTextAfterItalic).toEqual("<sup>" + originalText + "</sup>");
  });
  
  test('Check for Special character Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await page.waitForTimeout(2000);
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
    await page.waitForTimeout(2000);
    expect (bothIframes).toBeVisible();
    await bothIframes.click();
    await page.waitForTimeout(2000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
  });
  
  test('Check for Currency character Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
    await bothIframes.click();
    const currencycharacters=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.currencytab);
    expect (currencycharacters).toBeVisible();  
    await currencycharacters.click();
    await page.waitForTimeout(3000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
  });
  
  test('Check for Math Appearance of CPP Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
    await bothIframes.click();
    const mathSymbols=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.mathtab);
    expect (mathSymbols).toBeVisible();
    await mathSymbols.click();  
    await page.waitForTimeout(3000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
  });
  
  test('Check for Greek Appearance of 4 point shader Text', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    const bothIframes=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splCharPopupButton);
    await bothIframes.click();
    await page.waitForTimeout(3000);
    const greeksymbols=page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.greektab);
    expect (greeksymbols).toBeVisible();  
    await greeksymbols.click();
    await page.waitForTimeout(3000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.splchr_close).click();
  });
  
  test('Check for the alert message when the coordinates are out of range', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill('101');
    var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
    expect(helpMsg[0]).toEqual('You have entered a coordinate that exists outside the graphing area.');
  });
  
  test('Check for the alert message when the coordinates are null', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill('');
    var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
    expect(helpMsg[0]).toEqual('Please enter a value.');
    await page.waitForTimeout(3000);
  });
  
  test('Check for the alert message when the coordinates are less than 0', async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill('-4');
    var helpMsg = await page.frameLocator(pageObject.grapfIframe).locator("#help-block-null").allTextContents();
    expect(helpMsg[0]).toEqual('The value entered is less than the minimum coordinate system value.');
    await page.waitForTimeout(3000);
  });

  test("Check for ShowHide button of CPP", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(5000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.showHide).nth(4).click();
    await page.waitForTimeout(5000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.showHide).nth(4).click();  
    await page.waitForTimeout(5000);  
   });

   test("Check for the appearance of color palette of CPP", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.colordropdown).nth(2).click();
    await page.waitForTimeout(3000);
    await page.frameLocator(threePointPageObject.whole_Iframe).locator(threePointPageObject.color_close).nth(3).click();
    await page.waitForTimeout(5000); 
   });

   test("Check for CPP Coordinates if it matches with the pixel values ", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    var cpoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
    await page.waitForTimeout(3000);
    console.log(cpoints);
    var pointsArr = cpoints.split(" ");
    var sx = pointsArr[0];
    var y1 = pointsArr[1];
    var x1 = sx.slice(1,sx.length);
    console.log(x1);   
    console.log(y1);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cx")).toEqual(x1);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cy")).toEqual(y1);
    var x2 = pointsArr[4];
    var y2 = pointsArr[5];
    console.log(x2);
    console.log(y2);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cx")).toEqual(x2);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cy")).toEqual(y2);
    var sr = pointsArr[2];
    var r1 = sr.slice(1,sr.length);
    var r2 = pointsArr[3];
    console.log(r1);
    console.log(r2);
    expect(r1).toStrictEqual(x2);
    expect(r2).toStrictEqual(y1);
    console.log("after editing");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).evaluate(e => e.blur());
    var cpoints1 = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
    await page.waitForTimeout(3000);
    console.log(cpoints1);
    var pointsArr1 = cpoints1.split(" ");
    var s1x = pointsArr1[0];
    var y11 = pointsArr1[1];
    var x11 = s1x.slice(1,s1x.length);
    console.log(x11);   
    console.log(y11);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cx")).toEqual(x11);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cy")).toEqual(y11);
    var x22 = pointsArr1[4];
    var y22 = pointsArr1[5];
    console.log(x22);
    console.log(y22);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cx")).toEqual(x22);
    expect(await page.frameLocator(threePointPageObject.whole_Iframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cy")).toEqual(y22);
    var s1r = pointsArr1[2];
    var r11 = s1r.slice(1,s1r.length);
    var r22 = pointsArr1[3];
    console.log(r11);
    console.log(r22);
    expect(r11).toStrictEqual(x22);
    expect(r22).toStrictEqual(y11);
   

   });

   test("Check for the coordinates after changing x,y values in the right panel ", async ({ page }) => {
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    await page.waitForTimeout(3000);
    const x1Pos = "0";
    const y1Pos = "20";
    const x2Pos = "45";
    const y2Pos = "0";
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill(y1Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill(x2Pos);
    await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).evaluate(e => e.blur());
    await page.waitForTimeout(3000);

    var pixX1 = await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cx");
    var pixY1 = await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.firstPointonCurvy).getAttribute("cy");
    const pix_x1y1 = { x: pixX1, y: pixY1 };
    const returnx1y1Coordinates = await threePointPageObject.PxToCo(pix_x1y1);
    expect(await returnx1y1Coordinates.x).toEqual(Number(x1Pos));
    expect(await returnx1y1Coordinates.y).toEqual(Number(y1Pos));

    var pixX2 = await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cx");
    var pixY2 = await page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.secondPointonCurvy).getAttribute("cy");
    const pix_x2y2 = { x: pixX2, y: pixY2 };
    const returnx2y2Coordinates = await threePointPageObject.PxToCo(pix_x2y2);
    expect(await returnx2y2Coordinates.x).toEqual(Number(x2Pos));
    expect(await returnx2y2Coordinates.y).toEqual(Number(y2Pos));
       
   });

   test('Check for different style of CPP', async ({ page }) => {    
    await pageObject.launchApplication(environment.baseUrl);
    await pageObject.clickOnLoadAPIButton();
    await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
    await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
    expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Whole)).toBeNull();
    await threePointPageObject.selectStyle("Dashed");
    expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Whole)).toEqual("4,4");
    await threePointPageObject.selectStyle("Dotted");
    expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-dasharray",curvyProductionPageObject.curve_Whole)).toEqual("0,4")
});


test("Check for different width of CPP", async ({ page }) => {
   await pageObject.launchApplication(environment.baseUrl);
   await pageObject.clickOnLoadAPIButton();
   await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
   await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
   await threePointPageObject.selectButtonByText("1px");
   expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Whole)).toEqual("1");
   await threePointPageObject.selectButtonByText("2px");
   expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Whole)).toEqual("2");
   await threePointPageObject.selectButtonByText("3px");
   expect(await threePointPageObject.getPolygonAttributeByLocator("stroke-width",curvyProductionPageObject.curve_Whole)).toEqual("3");
 });

 test('Plotting a CPP in question view and switching to solution and check for the presence of same CPP', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
  await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.PPC_Heading)).toBeVisible();
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.Qview)).toBeVisible();
  var qpoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
  console.log(qpoints);
  await page.waitForTimeout(3000);
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
  var spoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
  console.log(spoints);
  expect (qpoints).toStrictEqual(spoints);
  await page.waitForTimeout(2000);  
}); 

test('Plotting  CPP in both question and solution view and validating the input boxes/Foot print and the presence of CPPs', async ({ page }) => {
  await pageObject.launchApplication(environment.baseUrl);
  await pageObject.clickOnLoadAPIButton();
  await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
  await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("30");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("30");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).evaluate(e => e.blur());
  await threePointPageObject.selectStyle("Dashed");
  await threePointPageObject.selectButtonByText("2px");
  const bothIframes=page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(threePointPageObject.text_Iframe);
      const originalText =await bothIframes.locator(fourPointPageObject.tinymce).allTextContents();
      await bothIframes.locator(fourPointPageObject.tinymce).selectText();
      await page.waitForTimeout(3000);
      await threePointPageObject.selectButtonById("mceu_1-button");
  var qpoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
  console.log(qpoints);
  await page.waitForTimeout(3000);
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.solutionviewtab).click(); 
  var spoints = await threePointPageObject.getPolygonAttributeByLocator("d",curvyProductionPageObject.curve_Whole);
  console.log(spoints);
  expect (qpoints).toStrictEqual(spoints);
  await page.waitForTimeout(2000);
  await threePointPageObject.clickOnOptionButton('Curvy Production Possibility');
  await threePointPageObject.plotshaderOnGraph("Curvy Production Possibility");
  await page.waitForTimeout(3000);
  await threePointPageObject.selectStyle("Dashed");
      await threePointPageObject.selectButtonByText("2px");
      await page.waitForTimeout(3000);
      // const bothIframes1 = await page.frameLocator(threePointPageObject. whole_Iframe).frameLocator(curvyProductionPageObject.tinymce1);
      // await page.waitForTimeout(3000);
      // const originalTt1 = await bothIframes1.locator(curvyProductionPageObject.tinymce).allTextContents();
      // await bothIframes1.locator(curvyProductionPageObject.tinymce).selectText();
      // await page.waitForTimeout(3000);
      // await threePointPageObject.selectButtonById("mceu_1-button");
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.PPC_Heading)).toBeVisible();
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.Qview)).toBeVisible();
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.Sview)).toBeVisible();
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.footPrint)).toBeVisible();
  expect(page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.footPrint).isChecked()).toBeTruthy();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toBeDisabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).toBeEnabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).toBeEnabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toBeDisabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toBeDisabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5)).toBeEnabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6)).toBeEnabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7)).toBeDisabled();
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(0)).toHaveValue("0");
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(3)).toHaveValue("0");
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(4)).toHaveValue("0");
  await expect(page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(7)).toHaveValue("0");  
  await page.waitForTimeout(3000);
  var b1 = await (page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1)).inputValue();
  var b2 = await (page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2)).inputValue();
  var b3 = await (page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5)).inputValue();
  var b4 = await (page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6)).inputValue();
  expect(b1).toStrictEqual(b3);
  expect(b2).toStrictEqual(b4);
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(1).fill("80");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(2).fill("80");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(5).fill("90");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).fill("90");
  await page.frameLocator(pageObject.grapfIframe).locator('.form-control').nth(6).evaluate(e => e.blur());
  
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Whole)).toBeVisible();
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Sol)).toBeVisible();
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Footprint)).toBeVisible();
  await page.frameLocator(fourPointPageObject.grapfIframe).locator(curvyProductionPageObject.footPrint).click();
  await page.waitForTimeout(2000);
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Whole)).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Sol)).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(page.frameLocator(pageObject.grapfIframe).locator(curvyProductionPageObject.curve_Footprint)).toBeHidden();
  await page.waitForTimeout(2000);
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.closebutton).nth(0).click();
  await page.frameLocator('iframe[name="ext_012345678_1"]').locator('text=accordion-closeGraph Description >> button').click();
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.link_Generate).click();
  await page.frameLocator(pageObject.grapfIframe).locator(threePointPageObject.btn_Save).click();
  await page.locator(threePointPageObject.retrieveoutput).click();
  await page.waitForTimeout(8000);


});





  



  




 

