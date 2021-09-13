"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingPage = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Showcase = _interopRequireDefault(require("./Showcase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Template/Showcase',
  component: _Showcase.default
};
exports.default = _default;

var Template = function Template() {
  return /*#__PURE__*/_react.default.createElement(_Showcase.default, null);
};

var LandingPage = Template.bind(null);
exports.LandingPage = LandingPage;
LandingPage.parameters = {
  controls: {
    expanded: false
  }
};