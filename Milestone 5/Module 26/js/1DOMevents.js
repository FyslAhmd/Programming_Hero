function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

const btnBlue = document.getElementById('btn-make-blue');
btnBlue.onclick = function() {
    document.body.style.backgroundColor = 'blue';
}

const btnPurple = document.getElementById('btn-make-purple');
btnPurple.onclick = makePurple;

function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

document.getElementById('btn-make-red').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
})

document.getElementById('btn-make-gold').addEventListener('click', function() {
    document.body.style.backgroundColor = 'gold';
})

document.getElementById('input-box').addEventListener('keypress', function() {
    console.log('Key Pressed');
})