document.getElementById('createPostBtn').addEventListener('click', () => {
    document.getElementById('createPostPage').classList.toggle('hidden');
});

document.getElementById('submitPostBtn').addEventListener('click', () => {
    const content = document.getElementById('postContent').value;
    if (content) {
        addPost(content);
        document.getElementById('postContent').value = '';
        document.getElementById('createPostPage').classList.add('hidden');
    }
});

document.getElementById('homeBtn').addEventListener('click', () => {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('favoritePage').classList.add('hidden');
});

document.getElementById('favoriteBtn').addEventListener('click', () => {
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('favoritePage').classList.remove('hidden');
});

document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});
    document.getElementById('hamburger').classList.toggle('hidden');


document.getElementById('closeNav').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
    document.getElementById('hamburger').classList.toggle('hidden');
});

function addPost(content) {
    const postContainer = document.createElement('div');
    postContainer.className = 'post';

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const postOptions = document.createElement('div');
    postOptions.className = 'post-options';

    const threeDots = document.createElement('button');
    threeDots.textContent = '⋮';
    threeDots.className = 'three-dots';

    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editPost(postContainer, postContent));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => postContainer.remove());

    const favoriteBtn = document.createElement('button');
    favoriteBtn.textContent = 'Favorite';
    favoriteBtn.addEventListener('click', () => addToFavorites(postContainer.cloneNode(true)));

    dropdown.append(editBtn, deleteBtn, favoriteBtn);
    postOptions.append(threeDots, dropdown);
    postContainer.append(postContent, postOptions);
    document.getElementById('postsContainer').appendChild(postContainer);
}

function editPost(postContainer, postContent) {
    const newContent = prompt('Edit your post:', postContent.textContent);
    if (newContent) {
        postContent.textContent = newContent;
    }
}

function addToFavorites(postContainer) {
    document.getElementById('favoritePostsContainer').appendChild(postContainer);
}
