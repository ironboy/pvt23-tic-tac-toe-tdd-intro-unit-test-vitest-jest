export default class Board {

    constructor() {
        this.matrix = [...new Array(3)]
            .map(row => [...new Array(3)].map(cell => ' '));
    }

    makeMove(color, row, column) { }

}