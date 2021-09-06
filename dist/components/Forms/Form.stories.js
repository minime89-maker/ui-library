"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactUs = exports.SubscribeForm = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("./Form"));

var _Subscribe = _interopRequireDefault(require("./Subscribe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Forms',
  component: _Form.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=134%3A68'
    }
  }
};
exports.default = _default;

var Template2 = function Template2(args) {
  return /*#__PURE__*/_react.default.createElement(_Subscribe.default, args);
};

var SubscribeForm = Template2.bind({});
exports.SubscribeForm = SubscribeForm;
SubscribeForm.args = {
  title: 'Subscribe',
  description: 'Subscribe to our newsletter to recive product announcements.'
};

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Form.default, null);
};

var ContactUs = Template.bind({});
exports.ContactUs = ContactUs;