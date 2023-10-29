let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let max = 0;

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("start");
        started = true;

        levelUp();
    }

})

function gameFlash(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");

    }, 250);


}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");

    }, 250);
}



function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    //random btn 
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq, "game");
    gameFlash(ranBtn);

}

function checkAns(idx) {



    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 2000);
        }
    }
    else {

        max = Math.max(max, level);
        h2.innerHTML = `Game Over ! <br> <i> Your Score is  ${level} and Highest Score is ${max} </i> <br> Press Any Key to Restart`;
        wrongFlash();
        reset();

    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq, "user");
    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}



function wrongFlash() {
    let body = document.querySelector("body");
    body.classList.add("wrongFlash");
    setTimeout(function () {
        body.classList.remove("wrongFlash");

    }, 200);
}