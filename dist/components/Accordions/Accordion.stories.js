"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filled = exports.Outlined = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AccordionOutlined = _interopRequireDefault(require("./AccordionOutlined"));

var _Accordion = _interopRequireDefault(require("./Accordion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Accordions',
  component: _AccordionOutlined.default,
  Accordion: _Accordion.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=241%3A208'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_AccordionOutlined.default, args);
};

var Outlined = Template.bind({});
exports.Outlined = Outlined;

var Template2 = function Template2(args) {
  return /*#__PURE__*/_react.default.createElement(_Accordion.default, args);
};

var Filled = Template2.bind({});
exports.Filled = Filled;