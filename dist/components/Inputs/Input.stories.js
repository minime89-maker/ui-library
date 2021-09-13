"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outlined = exports.Filled = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

var _InputOutlined = _interopRequireDefault(require("./InputOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Input',
  component: _Input.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=31%3A26'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Input.default, args);
};

var Filled = Template.bind(null);
exports.Filled = Filled;

var Outlined = function Outlined(args) {
  return /*#__PURE__*/_react.default.createElement(_InputOutlined.default, args);
};

exports.Outlined = Outlined;