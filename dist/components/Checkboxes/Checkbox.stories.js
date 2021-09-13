"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Checkboxes',
  component: _Checkbox.default,
  parameters: {
    status: {
      type: 'beta'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Checkbox.default, args);
};

var Standard = Template.bind();
exports.Standard = Standard;
Standard.args = {
  name: 'checkbox',
  text: 'Checkbox',
  label: 'Remember me',
  id: 1
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  name: 'checkbox',
  id: 2
};