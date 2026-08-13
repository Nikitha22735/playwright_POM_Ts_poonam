import { Locator, Page, expect } from '@playwright/test'

export class resultsPage{
    readonly resultsTxt: Locator
    readonly firstResults: Locator
    constructor(page: Page){
       this.resultsTxt = page.getByText('Results')
       this.firstResults = page.locator("((//div[@class='a-section a-spacing-small a-spacing-top-small'])[1]//h2)[2]")
    }

    async validateTheVisibilityOfResultsText(){
        await expect(this.resultsTxt).toBeVisible()
    }

    async validateTheResultsText(){
        let title = await this.firstResults.getAttribute('aria-label')
        await expect(title).toContain("iPhone")
    }

    
   
}