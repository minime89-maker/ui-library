"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function Toggle(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "toggle",
    id: "toggleSwitch"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider round"
  })));
};

Toggle.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
Toggle.defaultProps = {
  children: null,
  className: ''
};
var _default = Toggle;
exports.default = _default;