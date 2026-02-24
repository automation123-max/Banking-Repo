import{test} from "@playwright/test"
//import './newfile.spec'
//click()
//test("click",async ({page}) => {
// await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
// await page.locator('//button[@id="btn"]').click() //left click
// await page .waitForTimeout(3000) //just to check how it happen ..no need
// await page.locator('//a[text()="Right Click"]').click({modifiers:['Shift']})
// await page.locator('//button[@id="btn_a"]').click({button:'right'})//right click
// await page .waitForTimeout(3000) //just to check how it happen ..no need
//double click
//await page.locator('//a[text()="Double Click"]').click()
//await page.locator('//button[@id="btn_a"]').dblclick()
//await page .waitForTimeout(3000) //just to check how it happen ..no need
//or
//await page.locator('//button[@id="btn_a"]').click({clickCount:2})
//await page .waitForTimeout(3000) 
//})

//down and up
// await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
// await page.locator("#circle").hover()
// await page.waitForTimeout(3000)
// await page.mouse.down()
// await page.waitForTimeout(3000)
// await page.mouse.up()
// await page.waitForTimeout(3000)
// })

//disabled or hidden buttons
// await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
// //await page.locator("#submit").click({force:true})
// //or
// await page.locator("#submit").dispatchEvent('click')
//  await page.waitForTimeout(3000)
// })

//mouse hover  and move()
// await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
// await page.locator('[class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
// await page.waitForTimeout(5000)
// await page.mouse.move(300,500)
//  await page.waitForTimeout(5000)
// })

//scrolling
//test("scrolling",async({page})=>{
// await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
// await page.waitForTimeout(2000)//wheel doesnt have auto wait
// await page.mouse.wheel(0,2000)//scroll down
// await page.waitForTimeout(2000)//just for observation
// await page.mouse.wheel(0,-2000)
// await page.waitForTimeout(2000)
// await page.mouse.wheel(1000,1000)//to right
// await page.waitForTimeout(2000)//just for observation
// await page.mouse.wheel(-1000,0)//to left
// await page.waitForTimeout(2000)//just for observation

//scroll to a particular element
// await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
// await page.waitForTimeout(2000)
// await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
// await page.waitForTimeout(2000)
//})
test("drop and drag",async({page})=>{
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    // await page.locator('//div[text()="Drag Me"]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.waitForTimeout(2000)
    // await page.mouse.move(200,500)
    // await page.waitForTimeout(2000)
    // await page.mouse.up()

    //drag and drop to target
    // await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.waitForTimeout(2000)
    // await page.mouse.down()
    // await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
    // await page.mouse.up()
    // await page.waitForTimeout(2000)

//drag and drop by taking the location
// await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
// await page.locator('//div[text()="Mobile Charger"]').hover()
// await page.waitForTimeout(2000)
// await page.mouse.down()
// let box=await page.locator('//div[text()="Mobile Accessories"]/parent::div').boundingBox()
// await page.mouse.move(box.x,box.y)
// await page.mouse.up()
// await page.waitForTimeout(2000)

//dragTo
await page.goto("https://.qspiders.com/ui/dragDrop/?subl")
let source= page.locator('//div[text()="Mobile Charger"]')
let target=page.locator('//div[text()="Mobile Accessories"]/parent::div')
await page.waitForTimeout(2000)
await source.dragTo(target)
await page.waitForTimeout(2000)
})
