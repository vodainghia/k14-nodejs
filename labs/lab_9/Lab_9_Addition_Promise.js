const readline = require('readline-sync');
const { sendRequest } = require('../../lessons/utils/RequestHelper');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
const URL = `${BASE_URL}${SLUG}`;

function main() {
    let isContinuing = true;
    while (isContinuing) {
        printAppMenu();

        getUserInput().then(userOption => {
            switch (userOption) {
                case 1:
                    printTargetPost().then(main);
                    break;
                case 2:
                    printAllPosts().then(main);
                    break;
                case 0:
                    console.log('\nThank for utilizing. See ya!\n');
                    isContinuing = false;
                    break;
                default:
                    console.log('\nInvalid input, please try again!\n');
                    main();
                    break;
            }
        });
        
        break;
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
    return new Promise((resolve, reject) => {
        let inputStr;

        do {
            inputStr = readline.question('Please enter your selection: ');
        } while (!isValidNumber(inputStr))
        resolve(Number(inputStr));
    });
}

function isValidNumber(val) {
    return Number.isInteger(Number(val));
}

function printTargetPost() {
    return new Promise((resolve, reject) => {
        const userId = Number(readline.question('Please enter User ID (e.g.: 1): '));
        const postId = Number(readline.question('Please enter Post ID (e.g.: 1): '));

        _getAllPost(userId).then(filteredPosts => {
            const targetPost = filteredPosts.filter(post => {
                return post.id === postId;
            })[0];

            if (targetPost) {
                console.log(targetPost);
            } else {
                console.log(`The post ID ${postId} is not existing for the user ID ${userId}`);
            }
            resolve();
        });
    });
}

function printAllPosts() {
    return new Promise((resolve, reject) => {
        const userId = Number(readline.question('Please enter User ID (e.g.: 1): '));

        _getAllPost(userId).then(filteredPosts => {
            console.log(filteredPosts);
            resolve();
        });
    });
}

function _getAllPost(userId) {
    return sendRequest(URL).then(posts => {
        return posts.filter(post => {
            return post.userId === userId;
        });
    });
}

main();
