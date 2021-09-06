"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Block = _interopRequireDefault(require("../Block/Block"));

var _Button = _interopRequireDefault(require("../Buttons/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaCard = function MediaCard(_ref) {
  var intro = _ref.intro,
      title = _ref.title,
      category = _ref.category,
      description = _ref.description,
      media = _ref.media,
      children = _ref.children,
      className = _ref.className,
      width = _ref.width,
      height = _ref.height,
      image = _ref.image,
      cardBody = _ref.cardBody,
      cta = _ref.cta;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-2 w-80 shadow-md"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), image || /*#__PURE__*/_react.default.createElement("img", {
    src: media,
    alt: title,
    width: width,
    height: height,
    className: "w-full object-contain rounded-t-extra"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "px-3 align-left"
  }, cardBody || /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "uppercase weight-light text-gray-70 text-body1 pt-2"
  }, intro), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h3 pb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "w-max bg-gray-10 text-gray-60 italic text-body my-4 px-2 rounded-default shadow font-semibold"
  }, category), /*#__PURE__*/_react.default.createElement("p", {
    className: " text-gray-60 text-body pb-12 weight-light"
  }, description)), cta || /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, "Read More")));
};

MediaCard.propTypes = {
  intro: _propTypes.default.string,
  title: _propTypes.default.string,
  category: _propTypes.default.string,
  description: _propTypes.default.string,
  action: _propTypes.default.any,
  media: _propTypes.default.any,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  alt: _propTypes.default.string,
  image: _propTypes.default.any,
  cardBody: _propTypes.default.any,
  cta: _propTypes.default.any
};
MediaCard.defaultProps = {
  intro: 'Prague',
  title: 'Zizkov Tower',
  category: 'Television',
  description: 'The tallest building in the Czech capital Prague will be without its landmark babies for the first time in sixteen years...',
  media: 'https://images.unsplash.com/photo-1630096446410-5706c853054e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  width: '100%',
  height: '100%'
};
var _default = MediaCard;
exports.default = _default;