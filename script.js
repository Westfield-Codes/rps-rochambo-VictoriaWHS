main();
function main(){
    let uChoice = 0;
    let cChoice= 0;
    while (uChoice == cChoice){
        
        uChoice = userTurn();
        cChoice = cpuTurn();
        if (uChoice==cChoice) alert(" we both choose " + cChoice);
    }
    findWinner(uChoice,cChoice);
}
//Need to test and see if correct, moving on for now//

function userTurn(){
    let choice = prompt(" enter r,p, or s");
    if (choice != "r" && choice != "p" && choice != "s"){
       alert("enter r,p, or s");
       userTurn();
    }
    return choice;
}

//havent tested but created by Ari so probally fine//

function cpuTurn(){
    let choice = Math.floor(Math.random()*2);
    if (choice == 0) return "r";
    if (choice == 1) return "p";
    if (choice == 2) return "s";
}

//looks right, asked for help so should be correct//

function findWinner(uChoice, cChoice){
    let winner = "Undefined";
    if (uChoice == "r" ){
        if (cChoice =="s") winner = "player";
        else winner = "computer";
    }
}

//Almost do done//