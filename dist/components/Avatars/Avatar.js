"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      badge = _ref.badge;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-max relative"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "Mario",
    className: "w-20 h-20 rounded-full shadow-md border-2 border-gray-30 object-cover"
  }), /*#__PURE__*/_react.default.createElement("div", null, badge && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-4 h-4 bg-purple-60 border border-white absolute right-0 top-2 rounded-full animate-bounce"
  }, badge)));
};

Avatar.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  badge: _propTypes.default.bool,
  image: _propTypes.default.string,
  small: _propTypes.default.bool
};
Avatar.defaultProps = {
  children: null,
  className: '',
  badge: true,
  image: 'https://assets.kompasiana.com/items/album/2020/09/21/mariobros-5f68470ed541df32ac17dd02.jpg?t=o&v=325'
};
var _default = Avatar;
exports.default = _default;