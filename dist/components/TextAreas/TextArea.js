"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function TextArea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      name = _ref.name,
      id = _ref.id,
      cols = _ref.cols,
      rows = _ref.rows,
      placeholder = _ref.placeholder,
      required = _ref.required,
      onChange = _ref.onChange,
      label = _ref.label,
      maxLength = _ref.maxLength;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
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
    className: "px-2 py-3  border-b-2 border-gray-30 text-gray-80 placeholder-gray-30 focus:outline-none focus:border-red-50"
  })));
};

TextArea.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  name: _propTypes.default.string,
  id: _propTypes.default.string,
  cols: _propTypes.default.number,
  rows: _propTypes.default.number,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func,
  maxLength: _propTypes.default.number
};
TextArea.defaultProps = {
  className: '',
  name: 'Message',
  id: 'message',
  cols: 20,
  rows: 4,
  placeholder: 'Leave a Message',
  required: false,
  label: 'Message'
};
var _default = TextArea;
exports.default = _default;