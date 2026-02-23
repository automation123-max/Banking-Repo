class pim {
    constructor(page){
        this.addemployeelink=page.locator('//a[.="Add Employee"]')
        this.firstnameTF=page.locator('//input[@name="firstName"]')   
        this.lastnameTF=page.locator('//input[@name="lastName"]') 
        this.empidTF=page.locator('(//input[@class="oxd-input oxd-input--active" ])[2]')
        this.cancelbutton=page.getByRole("button",{name:" Cancel "})
        this.savebutton=page.getByRole("button",{name:" Save "})
        this.emplistlink=page.locator('//a[.="Employee List"]')
        this.empnameTF=page.locator('(//input[@placeholder="Type for hints..."])[1]')
        this.searchbutton=page.locator('//button[@type="submit"]')
        this.useroption=page.locator('//span[@class="oxd-userdropdown-tab"]')
        this.logoutlink=page.locator('//a[.="Logout"]')
        //this.EmpIdTf=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        }
}
export default pim