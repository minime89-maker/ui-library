"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputOutlined = function InputOutlined(_ref) {
  var children = _ref.children,
      className = _ref.className,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      type = _ref.type,
      onChange = _ref.onChange,
      id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      required = _ref.required;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full relative"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "absolute left-0 m-1 px-0.5 bg-white -top-3 text-gray-60 text-xs   ",
    htmlFor: id
  }, label || 'Email address'), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    placeholder: placeholder,
    "aria-label": label,
    onFocus: onFocus,
    onBlur: onBlur,
    disabled: disabled,
    id: id,
    name: name,
    onChange: onChange,
    required: required,
    className: "w-full rounded-default px-2 h-10 border-2 border-gray-30 text-gray-80 focus:outline-none focus:border-blue"
  }));
};

InputOutlined.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  type: _propTypes.default.string,
  onChange: _propTypes.default.func,
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  label: _propTypes.default.string,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  required: _propTypes.default.bool
};
InputOutlined.defaultProps = {
  placeholder: '',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  label: 'Email Address',
  required: true
};
var _default = InputOutlined;
exports.default = _default;