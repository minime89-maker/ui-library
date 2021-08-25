"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      separator = _ref.separator,
      links = _ref.links;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("nav", {
    role: "navigation",
    "aria-label": "breadcrumbs"
  }, /*#__PURE__*/_react.default.createElement("ol", {
    className: "flex space-x-2"
  }, links && links.map(function (link, index) {
    var lastLink = index === links.length - 1;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "breadcrumb-link-".concat(index)
    }, /*#__PURE__*/_react.default.createElement("a", {
      "aria-current": lastLink ? 'page' : undefined,
      href: link.href
    }, link.label));
  }))));
};

Breadcrumbs.propTypes = {
  children: _propTypes.default.any,
  className: _propTypes.default.string,
  separator: _propTypes.default.string
};
Breadcrumbs.defaultProps = {
  children: '',
  className: '',
  separator: ''
};
var _default = Breadcrumbs;
exports.default = _default;