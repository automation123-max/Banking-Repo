//wait for text
import{test}from "@playwright/test"
// test("element wait",async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]',{hasText:" for woman"}).waitFor({timeout:5000})
//     let a=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
// console.log(a);

// })
//wait for timeout
// test("element wait",async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes").waitFor({timeout:2000,state:'visible'})
//     await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]',{hasText:" for woman"}).waitFor()
//     let a=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
// console.log(a);

// })

//wait for selector
// test("element wait",async({page}) => {
//     await page.goto("https://www.amazon.in/")
//     await page.waitForSelector('//input[@id="twotabsearchtextbox"]',{state:''})
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]',{hasText:" for woman"}).waitFor()
//     let a=await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
// console.log(a);
// })

//wait for navigation
// test("wait for navigation",async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await Promise.all([
//         page.waitForNavigation(),
//         page.click("#nav-cart-text-container")
//     ])

// })

//wait for load state
// test("wait for load state",async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
//     await Promise.all([
//         page.waitForNavigation(),
//         page.click("#nav-cart-text-container")
//     ])
//     await page.click("#nav-cart-text-container")
//     await page.waitForLoadState('domcontentloaded',{timeout:3000})//not passed any parameter means it will take by default load state
// })

//wait for event
// test("wait for event",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
//     await page.fill('[id="writeArea"]',"I am downloading the file")
//    let [downloadfile]=await Promise.all([
//       page.waitForEvent('download'),
//       page.click('[id="downloadButton"]')
//    ])
//    console.log(await downloadfile.path());
   

// })

//custom wait
// test("custom waits",async({page})=>{
// await page.goto("https://www.amazon.in/")
// await page.locator('//input[@id="twotabsearchtextbox"]').fill("oneplus")
// await page.waitForFunction(()=>{let ele =document.querySelectorAll('.s-suggestion-container')
// return ele.length>1
// })
// let allautosug=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
// console.log(allautosug);
// })

test("custom waits",async({page})=>{
await page.goto("https://www.amazon.in/")
await page.waitForFunction(()=>{let ele=document.readyState==='complete'})
})


