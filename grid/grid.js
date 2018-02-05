export class Grid {
    constructor (grid, buttons){
        this.grid = grid
        this.buttons = buttons
        this.bindEvents()
    }
    bindEvents(){
        this.grid.addEventListener('click', (event) =>{
            const clickedElement = event.target
            Array.from(this.grid).map((element) => {
                if(element === clickedElement) {
                    clickedElement.classList.toggle('grid-card--selected')
                } else {
                    clickedElement.classList.remove('grid-card--selected')
                }
            })
            
        })
    }
}

