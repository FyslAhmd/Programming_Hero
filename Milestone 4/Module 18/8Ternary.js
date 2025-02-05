const age = 10;
age >= 18 ? console.log("Vote dao") : console.log("Ghumai Thako");


let price = 1500;
const isLeader = true;
price = isLeader == true ? 0 : price + 100;
console.log(price);

price = 1500;
price = isLeader == true ? price > 1000 ? price / 2 : 0 : price + 100;
console.log(price);