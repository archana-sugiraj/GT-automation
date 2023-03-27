const { test, expect, Page } = require("@playwright/test");

export class CurvyProductionPageObject {

    loadAPI = 'button:has-text("Load API Below")';
    grapfIframe = 'iframe[name="ext_012345678_1"]'; 
    firstPointonCurvy = '//*[@data-automation-id="CurvyPP_1_Point_0"]';
    secondPointonCurvy = '//*[@data-automation-id="CurvyPP_1_Point_1"]';
    
}