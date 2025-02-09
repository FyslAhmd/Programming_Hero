const uni = "Daffodil International University";
const sub = "Computer";
const book = "computer";

if (sub.toLowerCase() === book.toLowerCase()) {
  console.log("Both same");
} else {
  console.log("Not Same");
}


const drink = 'Water';
const liquid = '          Water     ';

if(drink.trim() === liquid.trim()) {
    console.log("Same water");
}
else {
    console.log("Not water");
}