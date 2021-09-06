"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange,
      checked = _ref.checked;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("label", {
    className: "pr-2",
    htmlFor: name
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    "aria-label": id,
    type: "checkbox",
    name: name,
    id: id,
    disabled: disabled,
    value: value,
    onChange: onChange,
    checked: checked,
    className: "".concat(disabled === true ? 'cursor-not-allowed' : 'auto', " h-4 w-4 focus:apperance-none")
  }));
};

Checkbox.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.number,
  label: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  value: _propTypes.default.node,
  onChange: _propTypes.default.func,
  checked: _propTypes.default.bool
};
Checkbox.defaultProps = {
  disabled: false,
  name: 'checkbox',
  id: 1,
  value: '',
  onChange: function onChange() {},
  label: ''
};
var _default = Checkbox;
exports.default = _default;