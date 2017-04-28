"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Router, Request, Response, NextFunction } from 'express';
var express = require("express");
var UserController_1 = require("./controllers/UserController");
var router = express.Router();
var controllers = {
    User: UserController_1.default
};
var ApiRouter = (function () {
    function ApiRouter() {
        this.config();
    }
    ApiRouter.prototype.config = function () {
    };
    return ApiRouter;
}());
exports.default = ApiRouter;
//# sourceMappingURL=ApiRouter.js.map