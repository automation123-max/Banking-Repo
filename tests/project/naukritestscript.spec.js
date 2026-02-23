import {test,expect} from "@playwright/test"
import register from "../POM2/ProjectPom/register.page"
import ddt from "../../dataDrivenTest/testscriptinvalid.json"
import ddt1 from "../../dataDrivenTest/testscriptvalid.json"
//for inavlid data
test(" invalid data ",async({page})=>{
 let registerpage=new register(page)
 let d=ddt.inavlid[0]
 let fname=ddt.fullname
 let email=ddt.email
 let password=ddt.password
 let mobno=ddt.mobno
//   //launch the url  
await page.goto("https://www.naukri.com/registration/createAccount?")
await registerpage.fullnametextfield.click()
await registerpage.fullnametextfield.fill(d.fullname)
await registerpage.emailtextfield.click()
await registerpage.emailtextfield.fill(d.email)
 await registerpage.passwordtextfield.click()
 await registerpage.passwordtextfield.fill(d.password)
await registerpage.mobilenotextfield.click()
await registerpage.mobilenotextfield.fill(d.mobno)
await registerpage.workstatusoptionexp.click()
await registerpage.checkbox.click()
await registerpage.registerbutton.click()

//await expect(page).not.toHaveTitle( "Register on Naukri.com: Apply to Millions of Jobs Online")
await expect(page).toHaveTitle("Register on Naukri.com: Apply to Millions of Jobs Online")
})
    
// for valid data
test.only(" valid data",async({page})=>{
 let registerpage=new register(page)
 let fname=ddt1.fullname
 let email=ddt1.email
 let password=ddt1.password
 let mobno=ddt1.mobno
//   //launch the url  
await page.goto("https://www.naukri.com/registration/createAccount?")
await registerpage.fullnametextfield.click()
await registerpage.fullnametextfield.fill(fname)
await registerpage.emailtextfield.click()
await registerpage.emailtextfield.fill(email)
 await registerpage.passwordtextfield.click()
 await registerpage.passwordtextfield.fill(password)
await registerpage.mobilenotextfield.click()
await registerpage.mobilenotextfield.fill(mobno)
await registerpage.workstatusoptionexp.click()
await registerpage.checkbox.click()
await registerpage.registerbutton.click()
})