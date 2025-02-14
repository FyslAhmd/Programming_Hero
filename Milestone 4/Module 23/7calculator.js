function add(x,y) {
    return x+y;
}
function sub(x,y) {
    return x-y;
}
function mul(x,y) {
    return x*y;
}
function div(x,y) {
    return x/y;
}

function calculator(a,b,operation) {
    if(operation==='add') {
        return add(a,b);
    }
    else if(operation==='sub') {
        return sub(a,b);
    }
    else if(operation==='mul') {
        return mul(a,b);
    }
    else if(operation==='div') {
        return div(a,b);
    }
    else {
        return "wrong operation command";
    }
}

const result = calculator(5,7,'mul');
console.log(result);