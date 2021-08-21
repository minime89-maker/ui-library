"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextCard = function TextCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      description = _ref.description,
      action = _ref.action,
      children = _ref.children,
      className = _ref.className,
      intro = _ref.intro,
      source = _ref.source;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "py-4 px-4 w-80 rounded-default shadow-md "
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "uppercase weight-light text-gray-70 text-body1"
  }, intro), /*#__PURE__*/_react.default.createElement("p", {
    className: " text-h3 pb-2"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-60 italic text-body pb-3 break-words"
  }, subtitle), /*#__PURE__*/_react.default.createElement("p", {
    className: " text-gray-60 text-body pb-3 weight-light"
  }, description), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-4 uppercase text-purple-60 font-semibold"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: source,
    target: "_blank"
  }, action))));
};

TextCard.propTypes = {
  title: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  description: _propTypes.default.string,
  action: _propTypes.default.any,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  intro: _propTypes.default.string,
  source: _propTypes.default.string
};
TextCard.defaultProps = {
  title: 'Cafe Luigi',
  subtitle: 'Italian restaurant',
  description: 'Small plates, salads & sandwiches an intimate setting with 12 indoor seats plus pation seating.',
  action: 'Book a Table',
  source: 'https://www.google.com',
  children: null,
  className: '',
  intro: 'New York, NY'
};
var _default = TextCard;
exports.default = _default;