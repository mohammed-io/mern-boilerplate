"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = require("../models/User");
var UserRouter = (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.getUserBySlug = function (req, res, next) {
        var slug = req.params.slug;
        User_1.default.findOne({ slug: slug })
            .then(function (user) {
            res.status(200).json({ user: user });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // create user
    UserRouter.prototype.createUser = function (req, res, next) {
        var name = req.body.name;
        var slug = req.body.slug;
        var email = req.body.email;
        var password = req.body.password;
        if (!name || !slug || !email || !password) {
            res.status(422).json({ message: 'All Fields Required.' });
        }
        var user = new User_1.default({
            name: name,
            slug: slug,
            email: email,
            password: password
        });
        user.save()
            .then(function (user) {
            res.status(201).json({ user: user });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // update user by slug
    UserRouter.prototype.updateUser = function (req, res, next) {
        var slug = req.body.slug;
        User_1.default.findOneAndUpdate(slug, req.body)
            .then(function (user) {
            res.status(200).json({ user: user });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    // delete user by slug
    UserRouter.prototype.deleteUser = function (req, res, next) {
        var slug = req.body.slug;
        User_1.default.findOneAndRemove(slug)
            .then(function (user) {
            res.status(204).json({ user: user });
        })
            .catch(function (error) {
            res.status(500).json({ error: error });
        });
    };
    UserRouter.prototype.routes = function () {
        this.router.get('/:slug', this.getUserBySlug);
        this.router.post('/', this.createUser);
        this.router.put('/:slug', this.updateUser);
        this.router.delete('/:slug', this.deleteUser);
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
var userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=UserRouter.js.map