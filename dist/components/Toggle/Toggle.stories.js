"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Toggle',
  component: _Toggle.default,
  parameters: {
    status: {
      type: 'alpha'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Toggle.default, args);
};

var Default = Template.bind({});
exports.Default = Default;