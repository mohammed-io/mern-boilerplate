"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var path = require("path");
// custom modules
var UserRouter_1 = require("./router/UserRouter");
var PostRouter_1 = require("./router/PostRouter");
// import { ApiRouter } from './router/ApiRouter';
// Server class
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost/mern-boilerplate';
        mongoose.connect(MONGO_URI);
        // view engine for rendering React
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'handlebars');
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    };
    // application routes
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use('/', router);
        this.app.use('/api/v1/user', UserRouter_1.default);
        this.app.use('/api/v1/posts', PostRouter_1.default);
    };
    return Server;
}());
// export
exports.default = new Server().app;
//# sourceMappingURL=Server.js.map