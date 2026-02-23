import{test}from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
// test("write data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet5")
//     if(!sheet){
//         sheet=book.addWorksheet("Sheet5")
//     }
//     sheet.getRow(1).getCell(1).value="hello"
//     await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
// })
//OR

// test("write data", async ({ page }) => {
//   let book = new excel.Workbook();
//   const filePath = path.join(__dirname, "../../testData/exceldata.xlsx");

//   await book.xlsx.readFile(filePath);

//   let sheet = book.getWorksheet("Sheet4");
//   if (!sheet) {
//     sheet = book.addWorksheet("Sheet4");
//   }

//   sheet.getCell("A1").value = "hello";   // ✅ reliable way
//     await book.xlsx.writeFile(filePath);

// })

//i want to get all those text and store it into the excel
// test("write data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet6")
//     if(!sheet){
//         sheet=book.addWorksheet("Sheet6")
//     }
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
//      await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
//    let allopt= await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
//    console.log(allopt);
//    for(let text of allopt){
//     let i=allopt.indexOf(text)
//     //store it in row wise
//     sheet.getRow(1).getCell(i+1).value=text //i+1 bcz index starts from 0
//    }
//    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
// })

// test("write data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet7")
//     if(!sheet){
//         sheet=book.addWorksheet("Sheet7")
//     }
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
//      await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
//    let allopt= await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
//    console.log(allopt);
//    for(let text of allopt){
//     let i=allopt.indexOf(text)
//     //store it in column wise
//     sheet.getRow(i+1).getCell(1).value=text //i+1 bcz index starts from 0
//    }
//    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
// })

// test("write data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
//     let sheet=book.getWorksheet("Sheet8")
//     if(!sheet){
//         sheet=book.addWorksheet("Sheet8")
//     }
//     await page.goto("https://www.amazon.in/")
//     await page.locator('input#twotabsearchtextbox').fill("shoes")
//      await page.locator('//div[@class="s-suggestion-container"]').first().waitFor()
//    let allopt= await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
//    console.log(allopt);
//    for(let text of allopt){
//     let i=allopt.indexOf(text)
//     //store it in column wise
//     sheet.getRow(i+1).getCell(1).value=text //i+1 bcz index starts from 0
//     sheet.getRow(1).getCell(i+1).value=text 

//    }
//    await book.xlsx.writeFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
// })
