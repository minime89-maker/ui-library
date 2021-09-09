"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      summary = _ref.summary,
      open = _ref.open;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-max"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("details", {
    className: "relative  border-b-2 bg-gray-10 border-gray-30 text-gray-80",
    open: open
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: "flex items-center flex-row-reverse justify-between p-2 cursor-pointer"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    className: "w-4 h-4 ml-2 ".concat(open === true ? 'transform rotate-180' : ''),
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M7 10l5 5 5-5m0 0l-5 5-5-5"
  }))), label || "What's the best thing about Switzerland?"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-60 mt-2 p-2"
  }, summary || "I don't know, but the flag is a big plus.")));
};

Accordion.propTypes = _defineProperty({
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  open: _propTypes.default.bool,
  label: _propTypes.default.node,
  summary: _propTypes.default.node
}, "open", _propTypes.default.bool);
Accordion.defaultProps = {
  children: null,
  className: '',
  open: false
};
var _default = Accordion;
exports.default = _default;