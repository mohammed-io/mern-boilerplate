"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post_1 = require("../models/Post");
var PostController = (function () {
    function PostController() {
    }
    // get all posts
    PostController.get = function (params, callback) {
        Post_1.default.find(params, function (err, posts) {
            if (err) {
                callback(err, null);
            }
            callback(null, posts);
        });
    };
    // get post by slug
    PostController.getBySlug = function (slug, params, callback) {
        Post_1.default.findOne({ slug: slug }, function (err, post) {
            if (err) {
                if (callback != null)
                    callback({ message: 'Profile Not Found' }, null);
                return;
            }
            if (callback != null)
                callback(null, post);
        });
    };
    return PostController;
}());
exports.default = PostController;
//# sourceMappingURL=PostController.js.map