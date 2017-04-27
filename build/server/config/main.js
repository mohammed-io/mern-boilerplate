"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    // port
    port: process.env.PORT || 3000,
    // database
    db: process.env.MONGODB_URI,
    // test env
    test_port: 3001,
    test_db: 'mern-boilerplate-test',
    test_env: 'test'
};
exports.default = config;
//# sourceMappingURL=main.js.map