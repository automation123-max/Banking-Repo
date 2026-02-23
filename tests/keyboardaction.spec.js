import{test} from "@playwright/test"
test("keyboard actions",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //fill()
    //await page.locator('[id="name"]').fill("abc")
    //type()
    //await page.locator('[id="name"]').type("abc")
    //or
    //await page.type('[id="name"]',"abc")
    //or
    //await page.locator('#name').click()
    //await page.keyboard.type("abc")
    //insertText()
    //await page.locator('#name').click()
    //await page.keyboard.insertText("abc")

    //down and up
    
})