"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example / Buttons',
  component: _Button.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=2%3A2'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  variant: 'btn',
  size: 'medium',
  disabled: false
};
var Icon = Template.bind({});
exports.Icon = Icon;
Icon.args = {
  icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Email24, null),
  children: 'SEND'
};