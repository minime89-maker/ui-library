"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Outlined = exports.Filled = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextArea = _interopRequireDefault(require("./TextArea"));

var _TextAreaOutlined = _interopRequireDefault(require("./TextAreaOutlined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/TextArea',
  component: _TextArea.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=320%3A221'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextArea.default, args);
};

var Filled = Template.bind(null);
exports.Filled = Filled;

var Outlined = function Outlined(args) {
  return /*#__PURE__*/_react.default.createElement(_TextAreaOutlined.default, args);
};

exports.Outlined = Outlined;