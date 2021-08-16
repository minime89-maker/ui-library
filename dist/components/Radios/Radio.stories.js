"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Example/Radio',
  component: _Radio.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Radio.default, _extends({
    label: "boooring \uD83E\uDD71",
    value: "1"
  }, args)), /*#__PURE__*/_react.default.createElement(_Radio.default, {
    label: "hmmm \uD83D\uDE10",
    value: "2"
  }), /*#__PURE__*/_react.default.createElement(_Radio.default, {
    label: "rockstar \uD83E\uDD29",
    value: "3"
  }));
};

var Default = Template.bind({});
exports.Default = Default;