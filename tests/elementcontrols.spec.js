//inner text and text content
// import{test} from "@playwright/test"
// test("element controls",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//     let text=await page.locator('//select[@id="options"]').innerText()
//     console.log(text);
    
// })

//import{test} from "@playwright/test"
//test("element controls",async({page})=>{
   // await page.goto("https://www.flipkart.com/")
    // await page.locator('//input[@title="Search for Products, Brands and More"]').fill("iphone16")
//     let v=await page.locator('//input[@title="Search for Products, Brands and More"]').isVisible()
//    console.log(v);
   
//     await page.getByRole('link', { name: 'iphone 16 pro in Mobiles' }).click()
//     await page.getByRole('link', { name: 'Apple iPhone 16 Pro (Desert Titanium, 256 GB) Currently unavailable Add to' }).click()


//})

// import{test} from "@playwright/test"
// test("element controls",async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@title="Search for Products, Brands and More"]').fill("iphone 16")
//     let v=await page.locator(('//div[@class="URRkKz"]')).first()
//     console.log(v);
//     })

// import{test} from "@playwright/test"
// test("element controls",async({page})=>{
//     await page.goto("https://www.flipkart.com/")
//     await page.locator('//input[@title="Search for Products, Brands and More"]').fill("iphone 16")
//     await page.locator(('//div[@class="URRkKz"]')).click()

//     })


import { test } from "@playwright/test";

test("element controls", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  // close login popup
  await page.getByRole('button', { name: '✕' }).click();

  const searchBox = page.locator('//input[@title="Search for Products, Brands and More"]');
  await searchBox.fill("iphone 16");

  let v = await searchBox.isVisible();
  console.log(v);

  await page.keyboard.press('Enter');
  await page.waitForLoadState();

  await page.getByRole('link', { name: /iphone 16 pro/i }).first().click();
  await page.waitForLoadState();

  await page.getByRole('link', { name: /Apple iPhone 16 Pro/i }).first().click();
});

