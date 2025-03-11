function a() {
    b();
    console.log('a');
}
function b() {
    c();
    console.log('b');
}
console.log("Hello");
setTimeout(() => {
    console.log('Ami Timeout');
}, 3000);

function c() {
    d();
    console.log('c');
}
function d() {
    e();
    console.log('d');
}
function e() {
    console.log('e');
}

a();