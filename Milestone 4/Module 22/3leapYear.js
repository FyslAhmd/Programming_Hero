function leapYear(year) {
    if(year % 4 === 0 && year % 100 !==0) {
        return true;
    }
    if(year % 400 === 0) {
        return true;
    }
    return false;
}

const isLeap = leapYear(2016);
console.log(isLeap);

const isLeap2 = leapYear(2100);
console.log(isLeap2);

const isLeap3 = leapYear(2400);
console.log(isLeap3);