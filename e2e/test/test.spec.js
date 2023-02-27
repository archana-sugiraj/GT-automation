const { test, expect,page } = require('@playwright/test');
import { globalSetup } from "../global-setup/globalSetup.js";
import{ ThreePointPageObject} from '../page-factory/test';

var environment =globalSetup();
var threePointPageObject;

test.beforeEach(async ({ page }) => {
   
   threePointPageObject = new ThreePointPageObject(page);
  });



test('plotting 3 point shader in Solution View', async ({ page }) => {
    await ThreePointPageObject.launchApplication(environment.baseUrl);
    await ThreePointPageObject.clickOnLoadAPIButton();
    await ThreePointPageObject.clickOnOptionButton('Three point shader');
    await ThreePointPageObject.plotshaderOnGraph("Three point shader");
});
