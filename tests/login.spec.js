import{test} from"@playwright/test"
import loginpage from "../POM.page.js/loginpage.page"
// test(" ", async({page})=>{
//     let Loginpage=new loginpage(page)
//     //launch the url
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     //pass username
//     await Loginpage.usernameTextField.fill("student")
//     //pass password
//     await Loginpage.passwordTextField.fill("Password123")
//     //click on submit button
//     await Loginpage.submitButton.click()
//     await page.waitForTimeout(2000)


// })
//take data from json file
import logindata from "../testData/logindata.json"
test(" ", async({page})=>{
    let Loginpage=new loginpage(page)
    let url=logindata.url
    let usn=logindata.usn
    let pwd=logindata.pwd
    //launch the url
    await page.goto(url)
    //pass username
    await Loginpage.usernameTextField.fill(usn)
    //pass password
    await Loginpage.passwordTextField.fill(pwd)
    //click on submit button
    await Loginpage.submitButton.click()
    await page.waitForTimeout(2000)


})
