class login{
    constructor(page){
        this.usenameTF=page.locator('//input[@name="username"]')
        this.passwordTF=page.locator('//input[@name="password"]')
        this.loginbutton=page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }
}export default login