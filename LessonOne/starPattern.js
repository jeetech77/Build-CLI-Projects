const readlineSync = require('readline-sync');

let numOfRows = readlineSync.questionInt("Enter the number of rows to be printed...\n");
let patternStyle = readlineSync.keyInYN("Do you want to print in inverted format...?");
if (patternStyle) {
    console.log("Normal Format\n");
    normalPatter();
}
else {
    console.log("Inverted Format \n");
    invertedPatter();
}

function normalPatter() {
    for (let i = 0; i <= numOfRows; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
function invertedPatter() {
    for (let i = numOfRows; i >= 0; i--) {
        let str = '';
        for (let j = i; j > 0; j--) {
            str += "*";
        }
        console.log(str);
    }
}