import{test} from "@playwright/test"
import path from "node:path";
import fs from "fs"
// test("upload files", async({page})=>{
//     //upload a file which are present in project folder
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     //upload single file
//     //await page.locator('#singleFileInput').setInputFiles("C:/Playwright/tests/uplfil/uplfil.txt")
//    //or[it is the good practice]
//    console.log(__dirname);
//    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../../tests/uplfil/uplfil.txt"))
//   await page.getByRole('button',{name:"Upload Single File"}).click()
//   await page.waitForTimeout(2000)

  //upload multiple file
//   await page.locator("#multipleFilesInput").setInputFiles(["C:/Playwright/tests/uplfil/aaa.xlsx","C:/Playwright/tests/uplfil/uplfil.txt"])
//   await page.getByRole('button',{name:"Upload Multiple Files"}).click()
//    await page.waitForTimeout(2000)
// })

//upload a file which is present local system
//single file
// test("upload files", async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")
// await page.locator("#singleFileInput").setInputFiles("D:/OneDrive/Desktop/prc upl file.txt")
// await page.getByRole('button',{name:"Upload Single File"}).click()
// await page.waitForTimeout(2000)

//   //multiple file
//   await page.locator("#multipleFilesInput").setInputFiles(["D:/OneDrive/Desktop/prc upl file.txt","D:/OneDrive/Desktop/New Microsoft Excel Worksheet.xlsx"])
//   await page.getByRole('button',{name:"Upload Multiple Files"}).click()
//   await page.waitForTimeout(2000)

// })

//cancel or remove the file which is already uploaded
// test("upload files", async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")
// //single file
// await page.locator("#singleFileInput").setInputFiles("D:/OneDrive/Desktop/prc upl file.txt")
// await page.locator("#singleFileInput").setInputFiles([])
// await page.getByRole('button',{name:"Upload Single File"}).click()
// await page.waitForTimeout(2000)

// //multiple file
//   await page.locator("#multipleFilesInput").setInputFiles(["D:/OneDrive/Desktop/prc upl file.txt","D:/OneDrive/Desktop/New Microsoft Excel Worksheet.xlsx"])
//   await page.locator("#multipleFilesInput").setInputFiles([])
//   await page.getByRole('button',{name:"Upload Multiple Files"}).click()
//   await page.waitForTimeout(2000)

// })

//download file
test("download files", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    // await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
    // await page.getByRole("button",{name:"Download"}).click()
    // await page.waitForTimeout(2000)

    //if it is large size file or we need towait till downloading
//    await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
//    let [downloadfile]=await Promise.all([
//     page.waitForEvent("download"),
//     await page.getByRole("button",{name:"Download"}).click()])
//     console.log(await downloadfile.path());//want to get the path of the downloaded file and it is tempoary path
    
//if we want to save our file with a suggested file name with a folder
//     await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
//    let [downloadfile]=await Promise.all([
//     page.waitForEvent("download"),
//     await page.getByRole("button",{name:"Download"}).click()])
//     let downloadfloder="C:/Playwright/.github/workflows/downloadedfile"
//     let filename=downloadfile.suggestedFilename()
//     await downloadfile.saveAs(path.join(downloadfloder,filename))
//     //or 
//     await downloadfile.saveAs(path.join(__dirname,"../../.github/workflows/downloadedfile",filename))
//     await page.waitForTimeout(2000)

    //if we want to save our file with a specific file name with a folder
//     await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
//     await page.locator('#fileName').fill("new file.txt")
//    let [downloadfile]=await Promise.all([
//     page.waitForEvent("download"),
//     await page.getByRole("button",{name:"Download"}).click()])
//     let downloadfloder="C:/Playwright/.github/workflows/downloadedfile"
//     let filename=downloadfile.suggestedFilename()
//     await downloadfile.saveAs(path.join(downloadfloder,filename))
//     //or 
//     await downloadfile.saveAs(path.join(__dirname,"../../.github/workflows/downloadedfile",filename))
//     await page.waitForTimeout(2000)

    //if i want to download the file and save it in local system folder
//     await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
//     await page.locator('#fileName').fill("new file.txt")
//    let [downloadfile]=await Promise.all([
//     page.waitForEvent("download"),
//     await page.getByRole("button",{name:"Download"}).click()])
//     let downloadfloder="D:/OneDrive/Desktop/download"
//     let filename=downloadfile.suggestedFilename()
//     await downloadfile.saveAs(path.join(downloadfloder,filename))
//     //or 
//     await page.waitForTimeout(2000)

//another approach like without using promise.all()
    // await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
    // await page.locator('#fileName').fill("file1.txt")
    // let download=page.waitForEvent("download")
    // await page.getByRole("button",{name:"Download"}).click()
    // let downloadfile=await download
    // let downloadfloder="D:/OneDrive/Desktop/download"
    // let filename=downloadfile.suggestedFilename()
    // await downloadfile.saveAs(path.join(downloadfloder,filename))
    // await page.waitForTimeout(2000)

    //verify the file saved in the particular folder
    await page.getByRole("textbox",{name:"Enter text here"}).fill("downloading the file")
    await page.locator('#fileName').fill("file1.txt")
    let download=page.waitForEvent("download")
    await page.getByRole("button",{name:"Download"}).click()
    let downloadfile=await download
    let downloadfloder="D:/OneDrive/Desktop/download"
    let filename=downloadfile.suggestedFilename()
    let fullpath=path.join(downloadfloder,filename)
    await downloadfile.saveAs(path.join(downloadfloder,filename))
    await page.waitForTimeout(2000)
    //verify if saved
    if(fs.existsSync(fullpath)){
        console.log(`file exists :${fullpath}`);
      }
      else{
        console.log(`no such file exists`);
      }
    })
