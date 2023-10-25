"use strict";
function updateGameView() {
    if (model.currentPage != "game")
        return;
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div>Game page!</div>
        <button onclick="changeToMainPage()">Bytt side</button>
        
        <div class="gamePageContainer">
            <div class="gamePageLeft">${getGamePage()}</div>
            <div class="gamePageNumbers">
                ${model.gamePage.currentNumberDisplay}
            </div>
            <div class="gamePageDisplay">${model.gamePage.feedback}</div>
            <div class="gamePageButton">
                <button class="${model.gamePage.winOrLoss || !model.gamePage.hasSetNumber ? 'numbersButtonDisabled' : 'numbersButton'}" 
                onclick="getRandomNumber()">Nytt tall!</button>
            </div>
        </div>
    `;
}
;
function getGamePage() {
    const numbers = model.gamePage.numbers;
    let html = '';
    for (let i = 0; i < 20; i++) {
        html += /*HTML*/ `
            <div class="gamePageLine" onclick="setNumber(${i})">
                <div class="gamePagePlace">${i + 1}</div>
                <div class="gamePageNumber">${numbers[i] == undefined ? '' : numbers[i]}</div>
            </div>
        `;
    }
    return html;
}
