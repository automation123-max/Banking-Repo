// import {test,expect} from "@playwright/test"
// import { title } from "node:process"
//test("newtabs", async({browser})=>{
    //creating multi tabs manually
    //let context=await browser.newContext()
    // let page1=await context.newPage()
    // await page1.goto("https://www.amazon.in/")
    // let page2=await context.newPage()
    // await page2.goto("https://www.flipkart.com/")

    //in a current app open a new tab
    // let context=await browser.newContext()
    // let page=await context.newPage()
    // await page.goto("https://www.flipkart.com/")
    // await page.locator('//input[@class="lNPl8b"]').fill("shoes")
    // await page.locator('(//div[@class="URRkKz RzamwD")').first()
    // let autosugg=await page.locator(('//div[@class="URRkKz RzamwD"]')).all()
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press('Enter')
    
    // new tab via user action
    // await page.goto("https://www.flipkart.com/search?q=shoes+for+women&sid=osp%2Ciko&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_5_na_na_na&as-pos=2&as-type=RECENT&suggestionId=shoes+for+women%7CWomen%27s+Footwear&requestId=ad842eeb-a91c-452f-9215-73627fe9d139&as-searchtext=shoes")
    // await page.click('(//a[@class="CIaYa1"])[1]')
    // await page.waitForTimeout(3000)

    // await page.goto("https://www.redbus.in/")
    // await page.click('//a[text()="Contact us"]')
    // await page.waitForTimeout(3000)
//})

//handling multiple tabs
// test("handling multiple tabs",async({browser})=>{
    // let context=await browser.newContext()
    // let page=await context.newPage()
//     await page.goto("https://www.flipkart.com/search?q=shoes+for+women&sid=osp%2Ciko&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_5_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=shoes+for+women%7CWomen%27s+Footwear&requestId=f6182778-3d19-4d6d-a7d3-196f4b191425&as-searchtext=shoes")
//    let[page1]=await Promise.all([
//     page.waitForEvent('popup'),
//     page.click('(//a[@class="CIaYa1"])[1]') ])
//      await page.waitForTimeout(3000)
//      console.log(await page1.url());
//      await expect(page1.url()).not.toBe("https://www.flipkart.com/search?q=shoes+for+women&sid=osp%2Ciko&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_5_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=shoes+for+women%7CWomen%27s+Footwear&requestId=f6182778-3d19-4d6d-a7d3-196f4b191425&as-searchtext=shoes")

    // await page.goto("https://www.redbus.in/")
    // let [page2]=await Promise.all([
    //     page.waitForEvent('popup'),
    // page.click('//a[text()="Contact us"]')])
    // await page2.click('#account_dd')
    //  })

    //handling multiple browser
    // await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    // let [window2] =await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.click('//button[text()="Shop Now"]')])
    //     await window2.locator('//button[text()="Add to Cart"]').click()
    //     //assertion
    //     let title=await page.title()
    //     await expect(await window2.title()).not.toBe(title)
    // })