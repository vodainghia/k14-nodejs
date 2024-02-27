const { sendRequest } = require('../../lessons/utils/RequestHelper');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`;

/**
 * 1. userId, postId --> post's content
 */
const userId = 1;
const postId = 2;
printTargetPost(userId, postId);

/**
 * 2. Print all posts
 */
printAllPosts(userId);

async function printTargetPost(userId, postId) {
    const filteredPosts = await _getAllPost(userId);

    // TODO: check if target userId is existing first
    // ...

    const targetPost = filteredPosts.filter(post => {
        return post.id === postId;
    })[0];

    // TODO: check if the filteredPosts empty
    // ...

    if (targetPost) {
        console.log(targetPost);
    } else {
        console.log(`The post ID ${postId} is not existing for the user ID ${userId}`);
    }
}

async function printAllPosts(userId) {
    const allPosts = await _getAllPost(userId);
    console.log(allPosts);
}

async function _getAllPost(userId) {
    const posts = await sendRequest(url);
    return posts.filter(post => {
        return post.userId === userId;
    });
}