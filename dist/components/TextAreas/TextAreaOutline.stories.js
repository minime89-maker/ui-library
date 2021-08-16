"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outline = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextAreaOutline = _interopRequireDefault(require("./TextAreaOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/TextArea',
  component: _TextAreaOutline.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextAreaOutline.default, args);
};

var Outline = Template.bind({});
exports.Outline = Outline;