import{test,expect} from "@playwright/test"
// test("radio button", async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//     await page.locator('//input[@id="attended"]').check()
//     await page.waitForTimeout(3000)

//     //asserting
//     await expect(await page.locator('//input[@id="attended"]')).toBeChecked()
//     // or -ve asserting
//     await expect(await page.locator('//input[@id="attended"]').isChecked()).toBeTruthy()
    
// })

test("checkbox", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator('//input[@id="domain_a"]').check()
    await page.waitForTimeout(2000)
    //asserting(verify its checked())
    await expect(await page.locator('//input[@id="domain_a"]')).toBeChecked()
     await page.locator('//input[@id="domain_a"]').uncheck()
     await page.waitForTimeout(2000)
    // or -ve asserting(verify its unchecked)
 await expect(await page.locator('//input[@id="domain_a"]').isChecked()).toBeFalsy()
    
})