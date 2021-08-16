"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
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
      onBlur = _ref.onBlur;
  var classes = (0, _classnames.default)({
    'opacity-50': disabled
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-max relative"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "absolute m-1 px-0.5 left-0 -top-3.5 text-gray-50 text-sm  ",
    htmlFor: id
  }, label || 'Email address'), /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    placeholder: placeholder,
    disabled: classes,
    id: id,
    name: name,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    className: "h-10 px-2 w-full  border-b-2 border-gray-30 text-gray-80  focus:outline-none focus:border-red-50 "
  }));
};

Input.propTypes = {
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
  onBlur: _propTypes.default.func
};
Input.defaultProps = {
  placeholder: '',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  label: 'Email Address'
};
var _default = Input;
exports.default = _default;