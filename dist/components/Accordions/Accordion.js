"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Accordion$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      summary = _ref.summary,
      open = _ref.open,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("details", {
    className: "relative  border-b-2 bg-white border-gray-30 text-gray-80",
    open: open
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: "flex items-center flex-row-reverse justify-between p-2 cursor-pointer hover:bg-gray-10  ".concat(disabled ? 'cursor-not-allowed' : '')
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("svg", {
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

Accordion.propTypes = (_Accordion$propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  open: _propTypes.default.bool,
  label: _propTypes.default.node,
  summary: _propTypes.default.node
}, _defineProperty(_Accordion$propTypes, "open", _propTypes.default.bool), _defineProperty(_Accordion$propTypes, "disabled", _propTypes.default.bool), _Accordion$propTypes);
Accordion.defaultProps = {
  children: null,
  className: '',
  open: false,
  disabled: false,
  label: '',
  summary: ''
};
var _default = Accordion;
exports.default = _default;