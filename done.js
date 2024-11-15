
main();

var choices = ["r", "p", "s"];

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

function userTurn(){
    let choice = prompt(" enter r,p, or s");
    if (!choices.includes(choice)){
       alert("enter r,p, or s");
       return userTurn();
    }
    return choice;
}



function cpuTurn(){
    let choice = Math.floor(Math.random()*2);
    return choices[choice];
    
}

function findWinner(u, c){
    let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i< winArray.length; i++){
            if (winArray[i][0] == u && winArray[i][1]==c){
                winner= winArray[i][2];

            }
        }
       
}

