"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Breadcrumbs',
  component: _Breadcrumbs.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, args);
};

var Example = Template.bind({});
exports.Example = Example;