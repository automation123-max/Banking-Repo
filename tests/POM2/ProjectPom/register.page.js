class register{
    constructor(page){
        this.fullnametextfield=page.locator('#name')
        this.emailtextfield=page.locator('#email')
        this.passwordtextfield=page.locator('#password')
        this.mobilenotextfield=page.locator('#mobile')
        this.workstatusoptionexp=page.locator('(//div[@class="textWrap"])[1]')
        this.workstatusoptionfresh=page.locator('(//div[@class="textWrap"])[2]')
        this.checkbox=page.locator('//i[@class="ico resman-icon resman-icon-check-box"]')
        this.registerbutton=page.getByRole("button",{name:"Register now"})
    }
}
export default register