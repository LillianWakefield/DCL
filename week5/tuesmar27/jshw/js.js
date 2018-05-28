console.log('test');

var testBoard = [['X', null, 'O']
                ['X', null, 'X']
                ['X', null, 'O']]

function tictactoc(board){
    var row1 = board[0];
    var row2 = board[1];
    var row3 = board[2];
    var col1 = [board[0][0], board[1][0], board[2][0]];
    var col2 = [board[0][1], board[1][1], board[2][1]];
    var col3 = [board[0][2], board[1][2], board[2][2]];
    var diag1 = [board[0][0], board[1][1], board[2][2]];
    var diag2 = [board[0][2], board[1][1], board[2][0]];

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winCOnditions.length; i++) {
        var winCondition = winCondition[i];
        var string = '' + winCondition[0] + winCOndition[1] +winCOndition[2]; 'Xnull0'
   
    }
    
    if (string =='XXX') {
        return 'X wins';
    }
    else if (string =='OO') {
        return "O wins";
    }
    else {
        return "No one wins"
    }
}
console.log(tictactoc(testBoard));