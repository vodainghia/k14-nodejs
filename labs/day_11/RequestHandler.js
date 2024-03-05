const Post = require('./Post');
const { sendRequest } = require('../../lessons/utils/RequestHelper');

class RequestHandler {

    async getTargetPost(userId, postId, url) {
        const filteredPosts = await this._getAllPost(userId, url);
        const targetPost = filteredPosts.filter(post => {
            return post.id === postId;
        })[0];

        if (targetPost) {
            return new Post(targetPost.userId, targetPost.id, targetPost.title, targetPost.body);
        } else {
            return null;
        }
    }

    async getAllMappedPosts(userId, url) {
        const allPosts = await this._getAllPost(userId, url);
        let allMappedPosts = [];

        allPosts.forEach(post => {
            allMappedPosts.push(new Post(post.userId, post.id, post.title, post.body));
        });

        return allMappedPosts;
    }

    printPost(post) {
        return `
        {
            "userId": "${post.userId}",
            "id": "${post.id}",
            "title": "${post.title}",
            "body": "${post.body}"
        },`
    }

    async _getAllPost(userId, url) {
        const posts = await sendRequest(url);
        return posts.filter(post => {
            return post.userId === userId;
        });
    }
    
}

module.exports = RequestHandler;
