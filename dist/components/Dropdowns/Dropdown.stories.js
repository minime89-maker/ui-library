"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = exports.Outlined = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _DropdownFilled = _interopRequireDefault(require("./DropdownFilled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Dropdown',
  component: _Dropdown.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=31%3A26'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, args);
};

var Outlined = Template.bind({});
exports.Outlined = Outlined;

var Filled = function Filled(args) {
  return /*#__PURE__*/_react.default.createElement(_DropdownFilled.default, args);
};

exports.Filled = Filled;