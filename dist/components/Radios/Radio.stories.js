"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("./Radio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  title: 'Components/Radio',
  component: _Radio.default,
  parameters: {
    status: {
      type: 'beta'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Radio.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  name: 'example',
  id: 1,
  label: 'Neutral'
};

var Group = function Group(args) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Radio.default, _extends({
    name: "group",
    id: 1,
    label: "Neutral"
  }, args)), /*#__PURE__*/_react.default.createElement(_Radio.default, _extends({
    name: "group",
    id: 2,
    label: "Positive"
  }, args)), /*#__PURE__*/_react.default.createElement(_Radio.default, _extends({
    name: "group",
    id: 3,
    label: "Negative"
  }, args)));
};

exports.Group = Group;