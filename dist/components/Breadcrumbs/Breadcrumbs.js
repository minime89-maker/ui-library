"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      separator = _ref.separator,
      action = _ref.action,
      summary = _ref.summary;

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openTab = _React$useState2[0],
      setOpenTab = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-80"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap pt-3 pb-2 flex-row",
    role: "tablist"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: " last:mr-0 flex-0 text-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "font-normal text-md px-2 py-1 tracking-wide ".concat(openTab === 1 ? 'bg-gray-10 rounded-default' : ''),
    onClick: function onClick(e) {
      e.preventDefault();
      setOpenTab(1);
    },
    "data-toggle": "tab",
    href: "#",
    role: "tablist"
  }, !action ? 'Home' : action)), /*#__PURE__*/_react.default.createElement("div", null, separator && /*#__PURE__*/_react.default.createElement("span", {
    className: "text-sm text-gray-60 mx-2"
  }, separator)), /*#__PURE__*/_react.default.createElement("li", {
    className: " last:mr-0 flex-0 text-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-md px-2 py-1 tracking-wide ".concat(openTab === 2 ? 'bg-gray-10 rounded-default' : ''),
    onClick: function onClick(e) {
      e.preventDefault();
      setOpenTab(2);
    },
    "data-toggle": "tab",
    href: "#",
    role: "tablist"
  }, !action ? 'Pages' : action))), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative flex flex-col min-w-0 break-words w-full mb-6 text-left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "py-2 flex-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabs-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: openTab === 1 ? "block" : "hidden",
    id: "link1"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-md text-body"
  }, !summary ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' : summary)), /*#__PURE__*/_react.default.createElement("div", {
    className: openTab === 2 ? "block" : "hidden",
    id: "link2"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-md text-body"
  }, !summary ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, omnis non tenetur aspernatur dolorem architecto facilis dolor.' : summary)))))));
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