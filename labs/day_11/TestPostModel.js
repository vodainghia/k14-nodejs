const RequestHandler = require('./RequestHandler');

lab11();

// Function Declaration
async function lab11() {
    // Given params
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const SLUG = '/posts';
    const url = `${BASE_URL}${SLUG}`;
    const userId = 1;
    const postId = 1;

    const requestHandler = new RequestHandler();
    const post = await requestHandler.getTargetPost(userId, postId, url);
    const allPost = await requestHandler.getAllMappedPosts(userId, url);

    if (post) {
        console.log(post.body);
    } else {
        console.log(`The post ID ${postId} is not existing for the user ID ${userId}`);
    }

    if (allPost.length !== 0) {
        allPost.forEach(post => {
            console.log(requestHandler.printPost(post));
        });
    } else {
        console.log([]);
    }



}
