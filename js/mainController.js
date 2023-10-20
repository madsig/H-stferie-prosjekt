"use strict";
function engageSidebar() {
    model.mainPage.sidebar = !model.mainPage.sidebar;
    updateMainView();
}
function addText() {
    model.mainPage.text += 'Hallo!<br/>';
    updateMainView();
}
function removeText(event) {
    model.mainPage.text = '';
    event.stopPropagation();
    updateMainView();
}
function changeToGamePage() {
    model.currentPage = "game";
    updateGameView();
}
