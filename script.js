
main();
function main(){
    let uChoice = 0;
    let cChoice = 0;
    while (uChoice == cChoice){
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice == cChoice) alert ("we both choose " + cChoice);
    }
    findWinner(uChoice,cChoice);
}

function userTurn(){
    moves = ["r","p","s"];
    let choice = prompt("enter r p or s.");
    if (moves.includes(choice)){
        console.log(choice);
        return choice;
    } 
    else {
        alert("choose r p or s")
        return userTurn();
    }
}

function cpuTurn(){
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3);
    return moves[choice];
}

function findWinner(u, c){
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];
            }
        } 
    alert(" you picked " + u + " and I picked " + c + " the winner is " + winner);
}
