"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outline = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputOutline = _interopRequireDefault(require("./InputOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Input',
  component: _InputOutline.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_InputOutline.default, args);
};

var Outline = Template.bind(null);
exports.Outline = Outline;