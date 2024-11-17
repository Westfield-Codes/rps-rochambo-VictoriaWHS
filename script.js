main();

function main(){
    let score = [0,0]
    let winner = 3;
    let rounds = setRounds();
    while (round <= rounds){
        winner = rpsRound();
        score[winner]++
    }
    alert("You have " + score[0] + " and I have"+  score[1]);
    if (score[0]>score[1]) alert("You win!");
    else alert("I win!");
}

function setRounds(){
    let rounds = propmt("How many rounds?");
    if (rounds%2 ==0) alert("must be odd");
    //fix this line above //
    else return rounds;
}
function rpsRound(){
    let uChoice = 0;
    let cChoice =0;
    while (uChoice == cChoice){
        let uChoice= userTurn();
        let cChoice= cpuTurn();
        if (uChoice == cChoice) alert ("we both choose " + cChoice);
        else return rpsRound();
    }
    let winner = findWinner(c,u);
    let players = ["you","i"];
    let win= players.indexOf(winner);
    return win;
}
function userTurn(){
    moves = ["r","p","s"];
    let choice = prompt("enter r p or s.");
    if (moves.includes(choice)) 
        return choice;
    else alert("choose r p or s")
    return userTurn();
}
function cpuTurn(){
    let moves = ["r","p","s"];
    let choice = Math.floor(math.random()*2)+1;
    return moves[choice];
}
