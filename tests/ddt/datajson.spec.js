// import {test} from "@playwright/test"
// import fs from "fs"
// let datafile=fs.readFileSync("C:/Playwright/testData/singlesetdata.json")
// let data=JSON.parse(datafile)
//or
//import singlesetdata from "../../testData/singlesetdata.json"

// test("get data from data",async({page})=>{
    //read single data
    //console.log(data.greet);
    //read multiple data 
    //data.forEach(d=> {
        //console.log(d.greet);
        // });
// })
// test ("data set of data",async({page})=>{
//     await page.goto(data.url)
// await page.locator('//input[@id="username"]').fill(data.username)
// await page.locator('//input[@id="password"]').fill(data.password)
// await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// console.log((title));
// if(title=="Logged In Successfully | Practice Test Automation"){
//     console.log("valid cred");}
//     else{
//         console.log("invalid cred");
//     }
// })



//multiple data
// test ("multiple set of data",async({page})=>{
// for(let testdata of data){
//     let url=testdata.url
//     let usn=testdata.username
//     let pwd=testdata.password

// await page.goto(url)
// await page.locator('//input[@id="username"]').fill(usn)
// await page.locator('//input[@id="password"]').fill(pwd)
// await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// if(title=="Logged In Successfully | Practice Test Automation"){
//     console.log("valid cred");}
//     else{
//         console.log("invalid cred");
        
//     }
// } 
// }
// )

//refer last note
// test.describe("grouping test",()=>{
//     let url=data.url
//     let u=data.username
//     let p=data.password
//     test(" a ",async({page})=>{await page.goto(url)
// await page.locator('//input[@id="username"]').fill(u)
// await page.locator('//input[@id="password"]').fill(p)
// await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// if(title=="Logged In Successfully | Practice Test Automation"){
//     console.log("valid cred");}
//     else{
//         console.log("invalid cred");
//     }
//   })
// test("b",async({page})=>{await page.goto(url)
// await page.locator('//input[@id="username"]').fill(u)
// await page.locator('//input[@id="password"]').fill(p)
// await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// if(title=="Logged In Successfully | Practice Test Automation"){
//     console.log("valid cred");}
//     else{
//         console.log("invalid cred");
//     }
//   })
// test("c",async({page})=>{await page.goto(url)
// await page.locator('//input[@id="username"]').fill(u)
// await page.locator('//input[@id="password"]').fill(p)
// await page.getByRole("button",{name:"Submit"}).click()
// let title=await page.title()
// if(title=="Logged In Successfully | Practice Test Automation"){
//     console.log("valid cred");}
//     else{
//         console.log("invalid cred");
//     }
//   })
// })

