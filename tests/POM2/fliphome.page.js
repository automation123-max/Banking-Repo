class fliphome{
    constructor(page){
        this.searchtextfield=page.locator('(//input[@class="nw1UBF v1zwn25"])[1]')
        this.productlist=page.locator('//div[@class="VDtK0l _1psv1ze2u _1psv1ze53 _1psv1ze9x _1psv1ze7o"]')
        this.laplist=page.locator('//div[@class="pVNZxj KIiP4i"]')
    }
}
export default fliphome