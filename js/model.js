"use strict";
//model
let model = {
    currentPage: "game",
    mainPage: {
        sidebar: false,
        text: '',
    },
    gamePage: {
        currentNumber: 0,
        currentNumberDisplay: "000",
        numbers: [],
        hasSetNumber: true,
        feedback: "",
        winOrLoss: false,
    },
};
