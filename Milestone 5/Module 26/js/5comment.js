document.getElementById('post-comment').addEventListener('click', function() {
    const comment = document.getElementById('comment').value;
    const commentContainer = document.getElementById('comment-container');
    const commentP = document.createElement('p');
    commentP.innerText = comment;
    commentP.classList.add('comment');
    commentContainer.appendChild(commentP);

    document.getElementById('comment').value = '';
})