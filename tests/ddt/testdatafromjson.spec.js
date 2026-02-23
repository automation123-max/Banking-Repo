import {test} from "@playwright/test"
import multidata from "../../testData/multidata.json"
test("",async({page})=>{
    for(let d of multidata.valid){
        await page.goto(d.url)
await page.locator('//input[@id="username"]').fill(d.username)
await page.locator('//input[@id="password"]').fill(d.password)
await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
if(title=="Logged In Successfully | Practice Test Automation"){
    console.log("valid cred");}
    else{
        console.log("invalid cred");
    }

    }
    for(let d of multidata.invalid){
        await page.goto(d.url)
await page.locator('//input[@id="username"]').fill(d.username)
await page.locator('//input[@id="password"]').fill(d.password)
await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
if(title=="Logged In Successfully | Practice Test Automation"){
    console.log("valid cred");}
    else{
        console.log("invalid cred");
    }

    }
    
})
//or to avoid duplication
test.only(" ",async({page})=>{
    for(let key in multidata){ //we iterate the object here so we use for in
  //console.log(key); //inside object there is array so next for iterating we use for of
  for(let d of multidata[key]){
await page.goto(d.url)
await page.locator('//input[@id="username"]').fill(d.username)
await page.locator('//input[@id="password"]').fill(d.password)
await page.getByRole("button",{name:"Submit"}).click()
let title=await page.title()
if(title=="Logged In Successfully | Practice Test Automation"){
    console.log("valid cred");}
    else{
        console.log("invalid cred");
    }
  }
    }
})