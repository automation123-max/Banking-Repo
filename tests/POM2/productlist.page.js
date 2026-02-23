class productlist{
    constructor(page){
        this.productdata=page.locator('(//div[@class="col col-7-12"])[1]')
        this.lapdata=page.locator('(//div[@class="col col-7-12"])[1]')
    }
}
export default productlist