import {test} from "@playwright/test"
import landing from "../POM.page.js/landing.page"
import signup from "../POM.page.js/signup.page"
import signin from "../POM.page.js/signin.page"
import home from "../POM.page.js/home.page"
import createticket from "../POM.page.js/createticket.page"
// test(" ",async({page})=>{
//     page.on("dialog",async(dialog)=>{
//         console.log(await dialog.message());
//        await dialog.accept()
//     })
//     let landingpage=new landing(page)
//     let signuppage=new signup(page)
//     let signingpage=new signin(page)
//     let homegpage=new home(page)
//     let createticketpage=new createticket(page)
//     //launch the url
//     await page.goto("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
//     await landingpage.signupLink.click()
//     //pass name TF
//     await signuppage.nameTextField.fill("abc")
//     //pass email 
//     await signuppage.emailTextField.fill("abcda123@gmail.com")
//     //pass password
//     await signuppage.passwordTextField.fill("123")
//     //pass repwd
//     await signuppage.repasswordTextField.fill("123")
//     //pass contact number
//     await signuppage.contactTextField.fill("1234567890")
//     //gender radio button
//     await signuppage.femaleRadio.click()
//     //submit button
//     await signuppage.submitButton.click()
//     //alert-get the message and accept it
//     //email TF
//     await signingpage.emailTF.fill("abcda123@gmail.com")
//     //password TF
//     await signingpage.passwordTF.fill("123")
//     //click on login button
//     await signingpage.loginButton.click()
//     //click on create ticket
//     await homegpage.createticketlink.click()
//     //add subject
//     await createticketpage.subjectTextField.fill("logo font")
//     //select an option from task type dropdown
//     await createticketpage.tasktypedropdwn.selectOption({value:"ot1"})
//     //select priority option dropdown
//     await createticketpage.priordropdwn.selectOption({value:"important"})
//     //add the description
//     await createticketpage.DescriptionTextarea.fill("font and the colour in the logo as per req")
//     //send button
//     await createticketpage.sendbutton.click()
//     //alert msg  accept(starting only we did it in page.on)
//     //click on view ticket
//     await homegpage.viewticketlink.click()
//     //take a screenshot
//     await page.screenshot({path:"ScreenShot/ticket.png"})
// })

//replace hard coded data with json file key
import testData from "../testData/e2e1.json"
test(" ",async({page})=>{
let url=testData.url
let name=testData.name
let email=testData.email
let password=testData.password
let repassword=testData.repassword
let cno=testData.contact
let sub=testData.sub
let desc=testData.desc
page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
       await dialog.accept()
    })
let landingpage=new landing(page)
    let signuppage=new signup(page)
    let signingpage=new signin(page)
    let homegpage=new home(page)
    let createticketpage=new createticket(page)
    //launch the url
    await page.goto(url)
    await landingpage.signupLink.click()
    //pass name TF
    await signuppage.nameTextField.fill(name)
    //pass email 
    await signuppage.emailTextField.fill(email)
    //pass password
    await signuppage.passwordTextField.fill(password)
    //pass repwd
    await signuppage.repasswordTextField.fill(repassword)
    //pass contact number
    await signuppage.contactTextField.fill(cno)
    //gender radio button
    await signuppage.femaleRadio.click()
    //submit button
    await signuppage.submitButton.click()
    //alert-get the message and accept it
    //email TF
    await signingpage.emailTF.fill(email)
    //password TF
    await signingpage.passwordTF.fill(password)
    //click on login button
    await signingpage.loginButton.click()
    //click on create ticket
    await homegpage.createticketlink.click()
    //add subject
    await createticketpage.subjectTextField.fill(sub)
    //select an option from task type dropdown
    await createticketpage.tasktypedropdwn.selectOption({value:"ot1"})
    //select priority option dropdown
    await createticketpage.priordropdwn.selectOption({value:"important"})
    //add the description
    await createticketpage.DescriptionTextarea.fill(desc)
    //send button
    await createticketpage.sendbutton.click()
    //alert msg  accept(starting only we did it in page.on)
    //click on view ticket
    await homegpage.viewticketlink.click()
    //take a screenshot
    await page.screenshot({path:"ScreenShot/ticket1.png"})
})


