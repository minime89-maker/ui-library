"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Typography = function Typography(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, children));
};

Typography.propTypes = {
  children: _propTypes.default.node
};
Typography.defaultProps = {
  children: ''
};
var _default = Typography;
exports.default = _default;