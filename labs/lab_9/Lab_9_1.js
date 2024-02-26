/**
 * url: https://jsonplaceholder.typicode.com
 * Library: fetch
 * slugs: /posts
 *
 * Please using PROMISE and thenable to solve this
 * Allow user to input an userid and postId, print out that post content
 * Print all posts for that user
 */

const { question } = require("readline-sync");

const TARGET_URL = 'https://jsonplaceholder.typicode.com';
const GET_A_POST_SLUG = '/posts/';
const GET_ALL_POSTS_OF_USER_SLUG = '/posts?userId=';


function getUserId() {
    return new Promise((resolve, reject) => {
        let userId;

        do {
            userId = question('Please enter userId (an integer more than 0, e.g.: 1): ');
        } while (!isValidNumber(userId))
        resolve(userId);
    });
}

function getPostId() {
    return new Promise((resolve, reject) => {
        let postId;

        do {
            postId = question('Please enter postId (an integer more than 0, e.g.: 1): ');
        } while (!isValidNumber(postId));
        resolve(postId);
    });
}

function sendRequest(url) {
    console.log('\nSending request...\n');

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Fetching falied');
            } else {
                return res.json();
            }
        }).catch(err => {
            console.log(err.message);
        });
}

function isValidNumber(val) {
    return Number.isInteger(Number(val)) && Number(val) > 0;
}

// Usage
getUserId()
    .then((userId) => {
        return getPostId()
            .then((postId) => {
                const getAPostUrl = TARGET_URL + GET_A_POST_SLUG + postId;
                return sendRequest(getAPostUrl)
                    .then(postData => {
                        if (postData) {
                            console.log('The post content: ', postData.body);
                        } else {
                            console.log('No post data returned');
                        }

                        return userId;
                    });
            });
    })
    .then((userId) => {
        const getAllPostOfUserUrl = TARGET_URL + GET_ALL_POSTS_OF_USER_SLUG + userId;
        return sendRequest(getAllPostOfUserUrl)
            .then(allPosts => {
                if (allPosts) {
                    console.log('All posts of the user: \n', allPosts);
                } else {
                    console.log('No post returned');
                }
            });
    });
