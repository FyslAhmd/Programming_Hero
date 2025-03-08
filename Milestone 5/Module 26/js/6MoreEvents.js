document.getElementById('btn-mouse').addEventListener('mouseenter', function() {
    console.log('Mouse Enter');
});


document.getElementById('btn-mouse').addEventListener('mouseout', function() {
    console.log('Mouse Enter');
});

document.getElementById('user-name').addEventListener('focus', function() {
    console.log('Focus');
});

document.getElementById('key-press').addEventListener('keydown', function(event) {
    console.log(event.target.value);
});

//

document.getElementById('secret-info').addEventListener('keyup', function(event) {
    const info = event.target.value;
    const btnDelete = document.getElementById('btn-delete');
    if(info === 'delete') {
        btnDelete.removeAttribute('disabled');
    }
    else {
        btnDelete.setAttribute('disabled',true);
    }
});