"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Range = _interopRequireDefault(require("./Range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Range',
  component: _Range.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Range.default, args);
};

var Example = Template.bind({});
exports.Example = Example;