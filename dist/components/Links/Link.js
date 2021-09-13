"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Links = function Links(_ref) {
  var href = _ref.href,
      alt = _ref.alt,
      children = _ref.children,
      className = _ref.className,
      target = _ref.target,
      label = _ref.label,
      underline = _ref.underline;
  var classes = (0, _classnames.default)({
    'text_link': true,
    'target': target,
    ' hover:underline': underline
  }, className);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, children), /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    label: label,
    alt: alt,
    target: target,
    className: classes,
    underline: underline.toString()
  }, children || label));
};

Links.propTypes = {
  children: _propTypes.default.node,
  href: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.string,
  target: _propTypes.default.oneOf(['_blank', '_self', '_parent', '_top']),
  label: _propTypes.default.string,
  underline: _propTypes.default.string
};
Links.defaultProps = {
  href: 'https://www.google.com/',
  alt: '',
  children: '',
  label: '',
  underline: 'true'
};
var _default = Links;
exports.default = _default;