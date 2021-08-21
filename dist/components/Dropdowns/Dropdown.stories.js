"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Dropdown',
  component: _Dropdown.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;