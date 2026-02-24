import{test,expect} from "@playwright/test"
test("work","@smoke",async({browser})=>{
    await page.goto("https://www.flipkart.com/")
    //await page.locator()
    await page.getByRole('textbox', {name: "Search for Products, Brands and More"}).fill("samsung")
    // await page.locator('//div[@class="URRkKz RzamwD"]').first().waitFor()
    // await page.locator('//div[@class="URRkKz RzamwD"]').first().click()
    await page.waitForTimeout(3000)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    let [page2]=await Promise.all([
        context.waitForEvent('page'),
        page.click('(//div[@class="jIjQ8S"])[1]')])
    //await page2.waitForTimeout(2000)
    //await page2.waitForLoadState()
    //await page2.getByRole('button', {name: /go to cart/i}).click()
    let page3=await Promise.all([
        context.waitForEvent('page'),
        page2.click('//button[@class="dSM5Ub ugg2XR IUmgrZ"]')])
        
    })
    let context=await browser.newContext()
    let page=await context.newPage()
    // await page.goto("https://www.amazon.in/")
    // await page.locator('//input[@id="twotabsearchtextbox"]').fill("samsung")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press('Enter')
    // let [page2]=await Promise.all([
    //     page.waitForEvent('popup'),
    //    page.click('(//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"])[1]')    ])
     
    //  await page2.waitForLoadState()
    // await page2.click('//input[@id="add-to-cart-button"]')
    //    await page.waitForTimeout(5000)


   
    test("e2e",{tag:"@smoke"},async({page,context})=>{
        await page.goto("https://www.amazon.in/")
        await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
        await page.waitForTimeout(2000)
        await page.locator('input#twotabsearchtextbox').fill("samsung")
        await page.locator('input#twotabsearchtextbox')
        await page.locator('//div[@class="s-suggestion-container"]').first().click()
        await page.locator('//div[@class="s-suggestion-container"]').all()
        await page.locator('//div[@role="listitem"][4]').click()
        await page.locator('//button[@id="a-autoid-4-announce"]').click()
        let cartCount = page.locator('#nav-cart-count')
        await expect(cartCount).toHaveText('1')
        await page.click('//span[@class="nav-line-2 "]')
        await page.locator('//input[@id="ap_email_login"]').fill("8105688634")



    })
