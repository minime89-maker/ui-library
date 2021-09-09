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
      summary = _ref.summary;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-max"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("details", {
    className: "relative rounded-default border-2 border-gray-30 text-gray-80"
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: "flex items-center justify-between p-2 cursor-pointer hover:bg-gray-10"
  }, label || "What's the best thing about Switzerland?", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
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
    className: "text-gray-60  mt-2 p-2"
  }, summary || "I don't know, but the flag is a big plus.")));
};

AccordionOutlined.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  label: _propTypes.default.node,
  summary: _propTypes.default.node
};
AccordionOutlined.defaultProps = {
  className: '',
  children: null
};
var _default = AccordionOutlined;
exports.default = _default;