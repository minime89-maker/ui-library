"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    class: "has-tooltip"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "tooltip rounded-default shadow-lg p-1 bg-gray-10 text-red-50 mt-6 "
  }, "Some Nice Tooltip Text"), "Hover");
};

Tooltip.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Tooltip;
exports.default = _default;