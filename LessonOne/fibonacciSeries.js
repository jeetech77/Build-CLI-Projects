let firstNum = 0;
let secNum = 1;
let fibonacciSeries = [firstNum,secNum];

for (let index = 0; index < 10; index++) {
    let temp = firstNum + secNum;
    fibonacciSeries.push(temp);
    firstNum=secNum;
    secNum= temp;
}
console.log(fibonacciSeries)