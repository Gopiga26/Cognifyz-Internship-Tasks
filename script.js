// Fetch posts from the JSONPlaceholder API
function fetchPosts() {
    // URL of the API
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from the API
    fetch(apiURL)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Select the container for posts
            const postsContainer = document.querySelector('.posts');

            // Clear any existing posts
            postsContainer.innerHTML = '';

            // Loop through the data and create post elements
            data.slice(0, 10).forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}
