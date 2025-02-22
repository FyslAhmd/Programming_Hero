function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let calcAvg,sum = 0;
    for(let i=0; i<waitingTimes.length; i++) {
        sum+=waitingTimes[i];
    }
    calcAvg = Math.round(sum / waitingTimes.length);
    let serialLeft = serialNumber-waitingTimes.length-1;
    let result = serialLeft*calcAvg;

    return result;
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));