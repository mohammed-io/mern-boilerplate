"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    email: {
        type: String,
        default: '',
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        default: '',
        required: true
    }
});
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map