"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PostController_1 = require("../controllers/PostController");
exports.default = function (app) {
    var apiRoutes = express.Router();
    var postRoutes = express.Router();
    /**************************************
    ===== Post Endpoints
    **************************************/
    // append postRoutes to apiRoutes
    apiRoutes.use('/posts', postRoutes);
    // get all posts
    postRoutes.get('/', PostController_1.getPosts);
    // get post by id
    postRoutes.get('/:id', PostController_1.getPostById);
    // create post
    postRoutes.post('/', PostController_1.createPost);
    // update post by id
    postRoutes.put('/:id', PostController_1.updatePost);
    // delete post by id
    postRoutes.delete('/:id', PostController_1.deletePost);
    /**************************************
    ===== append apiRoutes to app
    **************************************/
    app.use('/api', apiRoutes);
};
//# sourceMappingURL=v2.js.map