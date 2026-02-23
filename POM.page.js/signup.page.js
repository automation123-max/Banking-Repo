class signup{
    constructor(page){
        this.nameTextField=page.locator('#name')
        this.emailTextField=page.locator('#email')
        this.passwordTextField=page.locator('#password')
        this.repasswordTextField=page.locator('#cpassword')
        this.contactTextField=page.locator('#txtpassword')
        this.maleRadio=page.locator('//input[@type="radio" and @value="m" ]')
        this.femaleRadio=page.locator('//input[@type="radio" and @value="f" ]')
        this.submitButton=page.locator('//input[@class="btn btn-primary btn-cons pull-right"]')



    }
}
export default signup