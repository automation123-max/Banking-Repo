class createticket{
    constructor(page){
        this.subjectTextField=page.locator('#subject')
        this.tasktypedropdwn=page.locator('//select[@class="form-control select" and @name="tasktype"]')
        this.priordropdwn=page.locator('//select[@class="form-control select" and @name="priority"]')
        this.DescriptionTextarea=page.locator('//textarea[@name="description"]')
        this.sendbutton=page.getByRole("button",{name:'send'})

    }
}
export  default createticket