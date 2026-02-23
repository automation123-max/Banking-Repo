//import{test,expect}from "@playwright/test"
//test("asserton",async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.getByText('Test login')
//     await expect(page.getByText('Test login')).toHaveText('Test login')
//     await expect(page.getByText('Test login')).not.toContainText("abc")
//     //await expect.soft(page.getByText('Test login')).toHaveText("login")

// }
// )

// test("asserton",async({page})=>{
//   await page.goto("https://practicetestautomation.com/practice-test-login/")
//      await page.locator('//input[@id="username"]').fill("abc")
//  await expect(page.locator('//input[@id="username"]')).toHaveValue("abc")
// })

// test("asserton",async({page})=>{
//   await page.goto("https://practicetestautomation.com/practice-test-login/")
//      await page.locator("a")
//  await expect(page.locator("a")).toHaveCount(9)
// })

//test("Multiple assertions", async ({ page }) => {
 // await page.goto("https://practicetestautomation.com/practice-test-login/")

  // --- toHaveText ---
  //await page.locator("text=Practice Test Automation")
  //await expect( page.locator("text=Practice Test Automation")).toContainText("Practice")

  // --- toHaveValue ---
  //await page.locator('//input[@id="username"]').fill("poorni")
  //await expect(page.locator('//input[@id="username"]')).toHaveValue("poorni")

  // --- toHaveCount ---
//await page.locator("button")
//await expect( page.locator("button")).toHaveCount(12)
//   await expect(buttons).toHaveCSS("padding","15px 40px")
// 
//})

// import{test} from"@playwright/test"
// test("pracice",async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@title="Search for Products, Brands and More"]').fill("oneplus")
//  let v=await page.locator('//input[@title="Search for Products, Brands and More"]').isVisible()
// console.log(v);
// await page.getByRole('link', { name: 'oneplus 15 5g in Mobiles' }).click()
// await page.getByRole('link', { name: 'OnePlus 15 5G (Infinite Black, 256 GB) Add to Compare OnePlus 15 5G (Infinite' }).click()
// await page.getByRole('link', { name: 'Cart' }).click()
// getByRole('button', { name: 'Add to cart', exact: true }).click()
// })

// let pen={
//   price:[10,20,30],
//   brand:["cello","renold"],
//   colour:"black"
// }

// expect(pen).toEqual(expect.objectContaining({colour:"black"}))