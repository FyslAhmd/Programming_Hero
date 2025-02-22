console.log('Hello fro  JS');

const student = {
    name: 'John',
    id: 123,
    study: function(){
        console.log('Study');
    }
}

console.log(document.getElementsByTagName('h1'));
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}