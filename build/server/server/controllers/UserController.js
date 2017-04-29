"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../models/User");
var UserController = (function () {
    function UserController() {
    }
    // get all users
    UserController.get = function (params, callback) {
        User_1.default.find(params, function (err, users) {
            if (err) {
                callback(err, null);
            }
            callback(null, users);
        });
    };
    // get user by slug
    UserController.getBySlug = function (slug, params, callback) {
        User_1.default.findOne(slug, params, function (err, user) {
            if (err) {
                callback(err, null);
            }
            callback(null, user);
        });
    };
    return UserController;
}());
exports.default = UserController;
//# sourceMappingURL=UserController.js.map