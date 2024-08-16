# Specifications Tic-Tac-Toe

## Board
"As a user i want the Board class to manage setting up the board, handle moves on the board and displaying the board"

### Detailed specs

#### Tested
* When a new board is created a property called matrix should be set to an empty board. An empty board should be a two-dimensional array of 3x3 elements where each element should be a string containing a space ' '.

* ...

#### Not tested
* There should method named makeMove. The first argument should be color (a string value of either 'X' or 'O') and the second argument should be which row you want to place your piece on and the third argument should which column you want to place your piece on.
* Make move should return true for a valid move and place the piece on the board. For an invalid move (there is already a piece in the position, it is not the player with the specified colors turn or the game is over) the method should return false and not change the board.
* If a valid move is made the the whose turn it is should be updated. Up to the developer how to remember this state. (Sometimes implementation specifics are up to the programmer, since we will not run tests directly to see how the program rememvbers whose turn.)