"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactUs = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Template',
  component: _Form.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Form.default, null);
};

var ContactUs = Template.bind(null);
exports.ContactUs = ContactUs;