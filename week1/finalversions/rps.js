console.log('script loaded');

function playerAction() {
    var player1 = prompt('Ready Player 1? Enter rock, paper, or scissors.');
    var player2 = prompt('Ready Player 2? Enter rock, paper, or scissors.');
    if(player1==player2){
        alert('Draw!')
        playAgain();
    }
    else if((player1 =='paper' && player2 =='rock') || (player1=='rock'&&player2=='scissors') ||(player1='scissors'&&player2=='paper')){
        alert('Player 1 wins!')
        playAgain();
    }
else
    alert('Player 2 wins!')
    playAgain();
}
function playAgain(){
    var repeat = prompt('Play again? Enter yes or no.');
    if(repeat=='yes'){
        playerAction();
    }
    else if (repeat=='no'){
        return false;
    }
else {
    prompt(repeat);
}
}
playerAction();
