"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionOutlined = function AccordionOutlined(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      summary = _ref.summary,
      open = _ref.open,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("details", {
    className: "relative rounded-default border-2 border-gray-30 text-gray-80 overflow-hidden",
    open: open
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: "flex items-center justify-between p-2 cursor-pointer hover:bg-gray-10 ".concat(disabled ? 'cursor-not-allowed' : '')
  }, label || "Section 1", /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("svg", {
    className: "w-4 h-4 ml-2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 10l5 5 5-5m0 0l-5 5-5-5"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-60 mt-2 p-2 max-w-xs"
  }, summary || "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor")));
};

AccordionOutlined.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  label: _propTypes.default.node,
  summary: _propTypes.default.node,
  open: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
AccordionOutlined.defaultProps = {
  className: '',
  children: null,
  label: '',
  summary: '',
  open: false,
  disabled: false
};
var _default = AccordionOutlined;
exports.default = _default;