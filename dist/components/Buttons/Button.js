"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button$propTypes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      children = _ref.children,
      size = _ref.size,
      disabled = _ref.disabled,
      focus = _ref.focus,
      hover = _ref.hover,
      style = _ref.style,
      block = _ref.block,
      color = _ref.color,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      icon = _ref.icon;
  var classes = (0, _classnames.default)('btn', variant, {
    'w-screen text-center justify-center tracking-wide': block
  }, className, {
    'opacity-50 cursor-not-allowed ': disabled
  }, focus, size, hover, {
    'bg-gray-10 text-gray-80': color === 'white'
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    onFocus: onFocus,
    style: style,
    onBlur: onBlur,
    className: "".concat(classes, " ").concat(className, " ")
  }, children || 'BUTTON', "\xA0", icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, icon)));
};

Button.propTypes = (_Button$propTypes = {
  children: _propTypes.default.node,
  variant: _propTypes.default.oneOf(['btn', 'link', 'primary', 'secondary', 'success', 'warning', 'error']),
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  size: _propTypes.default.string,
  hover: _propTypes.default.bool
}, _defineProperty(_Button$propTypes, "disabled", _propTypes.default.bool), _defineProperty(_Button$propTypes, "style", _propTypes.default.any), _defineProperty(_Button$propTypes, "block", _propTypes.default.bool), _defineProperty(_Button$propTypes, "color", _propTypes.default.string), _defineProperty(_Button$propTypes, "icon", _propTypes.default.node), _Button$propTypes);
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  icon: ''
};
var _default = Button;
exports.default = _default;