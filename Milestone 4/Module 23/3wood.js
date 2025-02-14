function woodQuantity(chair,table,bed) {
    const chairWood = 3,tableWood = 10,bedWood = 50;
    totalWood = (chair*chairWood)+(table*tableWood)+(bed*bedWood);
    return totalWood;
}

const total = woodQuantity(1,1,4);
console.log(total);