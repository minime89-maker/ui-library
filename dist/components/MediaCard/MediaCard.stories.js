"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardMedia = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MediaCard = _interopRequireDefault(require("./MediaCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Cards',
  component: _MediaCard.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=145%3A580'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_MediaCard.default, args);
};

var CardMedia = Template.bind(null);
exports.CardMedia = CardMedia;