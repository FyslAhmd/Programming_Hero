function oddAvg(numbers) {
    let sum = 0,count = 0;
    for(const number of numbers) {
        if(number % 2 === 1) {
            sum+=number;
            count++;
        }
    }
    const avg = sum / count;
    return avg;
}

const avg = oddAvg([42,13,58,65,81,96,7,5]);
console.log('Avegrage is:',avg);