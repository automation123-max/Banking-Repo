//use page
// import {test} from "@playwright/test"
// test("fixtures",async({page})=>{
//     await page.goto("https://www.amazon.in/")
// })

//use browser

import {test} from "@playwright/test"
test("fixtures",async({browserName,browser})=>{
  //await page.goto("https://www.amazon.in/")
  console.log(browserName);
  
  let context=await browser.newContext()
  let page= await context.newPage()
  await page.goto("https://www.amazon.in/")
 // await page.pause()
})

