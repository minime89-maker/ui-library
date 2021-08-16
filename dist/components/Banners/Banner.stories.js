"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerBasic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Banner = _interopRequireDefault(require("./Banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Template',
  component: _Banner.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Banner.default, args);
};

var BannerBasic = Template.bind(null);
exports.BannerBasic = BannerBasic;