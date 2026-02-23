import{test,expect} from "@playwright/test"
test("dropdowns",async({page})=>{
    //standard dropdown
    //await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    //using value
    //await page.locator('[id="select3"]').selectOption({value:"India"})
    //await page.waitForTimeout(3000)
    //assertion
    //await expect(await page.locator('[id="select3"]')).toHaveValue("India")
    //using label
    //await page.locator('[id="select3"]').selectOption({label:"India"})
    //await page.waitForTimeout(2000)
    //using index
    //await page.locator('[id="select3"]').selectOption({index:7})
    //await page.waitForTimeout(2000)
    //using without properties
   //await page.locator('[id="select3"]').selectOption('India')
   //await page.waitForTimeout(2000)
//})
//multiple dropdown
//await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
//await page.waitForTimeout(2000)
//value
// await page.locator('#select-multiple-native').selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Solid Gold Petite Micropave "}])
// await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// await page.waitForTimeout(2000)
//label
// await page.locator('#select-multiple-native').selectOption([{label:"Mens Casual Premium ..."},{label:"Mens Cotton Jacket..."}])
// await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
// await page.waitForTimeout(2000)
//samethimg we can do this with index and without properties
//})

//custom dropdown
//await page.goto("https://www.amazon.in/s?k=shoes&crid=SZK7VOB8Q8ID&sprefix=%2Caps%2C569&ref=nb_sb_ss_recent_1_0_recent")
//await page.locator('#s-result-sort-select').click({force:true})
//await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()
//let options=await page.locator('//a[@class="a-dropdown-link"]').all()
// for(let option of options){
//     let text=await option.textContent()
//     if(text.includes('Best Sellers')){
//         await option.click()
//     }
// }
// await page.waitForTimeout(2000)

//directly by the x path
// await page.locator('#s-result-sort-select_1').click()
//  await page.waitForTimeout(2000)

//variable attached to x path for text
// let text="Price: Low to High"
// await page.locator(`//a[@class="a-dropdown-link" and text()="${text}"]`).click()

// })

//autosuggest dropdown
await page.goto("https://www.amazon.in/")
await page.locator('[id="twotabsearchtextbox"]').fill("shoes")
await page.waitForSelector('(//div[@class="s-suggestion-container"])[1]')
let autosugg=await page.locator('//div[@class="s-suggestion-container"]').all()
//one approach
// for(let option of autosugg){
//     let text=await option.textContent()
//     if(text.includes(" for woman")){
//         await option.click()
//         break
//     }
// }
//await page.waitForTimeout(2000)

//using keyboard arrow keys
//await page.keyboard.press("ArrowDown")//bydefault it will select first one
for(let i=1;i<4;i++){
await page.keyboard.press("ArrowDown")//if we want 3rd one means

await page.keyboard.press('Enter')
}
await page.waitForTimeout(2000)

})