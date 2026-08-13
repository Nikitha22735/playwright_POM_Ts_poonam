import {expect, test} from "@playwright/test";
import { homePage } from "../pages/homePage"

test('verify home page @e2e', async ({ page })=>{
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    const homePageObj = new homePage(page)
    homePageObj.validateTheVisibilityOfAmazonLogo()
    homePageObj.validateTheVisibilityOfSearchbar()
})




test('verify home page 2', async ({ page })=>{
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    const homePageObj = new homePage(page)
    homePageObj.validateTheVisibilityOfAmazonLogo()
    homePageObj.validateTheVisibilityOfSearchbar()
})


test('verify home page 3', async ({ page })=>{
    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    const homePageObj = new homePage(page)
    homePageObj.validateTheVisibilityOfAmazonLogo()
    homePageObj.validateTheVisibilityOfSearchbar()
})