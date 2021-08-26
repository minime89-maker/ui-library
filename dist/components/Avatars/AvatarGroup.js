"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AvatarGroup = function AvatarGroup(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap -space-x-4"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    badge: false
  }), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    badge: false,
    image: "https://images.nintendolife.com/4d6e4792ce0db/luigi.original.jpg"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    badge: false,
    image: "https://png.pngitem.com/pimgs/s/126-1261833_mushrooms-clipart-guy-new-super-mario-bros-mushroom.png"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    image: "https://i.pinimg.com/originals/1c/c6/19/1cc61968cf9336a6c7a7a36b352b9abc.jpg"
  }));
};

AvatarGroup.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
AvatarGroup.defaultProps = {
  children: null,
  className: ''
};
var _default = AvatarGroup;
exports.default = _default;