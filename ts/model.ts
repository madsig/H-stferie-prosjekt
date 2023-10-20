//typescript
interface model {
    currentPage: string;

    mainPage: {
        sidebar: boolean;
        text: string;
    };

    gamePage: {

    };
}

//model
let model = {
    currentPage: "main",
    
    mainPage: {
        sidebar: false,
        text: '',
    },

    gamePage: {

    },
};