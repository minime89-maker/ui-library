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
      id = _ref.id,
      label = _ref.label,
      disabled = _ref.disabled,
      value = _ref.value,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: name,
    id: id,
    disabled: disabled,
    value: value,
    onChange: onChange,
    className: "w-4 h-4 apperance-none"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "pl-1.5",
    htmlFor: name
  }, label));
};

Checkbox.propTypes = {
  name: _propTypes.default.string.isRequired,
  id: _propTypes.default.number,
  label: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  value: _propTypes.default.node,
  onChange: _propTypes.default.func
};
Checkbox.defaultProps = {
  disabled: false,
  name: 'checkbox',
  id: 1,
  value: '',
  onChange: function onChange() {},
  label: 'Option 1'
};
var _default = Checkbox;
exports.default = _default;