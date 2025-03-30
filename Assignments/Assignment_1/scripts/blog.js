/**
 * Author: Marcus Landry
 * StudentID: 100646671
 * Date Completed: 2024-02-13
 */

// Debug flag
const DEBUG = true;

/**
 * Debug logging function
 * @param {string} message - Message to log
 * @param {any} data - Optional data to log
 */
function debugLog(message, data = null) {
    if (DEBUG) {
        if (data) {
            console.log(`[DEBUG] ${message}:`, data);
        } else {
            console.log(`[DEBUG] ${message}`);
        }
    }
}

/**
 * Fetches blog posts from JSONPlaceholder API and creates blog cards
 * @returns {Promise} Promise that resolves when posts are fetched and displayed
 */
async function fetchAndDisplayPosts() {
    debugLog('Starting fetchAndDisplayPosts');
    try {
        const blogContainer = document.getElementById('blog-posts');
        if (!blogContainer) {
            throw new Error('Blog container element not found');
        }
        debugLog('Blog container found', blogContainer);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        debugLog('Posts fetched successfully', posts);

        // Clear loading indicator
        blogContainer.innerHTML = '';

        // Create a row container for the blog posts
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4';
        blogContainer.appendChild(rowContainer);
        debugLog('Row container created');

        // Display first 20 posts
        const postsToDisplay = posts.slice(0, 20);
        debugLog('Processing first 20 posts', postsToDisplay);

        for (const post of postsToDisplay) {
            await createBlogCard(post, rowContainer);
        }
        debugLog('All blog cards created');
    } catch (error) {
        console.error('Error in fetchAndDisplayPosts:', error);
        // Display error message to user
        const blogContainer = document.getElementById('blog-posts');
        if (blogContainer) {
            blogContainer.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error loading blog posts. Please try again later.
                </div>
            `;
        }
    }
}

/**
 * Creates a blog card with post content and an image
 * @param {Object} post - The blog post data
 * @param {HTMLElement} container - The container element to append the card to
 */
async function createBlogCard(post, container) {
    debugLog('Creating blog card for post', post);
    try {
        // Default placeholder images (using Lorem Picsum for reliable placeholder images)
        const placeholderImages = [
            'https://picsum.photos/400/300?random=1',
            'https://picsum.photos/400/300?random=2',
            'https://picsum.photos/400/300?random=3'
        ];

        // Create column and card elements
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        
        // Use a random placeholder image
        const randomIndex = Math.floor(Math.random() * placeholderImages.length);
        const placeholderImage = placeholderImages[randomIndex];
        
        // Add content to card using Bootstrap classes
        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${placeholderImage}" class="card-img-top" alt="Blog post image" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <small class="text-muted">Post ID: ${post.id}</small>
                </div>
            </div>
        `;
        
        container.appendChild(colDiv);
        debugLog('Blog card created and appended to container');
    } catch (error) {
        console.error('Error creating blog card:', error);
        // Create error card that still shows the post content
        const colDiv = document.createElement('div');
        colDiv.className = 'col';
        colDiv.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="bg-light" style="height: 200px; display: flex; align-items: center; justify-content: center;">
                    <p class="text-muted">Image unavailable</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <small class="text-muted">Post ID: ${post.id}</small>
                </div>
            </div>
        `;
        container.appendChild(colDiv);
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    debugLog('DOM Content Loaded - Initializing blog');
    fetchAndDisplayPosts();
});
