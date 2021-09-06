"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Block = _interopRequireDefault(require("../Block/Block"));

var _InputOutlined = _interopRequireDefault(require("../Inputs/InputOutlined"));

var _Button = _interopRequireDefault(require("../Buttons/Button"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subscribe = function Subscribe(_ref) {
  var children = _ref.children,
      onSubmit = _ref.onSubmit,
      className = _ref.className,
      title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "py-8 px-6"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("form", {
    method: "post",
    onSubmit: onSubmit,
    className: "text-center flex items-center justify-center flex-col"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-h1 font-semibold"
  }, title), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-body text-gray-60"
  }, description), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_InputOutlined.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Email24, null)
  }, "Subscribe")));
};

Subscribe.propTypes = {
  children: _propTypes.default.node,
  onSubmit: _propTypes.default.func,
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string
};
Subscribe.defaultProps = {
  children: null,
  onSubmit: function onSubmit() {},
  className: '',
  title: '',
  description: ''
};
var _default = Subscribe;
exports.default = _default;