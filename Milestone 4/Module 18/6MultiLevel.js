const price = 4000;

if(price >= 5000) {
    const discount = price * 0.1;
    console.log(discount);
}
else if(price >= 2500) {
    const discount = price * 0.05;
    console.log(discount);
}
else {
    console.log(price);
}



const age = 62;
const prices = 500;
if(age<12) {
    console.log("Eat free");
}
else if(age>=60) {
    const discount = prices * 0.5;
    console.log(discount);
}
else {
    console.log(prices);
}