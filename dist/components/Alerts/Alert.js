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

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children,
      label = _ref.label,
      size = _ref.size,
      onClick = _ref.onClick,
      className = _ref.className;
  var classes = (0, _classnames.default)("alert ".concat(type, " ").concat(size, " ").concat(className));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes, " "),
    size: size
  }, label, /*#__PURE__*/_react.default.createElement("div", {
    className: "pl-4 cursor-pointer ",
    onClick: onClick
  }, !children ? /*#__PURE__*/_react.default.createElement(_iconsReact.Close24, null) : children)));
};

Alert.propTypes = {
  type: _propTypes.default.oneOf(['alert', 'primary', 'secondary', 'success', 'warning', 'error']),
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
Alert.defaultProps = {
  type: 'primary',
  label: 'This is a Alert!',
  size: 'medium'
};
var _default = Alert;
exports.default = _default;