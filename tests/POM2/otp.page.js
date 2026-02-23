class otp{
    constructor(page){
        this.mobnotextField=page.locator('//input[@class="c3Bd2c yXUQVt"]')
        this.requestotpbutton=page.getByRole("button",{name:"Request OTP"})
        this.continuebutton=page.getByRole("button",{name:"CONTINUE"})
        this.enterotpTF=page.locator('//input[@class="c3Bd2c yXUQVt"]')
        this.signupbutton=page.locator('//button[@class="dSM5Ub Kv3ekh KcXDCU"]')
    }
}
export default otp