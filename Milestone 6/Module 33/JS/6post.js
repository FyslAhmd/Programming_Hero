const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then( data => {
        displayPost(data);
    })
}

const displayPost = (data) => {
    const postContainer = document.getElementById('postContainer');
    for(const user of data) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${user.title}</h1>
        <p>${user.body}</p>
        <button>Details</button>
        `;
        postContainer.appendChild(div);
    }
}

handlePost();