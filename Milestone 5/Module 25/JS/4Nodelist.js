const placeContainer = document.querySelector('#bg-green');
console.log(placeContainer.childNodes);
console.log(placeContainer.childNodes[2]);
console.log(placeContainer.childNodes[0].nextSibling);


//
const li = document.createElement('li');
li.innerText = 'I am a new li';
console.log(li);

placeContainer.childNodes[1].appendChild(li);