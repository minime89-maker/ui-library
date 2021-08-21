"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/TextArea',
  component: _TextArea.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextArea.default, args);
};

var Filled = Template.bind(null);
exports.Filled = Filled;