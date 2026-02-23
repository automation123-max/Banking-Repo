class selectedproductdetails{
    constructor(page){
//   this.cartlinksvg=page.locator('//div[@style="transform:translateY(0px) scale(1)"]')
        this.cartlinksvg=page.getByRole('graphics-symbol')
  this.cartlink=page.locator('//a[@class="SXucWY"]')

  this.cartlinklap=page.locator('//div[@style="transform: translateY(0px) scale(1);"]')  
  }
}
export default selectedproductdetails