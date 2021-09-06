"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Alert = _interopRequireDefault(require("./Alert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example / Alerts',
  component: _Alert.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=12%3A2'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Alert.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  type: 'alert',
  label: 'This is a Alert!',
  size: 'medium'
};

var Template2 = function Template2() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "primary",
    label: "This is a small Alert!",
    size: "small"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "primary",
    label: "This is a medium Alert!",
    size: "medium"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "primary",
    label: "This is a large Alert!",
    size: "large"
  }));
};

var Sizes = Template2.bind({});
exports.Sizes = Sizes;