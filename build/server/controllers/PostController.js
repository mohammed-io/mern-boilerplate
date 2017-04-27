"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("../models/Post");
// get all posts
function getPosts(req, res, next) {
    Post_1.default.find()
        .then(function (posts) {
        res.status(200).json({ posts: posts });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
    });
}
exports.getPosts = getPosts;
// get post by id
function getPostById(req, res, next) {
    var id = req.params.id;
    Post_1.default.find(id)
        .then(function (post) {
        res.status(200).json({ post: post });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
    });
}
exports.getPostById = getPostById;
// create post
function createPost(req, res, next) {
    var post = new Post_1.default(req.body);
    post.save()
        .then(function (post) {
        res.status(200).json({ post: post });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
    });
}
exports.createPost = createPost;
// update post by id
function updatePost(req, res, next) {
    var id = req.params.id;
    Post_1.default.findByIdAndUpdate(id, req.body)
        .then(function (post) {
        res.status(200).json({ post: post });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
    });
}
exports.updatePost = updatePost;
// delete post by id
function deletePost(req, res, next) {
    var id = req.params.id;
    Post_1.default.findByIdAndRemove(id)
        .then(function (post) {
        res.status(200).json({ post: post });
    })
        .catch(function (error) {
        res.status(500).json({ error: error });
    });
}
exports.deletePost = deletePost;
//# sourceMappingURL=PostController.js.map