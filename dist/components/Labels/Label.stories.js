"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Label',
  component: _Label.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Label.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  type: 'label',
  label: 'label'
};