console.log('script loaded');


var board = [[null, null, null], 
                 [null, null, null], 
                 [null, null, null]];
var playerTurn = "X";
function positionState(row, column) {
    return board[row][column];
}

function printBoard() {
    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; 
    console.log(row1);
    console.log(row2);
    console.log(row3);
}
function setValue(row, column) {
        board[row][column] = playerTurn;
        printBoard();
}



function playerAction() {
    var row = parseInt(prompt("enter a row"));
    var column = parseInt(prompt("enter a column"));
    if (positionState(row, column) == null) {
		setValue(row, column);  
    if (playerTurn === "X"){
            playerTurn = "O";
        }
        else if (playerTurn="O"){
            playerTurn = "X";
    }
}
}
printBoard();

function checkVictory() {

    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["O", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["O", null, "O"]

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {

       var winCondition = winConditions[i]; // ["X", null, "O"]

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; 

        if (string == "XXX") {
           return "X wins";
      } else if (string == "OOO") {
            return "O wins";
       }
    }

    return "No one wins" 
}

while (checkVictory() == "No one wins") {
    playerAction();
}