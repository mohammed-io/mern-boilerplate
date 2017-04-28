"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var UserController_1 = require("../controllers/UserController");
var PostController_1 = require("../controllers/PostController");
var controllers = {
    user: UserController_1.default,
    posts: PostController_1.default
};
var ApiRouter = (function () {
    function ApiRouter() {
    }
    // get all resources
    ApiRouter.getAll = function (router) {
        router.get('/:resource', function (req, res, next) {
            var resource = req.params.resource;
            var controller = controllers[resource];
            if (!controller) {
                res.status(404).json({ error: '404 - Resource Not Found' });
            }
            controller.get(req.query, function (error, results) {
                if (error) {
                    res.status(500).json({ error: error });
                }
                res.status(200).json({ results: results });
            });
        });
    };
    // get a resource by slug
    ApiRouter.getBySlug = function (router) {
        router.get('/:resource/:slug', function (req, res, next) {
            var slug = req.params.slug;
            var resource = req.params.resource;
            var controller = controllers[resource];
            if (!controller) {
                res.status(404).json({ error: '404 - Resource Not Found' });
            }
            controller.get(slug, req.query, function (error, result) {
                if (error) {
                    res.status(500).json({ error: error });
                }
                res.status(200).json({ result: result });
            });
        });
    };
    // create a resource
    ApiRouter.create = function (router) {
    };
    // update a resource by slug
    ApiRouter.updateBySlug = function (router) {
    };
    // delete a resource by slug
    ApiRouter.deleteBySlug = function (router) {
    };
    return ApiRouter;
}());
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=ApiRouter.js.map