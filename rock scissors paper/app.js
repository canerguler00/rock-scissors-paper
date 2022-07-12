let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors"
}

function win(userChoice, computerChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3)
    const smallCompWord = "comp".fontsize(3)
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} You WIN!🔥🔥🔥`
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 400)
}



function lose(userChoice, computerChoice){
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3)
    const smallCompWord = "comp".fontsize(3)
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} You LOSE!💩💩💩`
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 400)
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice)
    const smallUserWord = "user".fontsize(3)
    const smallCompWord = "comp".fontsize(3)
    result_p.innerHTML =  `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} It' a draw :/`
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 400)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch( userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
           lose(userChoice, computerChoice);
           break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r")
    })
    paper_div.addEventListener("click", function () {
        game("p")
    })
    scissors_div.addEventListener("click", function () {
        game("s")
    })
}
main()