"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
// custom modules
// Server class
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    Server.prototype.config = function () {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.listen(3000, function () {
            console.log("Listening on port " + (process.env.PORT || 3000));
        });
    };
    // application routes
    Server.prototype.routes = function () {
        var router = express.Router();
        this.app.use('/', router);
        // this.app.use('/api/users', UserRouter);
    };
    return Server;
}());
// export
exports.default = new Server().app;
//# sourceMappingURL=Server.js.map