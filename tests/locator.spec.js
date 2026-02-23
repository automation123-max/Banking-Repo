//css 
import {test,expect} from "@playwright/test"
test("locators", async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input#name").fill("abc")
   await expect.soft(page.locator("input#name")).toHaveText("")
    await page.locator("input#email").fill("aa@getMaxListeners.com")
    await page.locator('[class="submit-btn"]').click()
    await expect.soft(page.locator('[class="submit-btn"]')).toBeVisible()

})

// //x path
 //import {test,expect} from "@playwright/test"
 //test("locators", async({page})=>{
//      await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('//input[@id="name"]').fill("xyz")
//     await page .locator('//input[@id="email"]').fill("xx@getMaxListeners.com")
//     await page.locator('//button[@onclick="calculateRange()"]').click()
//     //assertion
//     await expect(page.locator('//input[@id="name"]')).toHaveValue("xyz")
//     await expect(page.locator('//input[@id="name"]')).toHaveText("")
//     //assymetric assertion
//     //await expect(page.locator('#name')).toHaveValue(expect.any(String))
//     await expect(page.locator('#email')).toHaveValue(expect.stringContaining("@"))

// })


// import{test} from"@playwright/test"
// test("get by methods",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/electronics")
//     await page.getByRole("link",{name:'camera & photo'})
// })

