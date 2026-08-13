import { Locator, Page, expect } from '@playwright/test'

export class homePage{
    readonly amazonLogo:Locator
    readonly searchBox:Locator
    readonly searchIcon:Locator
    constructor(page: Page){
        this.amazonLogo = page.locator('[aria-label="Amazon.in"]')
        this.searchBox = page.locator('input#twotabsearchtextbox')
        this.searchIcon = page.locator('#nav-search-submit-button')
    }

    async validateTheVisibilityOfAmazonLogo(){
        await expect(this.amazonLogo).toBeVisible()
    }

     async validateTheVisibilityOfSearchbar(){
        await expect(this.searchBox).toBeVisible()
    }

    async enterProduct(){
        this.searchBox.fill("iphone")
    }

    async clickOnSearchIcon(){
        this.searchIcon.click()
    }
   
}