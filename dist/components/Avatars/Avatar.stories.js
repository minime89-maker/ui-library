"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _AvatarGroup = _interopRequireDefault(require("./AvatarGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Avatars',
  component: _Avatar.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Avatar.default, args);
};

var Standard = Template.bind(null);
exports.Standard = Standard;

var Group = function Group(args) {
  return /*#__PURE__*/_react.default.createElement(_AvatarGroup.default, args);
};

exports.Group = Group;