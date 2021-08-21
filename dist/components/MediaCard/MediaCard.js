"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaCard = function MediaCard(_ref) {
  var intro = _ref.intro,
      title = _ref.title,
      subtitle = _ref.subtitle,
      description = _ref.description,
      action = _ref.action,
      media = _ref.media,
      children = _ref.children,
      className = _ref.className,
      source = _ref.source;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-1/2 rounded-default shadow-md overflow-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full rounded-b-none"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: media,
    alt: "Super Mario"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-4 px-4"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "uppercase weight-light text-gray-70 text-body1 pt-2"
  }, intro), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-h3 pb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-60 italic text-body pb-3"
  }, subtitle), /*#__PURE__*/_react.default.createElement("p", {
    className: " text-gray-60 text-body pb-3 weight-light"
  }, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end m-4 text-purple-60 font-semibold"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: source,
    target: "_blank"
  }, action))));
};

MediaCard.propTypes = {
  intro: _propTypes.default.string,
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  description: _propTypes.default.string,
  action: _propTypes.default.any,
  media: _propTypes.default.any,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  source: _propTypes.default.string
};
MediaCard.defaultProps = {
  intro: 'Nintendo',
  title: 'Super Mario',
  subtitle: 'Video Game',
  description: 'Super Mario is a video game developed by Nintendo and published by Nintendo.',
  action: 'Run Now!',
  source: 'https://www.nintendo.com/super-mario-bros',
  media: 'https://media.wired.com/photos/5926c126af95806129f50868/master/w_2560%2Cc_limit/SuperMarioRunTA.jpg'
};
var _default = MediaCard;
exports.default = _default;