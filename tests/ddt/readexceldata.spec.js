import {test}from "@playwright/test"
import excel from "exceljs"
import path from "node:path"
// test("read the single data",async({page})=>{
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
//     let sheet=await book.getWorksheet("Sheet1")
    //recognize the cell
   //let data= await sheet.getRow(1).getCell(1)
    //console.log(data);
    //if we want to get only the data instead of cell object use toString()
    //let data1=await sheet.getRow(1).getCell(1).toString()
    //console.log(data1);
    //if i want to get whatever i passed that same value no need to convert everything should be in string only then we use value
   // let data2=await sheet.getRow(1).getCell(1).value
    //console.log(data2);
//})
    
    //read multiple data from excel
    // test.only("read the multiple data",async({page})=>{
    // let book=new excel.Workbook()
    // await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
    // let sheet= book.getWorksheet("Sheet2")
    // //read from row wise
    // for(let row=1;row<=sheet.actualRowCount;row++){
    //        for(let col=1;col<=sheet.actualColumnCount;col++){
    //     let data=sheet.getRow(row).getCell(col).toString()
    //     console.log(data);
    //      }
    //     }
    //read from column wise
    // for(let col=1;col<=sheet.actualRowCount;col++){
    //        for(let row=1;row<=sheet.actualColumnCount;row++){
    //     let data=sheet.getRow(row).getCell(col).toString()
    //     console.log(data);
    //      }
    //     }
    //     })

    //https://49.248.28.218:8081/
    // execute single script with multiple set of data which will be reading from external file i.e excel file
    test("pass the testdata to app",async({page})=>{
         let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/exceldata.xlsx"))
     let sheet= book.getWorksheet("Sheet3")
     let alldata=[]
     for(let r=1;r<=sheet.actualRowCount;r++){
        let row=sheet.getRow(r)
        let url=row.getCell(1).toString()
        let usn=row.getCell(2).toString()
        let pwd=row.getCell(3).toString()
        alldata.push({url:url,username:usn,password:pwd})
      }
      console.log(alldata);
      for(let d of alldata){
        await page.goto(d.url)
        await page.locator('//input[@id="username"]').fill(d.username)
        await page.locator('//input[@id="password"]').fill(d.password)
        await page.getByRole("button",{name:"Submit"}).click()
        await page.waitForTimeout(3000)
      }
      
 
    })