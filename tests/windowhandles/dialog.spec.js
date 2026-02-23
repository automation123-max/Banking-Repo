import{test,expect} from "@playwright/test"
test("dialog handling",async({page})=>{
    //checking by default dialogs are autodismmissed in playwright and verify it is cancelled
     await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.getByRole('button',{name:"Simple Alert"}).click()
    // await page.getByRole('button',{name:"Confirmation Alert"}).click()
    // await expect(page.locator('#demo')).toContainText("Cancel")
    // await page.getByRole('button',{name:"Prompt Alert"}).click()
    // await expect(page.locator('#demo')).toContainText("cancelled")
     //or
//        await page.locator('//button[text()="Simple Alert"]').click()
//        await page.waitForTimeout(2000)
//        await page.locator('//button[text()="Confirmation Alert"]').click()
//        await expect(page.locator('#demo')).toContainText("Cancel")
//        await page.waitForTimeout(2000)
//        await page.locator('//button[text()="Prompt Alert"]').click()
//        await expect(page.locator('#demo')).toContainText("cancel")
//         await page.waitForTimeout(2000)

//handling dialog Using page.on()
// page.on("dialog",(dialog)=>{dialog.accept()})
// await page.locator('//button[text()="Simple Alert"]').click()
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Confirmation Alert"]').click()
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Prompt Alert"]').click
// await page.waitForTimeout(2000)

//what if we have a different type of dialogue and we need to accept and dismiss and put input also so
// page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
//     await dialog.accept()}
//     else if(dialog.type()=='confirm'){
//         await dialog.accept()}
//         else if(dialog.type()=="prompt"){
//             await dialog.accept("xyz")
//         }
//     })
// await page.locator('//button[text()="Simple Alert"]').click()
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Confirmation Alert"]').click()
// //await expect(page.locator('#demo')).toContainText("OK")
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Prompt Alert"]').click()
// await page.waitForTimeout(2000)
// await expect(page.locator('#demo').textContent()).toBe("Hello xyz! How are you today?")

//want to get msg and to compare with default value already if present

// page.on("dialog",async(dialog)=>{if(dialog.type()=='alert'){
//     console.log((await dialog.message()));
//     await dialog.accept()}
//     else if(dialog.type()=='confirm'){
//         await dialog.accept()}
//         else if(dialog.type()=="prompt"){
//             if(dialog.defaultValue()=="xyz"){
//                 console.log(await dialog.defaultValue());
//             await dialog.accept()}
//                 else{ await dialog.accept("xyz")}
                
           
//         }
//     })
// await page.locator('//button[text()="Simple Alert"]').click()
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Confirmation Alert"]').click()
// await expect(page.locator('#demo')).toContainText("OK")
// await page.waitForTimeout(2000)
// await page.locator('//button[text()="Prompt Alert"]').click()
// await page.waitForTimeout(2000)
// await expect(page.locator('#demo')).toHaveText("Hello xyz! How are you today?")

//handle dialog using page.once
await page.locator('//button[text()="Simple Alert"]').click()
await page.waitForTimeout(2000)
await page.locator('//button[text()="Confirmation Alert"]').click()
await page.waitForTimeout(2000)
page.once("dialog",async(dialog)=>{dialog.accept("abc")})
await page.locator('//button[text()="Prompt Alert"]').click()
await page.waitForTimeout(2000)
await page.reload() //refresh the page
await page.locator('//button[text()="Prompt Alert"]').click() //not handle dialog by default it will dismiss
await page.waitForTimeout(2000)
})
