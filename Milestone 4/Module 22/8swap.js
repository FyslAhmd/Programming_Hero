let a = 5,b=7,temp;

console.log('Before:',a,b);
temp = a;
a = b;
b = temp;

console.log('After:',a,b);


//another way
let x = 5,y=7;
console.log('before:',x,y);
[x,y] = [y,x];
console.log('after:',x,y);
