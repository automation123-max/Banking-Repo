import{test,expect} from "@playwright/test"
import login from "../POM2/ProjectOrangeHR/login.page"
import data from "../../dataDrivenTest/orangehrts.json"
import dashboard from "../POM2/ProjectOrangeHR/dashboard.page"
import pim from "../POM2/ProjectOrangeHR/pim.page"
import { doesNotThrow } from "node:assert"
//Login → Add Employee → Verify Employee → Logout
test(" ", async({page})=>{
    let loginpage=new login(page)
    let dashboardpage=new dashboard(page)
    let pimpage=new pim(page)
    await page.goto(data.url)
    await page.waitForLoadState()
    await loginpage.usenameTF.fill(data.username)
    await loginpage.passwordTF.fill(data.password)
    await loginpage.loginbutton.click()
    //await page.waitForLoadState()
    await dashboardpage.PIMoption.click()
    await pimpage.addemployeelink.waitFor({ state: 'visible' })
    await pimpage.addemployeelink.click()
    await pimpage.firstnameTF.fill(data.firstname)
    await pimpage.lastnameTF.fill(data.lastname)
    await pimpage.empidTF.fill(data.empid)
    await pimpage.savebutton.click()
    

// Assert Personal Details page opened
await expect(pimpage.firstnameTF).toHaveValue(data.firstname);
await expect(pimpage.lastnameTF).toHaveValue(data.lastname);

await pimpage.emplistlink.click()
await pimpage.empnameTF.fill(data.firstname)
await page.waitForLoadState()
await page.keyboard.press('ArrowDown')
await page.keyboard.press('Enter')
await pimpage.searchbutton.click()
//verify is it visible on the pimpage
await expect(page.locator(`text=${data.firstname}`)).toBeVisible();
await pimpage.useroption.click()
await pimpage.logoutlink.click()
})

// //Login → Add Employee → Delete Employee → Verify Deletion → Logout
// test(" ", async({page})=>{
//     let loginpage=new login(page)
//     let dashboardpage=new dashboard(page)
//     let pimpage=new pim(page)
//     const empId = `${data.empid}${Date.now()}`;
//     await page.goto(data.url)
//     await page.waitForLoadState()
//     await loginpage.usenameTF.fill(data.username)
//     await loginpage.passwordTF.fill(data.password)
//     await loginpage.loginbutton.click()
//     await page.waitForLoadState()
//     await dashboardpage.PIMoption.click()
//     await pimpage.addemployeelink.waitFor({ state: 'visible' })
//     await pimpage.addemployeelink.click()
//     await pimpage.firstnameTF.fill(data.firstname)
//     await pimpage.lastnameTF.fill(data.lastname)
//     await pimpage.empidTF.fill(empId)
//     await pimpage.savebutton.click()
//  //Assert Personal Details page opened
// await expect(pimpage.firstnameTF).toHaveValue(data.firstname);
// await expect(pimpage.lastnameTF).toHaveValue(data.lastname);

// await pimpage.emplistlink.click()
// await pimpage.empidTF.fill(empId)
// await page.waitForLoadState()
// // await page.keyboard.press('ArrowDown')
// // await page.keyboard.press('Enter')
// await pimpage.searchbutton.click()
// //verify is it visible on the pimpage
// //await expect(page.locator(`text=${data.firstname}`)).toBeVisible();
//   //let row = page.locator(".oxd-table-row", { hasText: empId});
//   //  await expect(row).toBeVisible({timeout:10000});





// })
    