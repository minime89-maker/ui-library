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
    className: " w-screen py-10 px-14 ",
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
    className: "text-h1 text-gray-80 pb-4 font-semibold"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h4 text-gray-60 pb-20 italic"
  }, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-start"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.mastercard.com/global/en.html",
    className: "text-gray-30 text-body hover:underline mr-14"
  }, "Paying with Credit Card ?"), cta || /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    size: "large"
  }, "PAY NOW")));
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
  image: 'https://images.unsplash.com/photo-1577962144759-8dec6b55c952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
  children: null,
  className: '',
  cta: null,
  title: 'Cash Register',
  description: 'A cash register, sometimes called a till or automated money handling system, is a mechanical or electronic device for registering and calculating transactions at a point of sale. '
};
var _default = Banner;
exports.default = _default;