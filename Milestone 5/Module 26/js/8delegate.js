const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function(event) {
//         event.target.parentNode.removeChild(event.target);
//     });
// }


//
document.getElementById('item-list').addEventListener('click', function(event) {
    event.target.parentNode.removeChild(event.target);
});


//
document.getElementById('btn-add').addEventListener('click', function(event) {
    const parentNode = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerText = 'Brand new item';
    li.classList.add('item');
    parentNode.appendChild(li);
})