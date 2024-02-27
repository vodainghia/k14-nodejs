/**
 * url: https://jsonplaceholder.typicode.com
 * Library: fetch
 * slugs: /posts
 *
 * Please using PROMISE and ASYNC/AWAIT to solve this
 * Allow user to input an userid and postId, print out that post content
 * Print all posts for that user
 */

const { question } = require("readline-sync");

const TARGET_URL = 'https://jsonplaceholder.typicode.com';
const GET_A_POST_SLUG = '/posts/';
const GET_ALL_POSTS_OF_USER_SLUG = '/posts?userId=';


function getUserId() {
    return question('Please enter userId (e.g.: 1): ');
}

function getPostId() {
    return question('Please enter postId (e.g.: 1): ');
}

async function sendRequest(url) {
    console.log('\nSending request...\n');

    const res = await fetch(url);
    try {
        if (!res.ok) {
            throw new Error('Fetching falied');
        } else {
            return res.json();
        }
    } catch (error) {
        console.log(error.message);
    }
}

function isValidNumber(val) {
    return Number.isInteger(Number(val)) && Number(val) > 0;
}

// Usage
(async function run() {
    let userId, postId;

    do {
        userId = getUserId();
    } while (!isValidNumber(userId));

    do {
        postId = getPostId();
    } while (!isValidNumber(postId));

    const getAPostUrl = TARGET_URL + GET_A_POST_SLUG + postId;
    const postData = await sendRequest(getAPostUrl);
    if (postData) {
        console.log('The post content: ', postData.body);
    } else {
        console.log('No post data returned');
    }

    const getAllPostOfUserUrl = TARGET_URL + GET_ALL_POSTS_OF_USER_SLUG + userId;
    const allPosts = await sendRequest(getAllPostOfUserUrl);
    if (allPosts) {
        console.log('All posts of the user: \n', allPosts);
    } else {
        console.log('No post returned');
    }
})();