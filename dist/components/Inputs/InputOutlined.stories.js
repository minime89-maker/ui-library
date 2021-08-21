"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outlined = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputOutlined = _interopRequireDefault(require("./InputOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Input',
  component: _InputOutlined.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_InputOutlined.default, args);
};

var Outlined = Template.bind(null);
exports.Outlined = Outlined;