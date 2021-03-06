"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
  var name = _ref.name,
      id = _ref.id,
      label = _ref.label,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, " flex items-center justify-start")
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("label", {
    className: "pr-2 text-gray-80",
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    "aria-label": name,
    type: "radio",
    name: name,
    id: id,
    onChange: onChange,
    value: value
  }));
};

Radio.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.number.isRequired,
  label: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
Radio.defaultProps = {
  value: '',
  className: '',
  name: 'option',
  disabled: true
};
var _default = Radio;
exports.default = _default;