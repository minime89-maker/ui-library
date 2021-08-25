"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Buttons/Button"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = function Banner(_ref) {
  var image = _ref.image,
      children = _ref.children,
      className = _ref.className,
      cta = _ref.cta,
      title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "py-8 px-4 rounded-default ",
    style: {
      backgroundImage: "url(".concat(image, ")"),
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-1/2 text-left"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h1 text-gray-10 pb-4 font-semibold"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h4 text-gray-10 pb-20 italic"
  }, description)), /*#__PURE__*/_react.default.createElement("div", null, cta || /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary"
  })));
};

Banner.propTypes = {
  image: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  cta: _propTypes.default.node,
  title: _propTypes.default.string,
  description: _propTypes.default.string
};
Banner.defaultProps = {
  image: 'https://images7.alphacoders.com/331/331539.png',
  children: null,
  className: '',
  cta: null,
  title: 'Super Mario',
  description: 'Super Mario is a video game developed by Nintendo and published by Nintendo.'
};
var _default = Banner;
exports.default = _default;