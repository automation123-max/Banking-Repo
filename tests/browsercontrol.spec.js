//.setViewportSize()
// import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     await page.setViewportSize({width:1000,height:500})
// })

//.viewportSize()
//  import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     let size1=await page.viewportSize()
//     console.log(size1);
    
//     await page.setViewportSize({width:1000,height:500})
//     let size=await page.viewportSize()
//     console.log(size);
    
// })

//.title()
// import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     //await page.goto("https://www.google.com")
//     //console.log(await page.title());
//     await page.goto("https://www.flipkart.com")
//     console.log(await page.title());
// })

//.url()
// import {test} from "@playwright/test"
// test("browser controls",async({page})=>{
//     await page.goto("https://www.google.com")
//     console.log(await page.title());
//     console.log(await page.url());
    
//     await page.goto("https://www.flipkart.com")
//     console.log(await page.title());
//     console.log(await page.url());
    
// })

//context.cookies()
import {test} from "@playwright/test"
test("browser controls",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    console.log(await context.cookies());
    
    
    await page.goto("https://www.flipkart.com")
    console.log(await context.cookies());
    
})
