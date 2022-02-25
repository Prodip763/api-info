function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data));
}
loadPosts();

function displayPost(posts) {
    const postContainer = document.getElementById('post');
    for (const post of posts) {
        const div = document.createElement('div')
        div.classList.add('post');
        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>`;
        postContainer.appendChild(div);
    }
}

function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayPost(data));
}
loadComment();

function displayComments(data) {
    const commentList = document.getElementById('comment');
    for (const user of data) {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${user.name}</h3>
        <p>${user.body}</p>
        `;
        ul.appendChild(li);

    }
}