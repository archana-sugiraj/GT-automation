const { test, expect, Page } = require("@playwright/test");

export class CurvyProductionPageObject {

    loadAPI = 'button:has-text("Load API Below")';
    grapfIframe = 'iframe[name="ext_012345678_1"]'; 
    firstPointonCurvy = '//*[@data-automation-id="CurvyPP_1_Point_0"]';
    secondPointonCurvy = '//*[@data-automation-id="CurvyPP_1_Point_1"]';
    curve_Whole = ' //*[@data-automation-id="CurvyPP_1"]';
    PPC_Heading = '//h3[text()="PPC states:"]';
    Qview = '//h4[text()="Question View"]';
    Sview = '//h4[text()="Solution View"]';
    footPrint = "//span[text()=' Show FootPrint ']";
    curve2_Whole = '//*[@data-automation-id="CurvyPP_2"]';
    curve_footprint = '.gt-footprint';
    curvetext_Test  =  "//span[text()='Curve production possibility 2']";
    curvetext_btn = '//*[@data-automation-id="CurvyPP_2_item"]';
    curvetext_icon = '#CurvyProductionPossibility-icon';
    txt_Pt1_of_2 = "//label[text()=' Point 1 of 2']";
    txt_Pt2_of_2 = "//label[text()=' Point 2 of 2']";
    txt_X = "//label[text()='x']";
    txt_Y = "//label[text()='y']";
    txt_coordinate = "//label[text()='Coordinate']";
    txt_coordinatebefore = "//label[text()='Before']";
    txt_coordinateafter = "//label[text()='After']";

}