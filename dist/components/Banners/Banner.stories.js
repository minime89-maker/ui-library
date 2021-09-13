"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerExample = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Banner = _interopRequireDefault(require("./Banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Banner',
  component: _Banner.default,
  parameters: {
    status: {
      type: 'stable'
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=265%3A218'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Banner.default, args);
};

var BannerExample = Template.bind(null);
exports.BannerExample = BannerExample;