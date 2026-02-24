import {test,expect} from "@playwright/test"
test("e2e",async({page,context})=>{
        await page.goto("https://www.amazon.in/")
        await page.locator('input#twotabsearchtextbox').fill("samsung")
        await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
       let allsugg= await page.locator('//div[@class="s-suggestion-container"]').allInnerTexts()
       console.log(allsugg)
        //await page.locator('//div[@role="listitem"][4]').click()
        //await page.locator('//button[@id="a-autoid-4-announce"]').click()
        await page.locator('(//div[@class="s-suggestion s-suggestion-ellipsis-direction"])[1]').click()
       await page.locator('//span[@class="a-price-whole"]').first().waitFor()
       
        let price=await page.locator('//span[@class="a-price-whole"]').allInnerTexts()
       console.log(price);
    await expect( page.locator('//span[contains(@class,"a-size-medium")]').first()).toContainText("Samsung");

    await page.pause()
    })  

//     test.only(" ",async({page})=>{
//         await page.goto("https://www.amazon.in/")
//         await page.locator('//input[@id="twotabsearchtextbox"]').fill("laptop")
//         await page.locator('//input[@id="twotabsearchtextbox"]').click()
//         await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').first().click()
//         await page.locator('(//div[@data-cy="title-recipe"])[1]').click()
//       let productname="galaxy S25"
//       await page.locator('//span[contains(text(),'Galaxy S25')]/ancestor::div[@data-component-type='s-search-result']//span[@class='a-price-whole']')

//     })

//dynamic x path
test('Dynamic Product Selection on Amazon', async ({ page }) => {
    let productName = "OnePlus";
    await page.goto('https://www.amazon.in')
    //Search for product
    await page.locator('#twotabsearchtextbox').fill(productName)
    await page.keyboard.press('Enter')
    // Wait for search results
    await page.waitForSelector("//div[@data-component-type='s-search-result']")

    // Click product dynamically using parameterized XPath
    //await page.locator(`//div[@data-component-type='s-search-result']//span[contains(text(),'${productName}')]`).first().click()
  let a= await page.locator(`//span[contains(text(),'${productName}')]/ancestor::div[@data-component-type='s-search-result']//span[@class='a-price-whole']`).allInnerTexts()
   console.log(a);
   
   await page.waitForTimeout(2000)
})

//1.Open MMT ,write xpath for departure date and price and validate it.
//test("",async({page})=>{
//  await page.goto("https://www.makemytrip.com/")
//    waitUntil: 'domcontentloaded',
//    timeout: 60000}
//    console.log(await page.content());
//    console.log(await page.title());
// console.log(page.url());
        //await page.locator('//span[@class="lbl_input appendBottom10" and .="Departure"]').click()
// })

import { chromium } from 'playwright';

(async () => {
  const context = await chromium.launchPersistentContext(
    'C:/Users/YourName/AppData/Local/Google/Chrome/User Data',
    {
      channel: 'chrome',
      headless: false
    }
  );

  const page = await context.newPage();
  await page.goto('https://www.makemytrip.com');
})
