"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Post_1 = require("../models/Post");
var PostRouter = (function () {
    function PostRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    PostRouter.prototype.getAllPosts = function (req, res, next) {
        Post_1.default.find()
            .then(function (posts) {
            res.status(200).json({ posts: posts });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.getPostBySlug = function (req, res, next) {
        var slug = req.params.slug;
        Post_1.default.findOne({ slug: slug })
            .then(function (post) {
            res.status(200).json({ post: post });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create post
    PostRouter.prototype.createPost = function (req, res, next) {
        var title = req.body.title;
        var slug = req.body.slug;
        var content = req.body.content;
        if (!title || !slug || !content) {
            res.status(422).json({ message: 'All Fields Required.' });
        }
        var post = new Post_1.default({
            title: title,
            slug: slug,
            content: content
        });
        post.save()
            .then(function (post) {
            res.status(200).json({ post: post });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update post by slug
    PostRouter.prototype.updatePost = function (req, res, next) {
        var slug = req.body.slug;
        Post_1.default.findOneAndUpdate({ slug: slug }, req.body)
            .then(function (post) {
            res.status(200).json({ post: post });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete post by slug
    PostRouter.prototype.deletePost = function (req, res, next) {
        var slug = req.body.slug;
        Post_1.default.findOneAndRemove({ slug: slug })
            .then(function (post) {
            res.status(200).json({ post: post });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    PostRouter.prototype.routes = function () {
        this.router.get('/', this.getAllPosts);
        this.router.get('/:slug', this.getPostBySlug);
        this.router.post('/', this.createPost);
        this.router.put('/:slug', this.updatePost);
        this.router.delete('/:slug', this.deletePost);
    };
    return PostRouter;
}());
exports.PostRouter = PostRouter;
var postRoutes = new PostRouter();
postRoutes.routes();
exports.default = postRoutes.router;
//# sourceMappingURL=PostRouter.js.map