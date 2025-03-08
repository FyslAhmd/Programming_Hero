document.getElementById('update-title').addEventListener('click', function() {
    const title = document.getElementById('title');
    title.innerText = 'Title Changed';
});

document.getElementById('login-btn').addEventListener('click', function() {
    const btnLogin = document.getElementById('login-peragraph');
    btnLogin.innerText = 'Login Successfull';
})

document.getElementById('update-btn').addEventListener('click', function() {
    const getName = document.getElementById('input-name').value;
    const updateName = document.getElementById('name');
    updateName.innerText = 'Name '+getName;
});