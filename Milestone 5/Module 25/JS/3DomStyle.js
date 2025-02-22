// const mainId = document.getElementById('main-title');
// mainId.style.color = 'red';
// mainId.style.backgroundColor = 'black';
// mainId.style.fontSize = '50px';

// console.log(mainId.getAttribute('class'));

// console.log(mainId.classList);
// console.log(mainId.classList.add('class4'));
// console.log(mainId.classList);
// console.log(mainId.classList.remove('class2'));
// console.log(mainId.classList);

// mainId.setAttribute('title', 'This is a title');


//
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '1px solid black';
    section.style.marginTop = '10px';
    section.style.borderRadius = '10px';
}

const yellowBg = document.querySelector('#bg-yellow');
yellowBg.style.backgroundColor = 'yellow';

const greenBg = document.querySelector('#bg-green');
greenBg.classList.add('green-bg');