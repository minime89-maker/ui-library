"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = function Block(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-auto container m-2 rounded-extra shadow-md bg-white"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children));
};

Block.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = Block;
exports.default = _default;