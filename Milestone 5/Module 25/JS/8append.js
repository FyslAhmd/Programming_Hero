const frutiList = document.getElementById('fruits-list');
console.log(frutiList);

const li = document.createElement('li');
li.innerText = 'Banana';
frutiList.appendChild(li);

const mainConteiner = document.getElementById('main-content');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Hello World';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.innerText = 'Samsung';
li2.innerText = 'Apple';
li3.innerText = 'Xiaomi';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
section.appendChild(ul);
mainConteiner.appendChild(section);


//
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Best Dress</h1>
<ul>
    <li>Shirt</li>
    <li>T-shirt</li>
    <li>Jeans</li>
</ul>
`;
mainConteiner.appendChild(sectionDress);