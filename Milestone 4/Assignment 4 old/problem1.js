function calculateTax(income, expenses) {
    if(typeof income!=='number' || typeof expenses!=='number' || income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    let taxAmount = income-expenses;
    let mainTax = taxAmount*0.20;
    return mainTax;
}

console.log(calculateTax(10000,3000));
console.log(calculateTax(34000,1753));
console.log(calculateTax(5000,1500));
console.log(calculateTax(7000,7000));
console.log(calculateTax(-5000,2000));
console.log(calculateTax(6000,-1500));
console.log(calculateTax(6000,"Faysal"));