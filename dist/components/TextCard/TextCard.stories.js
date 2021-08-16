"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TextCard = _interopRequireDefault(require("./TextCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Cards',
  component: _TextCard.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_TextCard.default, args);
};

var CardText = Template.bind(null);
exports.CardText = CardText;