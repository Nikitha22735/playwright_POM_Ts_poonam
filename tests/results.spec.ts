import {test} from "@playwright/test";
import { homePage } from "../pages/homePage"
import { resultsPage } from "../pages/resultsPage";

test('validate teh results screen @e2e', async({page})=>{
    await page.goto("https://www.amazon.in/")
    const homePageObj = new homePage(page)
    const resultsPageObj = new resultsPage(page)
    homePageObj.enterProduct()
    homePageObj.clickOnSearchIcon()
    resultsPageObj.validateTheVisibilityOfResultsText()
    resultsPageObj.validateTheResultsText()
    
})