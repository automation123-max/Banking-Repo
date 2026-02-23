import{test} from "@playwright/test"
// test("notifications",async ({browser}) =>{
//     let context=await browser.newContext()
//     let page=await context.newPage()
//     await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
//     await page.getByRole('button',{name:"Notification"}).click()
//     //verify whether the permission is denied by default
//     let result=await page.evaluate(()=>{return Notification.requestPermission()})
//     console.log(`permissions:${result}`);
// })
//want to allow the permission
// test("notifications",async ({browser}) =>{
//     let context=await browser.newContext({permissions:["notifications"]})
//     let page=await context.newPage()
//     await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
//     await page.getByRole('button',{name:"Notification"}).click()
//     let result=await page.evaluate(()=>{return Notification.requestPermission()})
//     console.log(`permissions:${result}`);
// })
//if i want to allow the permission globally means in configuration file inside use give the permissions
// test("notifications",async ({browser}) =>{
//     let context=await browser.newContext({permissions:[]})
//     let page=await context.newPage()
//     await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
//     await page.getByRole('button',{name:"Notification"}).click()
//     let result=await page.evaluate(()=>{return Notification.requestPermission()})
//     console.log(`permissions:${result}`);
// })
//instead of only notification if we want to allow all other permission means
// test.only("notifications",async ({browser}) =>{
//     let context=await browser.newContext({permissions:["notifications","microphone","geolocation","camera"]})
//     let page=await context.newPage()
//     await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
//     await page.getByRole('button',{name:"Notification"}).click()
//     let result=await page.evaluate(()=>{return Notification.requestPermission()})
//     console.log(`permissions:${result}`);
// })

//if we want to revoke the permission means
test.only("notifications",async ({browser}) =>{
    let context=await browser.newContext({permissions:["notifications"]})
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole('button',{name:"Notification"}).click()
    let result=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result}`);
    //revoke the permission
    await context.clearPermissions()
    let result2=await page.evaluate(()=>{return Notification.requestPermission()})
    console.log(`permissions:${result2}`);
    

})

