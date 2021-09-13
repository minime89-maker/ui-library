"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("./Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Links',
  component: _Link.default,
  parameters: {
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Link.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  href: 'https://www.google.com/',
  label: 'Google'
};