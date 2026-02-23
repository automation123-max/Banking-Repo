import {test} from "@playwright/test"
import fliphome from "./POM2/fliphome.page"
import otp from "./POM2/otp.page"
import productlist from "./POM2/productlist.page"
import selectedproductdetails from "./POM2/selectedproductdetails.page"
import cart from "./POM2/cart.page"
test(" ",async({page})=>{
    let cartpage=new cart(page)
    let fliphomepage=new fliphome(page)
    let otppage=new otp(page)
    let productlistpage=new productlist(page)
    let selectedproductdetailspage=new selectedproductdetails(page)
    await page.goto("https://www.flipkart.com/")
    await fliphomepage.searchtextfield.click()
    await fliphomepage.searchtextfield.fill("samsung")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press('Enter')
    await productlistpage.productdata.click()
    const pages = page.context().pages();
    console.log(pages.length);
    await page.goBack();

// await selectedproductdetailspage.cartlinksvg.click()
//    await newPage.close();
//    await page.bringToFront();
//     await fliphomepage.searchtextfield.click()
//     await fliphomepage.searchtextfield.fill("laptop")

    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press('Enter')
    // await productlistpage.lapdata.click()
    // await selectedproductdetailspage.cartlinklap.click()
    // await selectedproductdetailspage.cartlink.click()
    // await cartpage.placeorderbutton.click()




})