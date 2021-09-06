"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconsReact = require("@carbon/icons-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signs = {
  primary: /*#__PURE__*/_react.default.createElement(_iconsReact.Information24, null),
  secondary: /*#__PURE__*/_react.default.createElement(_iconsReact.WarningFilled24, null),
  warning: /*#__PURE__*/_react.default.createElement(_iconsReact.WarningAlt24, null),
  success: /*#__PURE__*/_react.default.createElement(_iconsReact.CheckmarkOutline24, null),
  error: /*#__PURE__*/_react.default.createElement(_iconsReact.MisuseOutline24, null)
};

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children,
      label = _ref.label,
      size = _ref.size,
      onClick = _ref.onClick,
      className = _ref.className,
      icon = _ref.icon;
  var classes = (0, _classnames.default)("alert ".concat(type, " ").concat(size, " ").concat(className));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes, " opacity-80"),
    size: size
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pr-1"
  }, signs[type]), label, /*#__PURE__*/_react.default.createElement("div", {
    className: "pl-8 cursor-pointer",
    onClick: onClick
  }, !icon ? /*#__PURE__*/_react.default.createElement(_iconsReact.Close24, null) : icon)));
};

Alert.propTypes = {
  type: _propTypes.default.oneOf(['alert', 'primary', 'secondary', 'success', 'warning', 'error']),
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  className: _propTypes.default.string,
  onClick: _propTypes.default.func,
  icon: _propTypes.default.string
};
Alert.defaultProps = {
  type: 'primary',
  label: 'This is a Alert!',
  size: 'medium'
};
var _default = Alert;
exports.default = _default;