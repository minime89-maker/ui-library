"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropdownFilled = _interopRequireDefault(require("./DropdownFilled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Dropdown',
  component: _DropdownFilled.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_DropdownFilled.default, args);
};

var Filled = Template.bind({});
exports.Filled = Filled;