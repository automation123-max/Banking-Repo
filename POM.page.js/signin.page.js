class signin{
    constructor(page){
        this.emailTF=page.locator('#txtusername')
        this.passwordTF=page.locator('#txtpassword')
        this.loginButton=page.getByRole("button",{name:"login"})
    }
}
export default signin