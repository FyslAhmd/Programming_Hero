
function sum() {
    let counter = 0;
    return () => {
        counter+=1;
        console.log(counter);
    }
}

const result = sum();
result();
result();
result();
result();
result();

const result2 = sum();
result2();
result2();
result2();
result2();
result2();