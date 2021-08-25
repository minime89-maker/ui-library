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

var Label = function Label(_ref) {
  var type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      className = _ref.className;
  var classes = (0, _classnames.default)("label ".concat(type, " ").concat(label, " ").concat(className));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pr-2"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "cursor-pointer"
  }, !children ? label && /*#__PURE__*/_react.default.createElement(_iconsReact.Close16, null) : children && /*#__PURE__*/_react.default.createElement(_iconsReact.Close16, null)));
};

Label.propTypes = {
  type: _propTypes.default.oneOf(['label', 'primary', 'secondary', 'success', 'warning', 'error']).isRequired,
  label: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string
};
Label.defaultProps = {
  type: 'label',
  label: 'label'
};
var _default = Label;
exports.default = _default;