"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      separator = _ref.separator,
      action = _ref.action,
      summary = _ref.summary;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex items-center justify-center flex-wrap pt-3 pb-2",
    role: "tablist"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: " last:mr-0 flex-0 text-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "font-normal text-md px-2 py-1 tracking-wide hover:bg-gray-10 rounded-default",
    "data-toggle": "tab",
    href: "#",
    role: "tablist"
  }, !action ? 'Home' : action)), /*#__PURE__*/_react.default.createElement("div", null, separator && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-sm text-gray-60 mx-2"
  }, separator))), children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children));
};

Breadcrumbs.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  separator: _propTypes.default.string,
  action: _propTypes.default.node,
  summary: _propTypes.default.node
};
Breadcrumbs.defaultProps = {
  children: null,
  className: '',
  separator: '>',
  action: '',
  summary: ''
};
var _default = Breadcrumbs;
exports.default = _default;