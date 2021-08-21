"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _InputOutlined = _interopRequireDefault(require("../Inputs/InputOutlined"));

var _TextAreaOutlined = _interopRequireDefault(require("../TextAreas/TextAreaOutlined"));

var _Button = _interopRequireDefault(require("../Buttons/Button"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    alert('Submiting Form');
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    method: "POST",
    onSubmit: handleSubmit,
    className: "shadow w-max py-4 px-8 rounded-defaul"
  }, children && /*#__PURE__*/_react.default.createElement("form", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h2 mb-8 font-semibold"
  }, "Contact Us"), /*#__PURE__*/_react.default.createElement(_InputOutlined.default, {
    type: "text",
    label: "First Name"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_InputOutlined.default, {
    type: "text",
    label: "Email Address"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextAreaOutlined.default, {
    rows: 4,
    cols: 19,
    className: "mb-4"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "error",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Email20, null)
  }, "SUBMIT"));
};

Form.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Form;
exports.default = _default;