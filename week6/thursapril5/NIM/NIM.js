
 var board = ['*','*','*','*','*','*','*','*',
            '*','*','*','*','*','*','*','*',];
var playerTurn = "Player 1" 

 function print (){
    console.log(board);
    console.log(board.length);
};
function changePlayer(){
    if(playerTurn == "Player 1"){
        playerTurn = "Player 2";
        (alert('Ready Player 2?'));

    }
    else if(playerTurn == "Player 2"){
        playerTurn = 'Player 1';
        (alert('Ready Player 1?'));
    }  
}
function playerAction() {
    var numberStones = parseInt(prompt("How many stones do you want to remove(1, 2, or 3)?"));
    if (numberStones == 1){
        board.pop();
        if (board.length<=0){
            return;
        }
        print();
        changePlayer();
    }
    else if (numberStones == 2){
        board.pop();
        board.pop();
        if (board.length<=0){
            return;
        }
        print();
        changePlayer();
}
else if (numberStones == 3){
    board.pop();
    board.pop();
    board.pop();
    if (board.length<=0){
        return;
    }
    print();
    changePlayer();
}
else {
    (alert("Please choose 1,2 or 3"));
}
}
function endGame (){
    if (board.length == 0) {
        return "Player 1 Wins!"
    }

return "Next Player's turn"

}
print();
(alert('Ready Player 1?'));
while (board.length > 0) {
    playerAction();
}
if (board.length <= 0 && playerTurn == 'Player 1') {
    (alert('Game Over, Player 1 Wins!'))
}
if (board.length <= 0 && playerTurn == 'Player 2') {
    (alert('Game Over, Player 2 Wins!'))
}
