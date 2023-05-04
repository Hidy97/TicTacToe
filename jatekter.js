import Elem from "./Elem.js";

class Jatekter {
    #lepes
    #aktAllapotLista = []
    constructor() {
        this.#lepes = 0;
        this.#aktAllapotLista = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
        const szuloElem = $("article");
        for (let index = 0; index < 9; index++) {
            const elem = new Elem(szuloElem, index);

        }

        $(window).on("elemKattint", () => {
            console.log(event.detail)
            let aktElem = event.detail;
            if (this.#lepes % 2 == 0) {
                aktElem.setElem("X")
                this.#aktAllapotLista[event.detail.index] = "X";
            } else {
                aktElem.setElem("O")
                this.#aktAllapotLista[event.detail.index] = "O";
            }

            this.#lepes++;
            console.log(this.#aktAllapotLista);
            this.ellenorzes()
        });
    }

    ellenorzes(){
        //itt ellenőrzöm ki nyert
        //X, O, döntetlen, nincs még vége
        return "X";
    }
}

export default Jatekter;