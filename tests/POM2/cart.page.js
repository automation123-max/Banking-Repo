class cart{
    constructor(page){
        this.placeorderbutton=page.getByRole("button",{name:"Place Order"})
    }
}
export default cart