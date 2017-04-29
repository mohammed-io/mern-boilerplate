"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
require("../styles/css/main.css");
var AppIndex = (function (_super) {
    __extends(AppIndex, _super);
    function AppIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppIndex.prototype.render = function () {
        return (<div>
        <Header_1.default />
        
        <div>
          {this.props.children}
        </div>
        
        <Footer_1.default />
      </div>);
    };
    return AppIndex;
}(react_1.Component));
exports.default = AppIndex;
//# sourceMappingURL=AppIndex.js.map