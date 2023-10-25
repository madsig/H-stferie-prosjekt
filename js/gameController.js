"use strict";
function changeToMainPage() {
    model.currentPage = "main";
    updateMainView();
}
function getRandomNumber() {
    const gamePage = model.gamePage;
    //if (!gamePage.hasSetNumber) return;
    let number = Math.floor(Math.random() * 999) + 1;
    gamePage.currentNumber = number;
    let numberString = String(number);
    gamePage.currentNumberDisplay = numberString.length === 3 ? numberString
        : numberString.length === 2 ? "0" + numberString
            : "00" + numberString;
    console.log(number, gamePage.currentNumberDisplay);
    gamePage.hasSetNumber = gamePage.numbers.includes(number) ? true : false;
    console.log("Repeat number: " + gamePage.numbers.includes(number));
    updateGameView();
}
function setNumber(index) {
    const gamePage = model.gamePage;
    if (gamePage.hasSetNumber)
        return;
    gamePage.numbers[index] = gamePage.currentNumber;
    gamePage.hasSetNumber = true;
    checkWinLoss();
    updateGameView();
}
function checkWinLoss() {
    console.log(model.gamePage.numbers);
    let filteredArray = model.gamePage.numbers.filter(Boolean);
    console.log(filteredArray);
    if (filteredArray.every((value, index, array) => index === 0 || value >= array[index - 1])) {
        //check win
        console.log('checking win');
        if (model.gamePage.numbers.includes(0)) {
            //win
            console.log('win');
            model.gamePage.feedback = "😄";
            model.gamePage.winOrLoss = true;
        }
        else
            console.log('no');
    }
    else {
        //loose
        console.log('loose');
        model.gamePage.feedback = "😭";
        model.gamePage.winOrLoss = true;
    }
}
