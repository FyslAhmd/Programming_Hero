const getId = document.getElementById('main-title');
console.log(getId);

const getClassName = document.getElementsByClassName('imp-fruit');
for(const fruit of getClassName){
    console.log(fruit.innerText);
}

const someLi = document.querySelectorAll('li');
for(const li of someLi){
    console.log(li.innerText);
}

console.log(document.querySelector('li'));