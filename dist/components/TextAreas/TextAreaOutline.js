"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaOutline = function TextAreaOutline(_ref) {
  var children = _ref.children,
      className = _ref.className,
      name = _ref.name,
      id = _ref.id,
      cols = _ref.cols,
      rows = _ref.rows,
      placeholder = _ref.placeholder,
      label = _ref.label,
      maxLength = _ref.maxLength,
      onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, " relative w-max")
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), label && /*#__PURE__*/_react.default.createElement("label", {
    className: "absolute left-0 m-1 px-0.5 bg-white -top-3.5 text-gray-50 text-sm   ",
    htmlFor: id
  }, label || 'Message'), /*#__PURE__*/_react.default.createElement("textarea", {
    name: name,
    id: id,
    cols: cols,
    rows: rows,
    placeholder: placeholder,
    onChange: onChange,
    maxLength: maxLength,
    className: "p-2 rounded-default border-2 border-gray-30 placeholder-gray-30 text-gray-80 focus:outline-none focus:border-red-50"
  }));
};

TextAreaOutline.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  cols: _propTypes.default.number,
  rows: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  label: _propTypes.default.string,
  required: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
TextAreaOutline.defaultProps = {
  className: '',
  name: 'Message',
  id: 'message',
  cols: 20,
  rows: 4,
  placeholder: 'Leave a Message',
  required: false,
  label: 'Message'
};
var _default = TextAreaOutline;
exports.default = _default;