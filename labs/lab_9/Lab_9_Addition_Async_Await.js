const readline = require('readline-sync');
const { sendRequest } = require('../../lessons/utils/RequestHelper');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
const URL = `${BASE_URL}${SLUG}`;

async function main() {
    let isContinuing = true;
    while (isContinuing) {
        printAppMenu();
        const userOption = getUserInput();

        switch (userOption) {
            case 1:
                await printTargetPost();
                break;
            case 2:
                await printAllPosts();
                break;
            case 0:
                console.log('\nThank for utilizing. See ya!\n');
                isContinuing = false;
                break;
            default:
                console.log('\nInvalid input, please try again!\n');
                break;
        }
    }
}

function printAppMenu() {
    const menu = `
    === Banking application ===
        1. Print target post
        2. Print all posts of the user
        0. Exit the program
    `
    console.log(menu);
}

function getUserInput() {
    return Number(readline.question('Please enter your selection: '));
}

async function printTargetPost() {
    const userId = Number(readline.question('Please enter User ID (e.g.: 1): '));
    const postId = Number(readline.question('Please enter Post ID (e.g.: 1): '));

    const filteredPosts = await _getAllPost(userId);
    const targetPost = filteredPosts.filter(post => {
        return post.id === postId;
    })[0];

    if (targetPost) {
        console.log(targetPost);
    } else {
        console.log(`The post ID ${postId} is not existing for the user ID ${userId}`);
    }
}

async function printAllPosts() {
    const userId = Number(readline.question('Please enter User ID (e.g.: 1): '));
    const allPosts = await _getAllPost(userId);

    console.log(allPosts);
}

async function _getAllPost(userId) {
    const posts = await sendRequest(URL);

    return posts.filter(post => {
        return post.userId === userId;
    });
}

main();
