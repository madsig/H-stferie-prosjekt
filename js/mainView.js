"use strict";
function updateMainView() {
    if (model.currentPage != "main")
        return;
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="mainPageContainer${model.mainPage.sidebar ? 'Sidebar' : ''}">
            <div class="header"><h1>Header</h1></div>
            <div class="sidebar" onclick="engageSidebar()">
                <h4>Sidebar</h4>
                <div>${getSidebarText()}</div>
            </div>
            <div class="body">
                <h2>Body</h2>
                <button onclick="addText()">Legg til tekst</button>
                <div>${model.mainPage.text}</div>
            </div>
            <div class="rightGap"><h4>Right gap</h4></div>
            <div class="bottom">
                <h3>Bottom</h3>
                <button onclick="changeToGamePage()">Bytt side</button>
            </div>
        </div>
    `;
}
;
function getSidebarText() {
    let sidebarText = '';
    if (!model.mainPage.sidebar)
        return sidebarText;
    sidebarText = /*HTML */ `
        <button onclick="removeText(event)">Fjern lagt til tekst</button>
    `;
    return sidebarText;
}
