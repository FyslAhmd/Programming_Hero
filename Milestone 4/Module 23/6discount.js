function discountPrice(quantity) {
    if(quantity <= 100) {
        const total = quantity*100;
        return total;
    }
    else if(quantity <=200) {
        const total = (100*100) + ((quantity-100)*90);
        return total;
    }
    else {
        const total = (100*100)+(100*90)+((quantity-200)*70);
        return total;
    }
}

const total = discountPrice(201);
console.log(total);