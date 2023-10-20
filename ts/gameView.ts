function updateGameView() {
    if (model.currentPage != "game") return
    document.getElementById('app')!.innerHTML = /*HTML*/`
        <div class="gamePageContainer">
            <div>Game page!</div>
            <button onclick="changeToMainPage()">Bytt side</button>
        </div>
    `;
};