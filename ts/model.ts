//typescript
interface model {
    currentPage: string;

    mainPage: {
        sidebar: boolean;
        text: string;
    };

    gamePage: {
        currentNumber: number;
        currentNumberDisplay: string;
        numbers: (number | undefined)[];
        hasSetNumber: false;
        feedback: string;
        winOrLoss: boolean;
    };
}

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
        numbers: [] as number[],
        hasSetNumber: true,
        feedback: "",
        winOrLoss: false,
    },
};