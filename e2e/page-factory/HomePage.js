export class PageObject {

    constructor(){
        this.loadAPI ='button:has-text("Load API Below")'
        this.questionView=''

    }
    async clickOnLoadAPIButton() {
        await page.locator(this.loadAPI).click();
      }

}
