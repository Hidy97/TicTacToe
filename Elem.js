class Elem{
    constructor(szuloElem, index){
        this.index = index;
        
        szuloElem.append("<div class='elem'><p></p></div>");

        this.divElem = $("article div:last-child");

        this.pElem = $("article div:last-child p")
        
        this.divElem.on("click", () => {
            //this.pElem("X")
            this.esemenyTrigger();
        });
        //console.log("Példányosítás")
    }

    setElem(ertek){
        this.pElem.text(ertek)
    }

    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKattint", {detail: this});
        window.dispatchEvent(esemeny);
    }
}

export default Elem;