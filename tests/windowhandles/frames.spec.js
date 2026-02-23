import{test,expect} from "@playwright/test"
test("frames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // //total frames
    //let frames=await page.frames()
    // console.log(frames.length);
    // // title of all these
    // for(let frame of frames){
    //     console.log(await frame.title());
        
    // }
    // //title of main page
    // console.log(await page.title());

    //handling frames
    //approach 1 frame()
//  let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
//  await frame1.locator('//input[@name="mytext1"]') .fill("abc")
//   await expect (await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("ab") 

//approach 2 framelocator
    // let tfframe2=await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]').fill("zzz")
    // await page.waitForTimeout(3000)

  //approach 3
//   let frame2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
//   await frame2.locator('//input[@name="mytext2"]').fill("dddd")
   //await page.waitForTimeout(3000)

   //nested frame
   let frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   let button=await frame3.frameLocator('//iframe').locator(' //div[@class="ulDsOb" and  .="I am a human"]')
   await button.click()
   await page.waitForTimeout(3000)
})