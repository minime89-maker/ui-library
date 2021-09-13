"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components / Buttons',
  component: _Button.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=2%3A2'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  variant: 'btn',
  size: 'medium',
  disabled: false
};

var Template2 = function Template2() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " flex flex-col items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Bee24, null),
    size: "small",
    disabled: false
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Bee24, null),
    size: "medium",
    disabled: false
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Bee24, null),
    size: "large",
    disabled: false
  }));
};

var Sizes = Template2.bind({});
exports.Sizes = Sizes;