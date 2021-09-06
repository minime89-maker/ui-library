"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var players = [{
  id: 1,
  name: 'Mario',
  value: 'Mario'
}, {
  id: 2,
  name: 'Luigi',
  value: 'Luigi'
}, {
  id: 3,
  name: 'Princess Peach',
  value: 'Princess Peach'
}, {
  id: 4,
  name: 'Diddy Kong',
  value: 'Diddy Kong'
}];

var DropdownFilled = function DropdownFilled(_ref) {
  var children = _ref.children,
      className = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      id = _ref.id,
      filled = _ref.filled;
  var classes = (0, _classnames.default)({
    'border-b-2 border-gray-30 bg-gray-10 focus:outline-none focus:border-blue': filled
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-full"
  }, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("option", {
    className: "text-gray-50 text-xs absolute left-0 m-1 -top-5",
    value: value
  }, "Select a Player:"), /*#__PURE__*/_react.default.createElement("select", {
    className: "".concat(classes, " h-10 w-full"),
    onChange: onChange,
    name: id,
    id: id
  }, players && players.map(function (player) {
    return /*#__PURE__*/_react.default.createElement("option", {
      className: "text-gray-80",
      key: player.id,
      value: player.value
    }, player.name);
  })));
};

DropdownFilled.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  method: _propTypes.default.string,
  action: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func,
  filled: _propTypes.default.bool
};
DropdownFilled.defaultProps = {
  children: null,
  className: '',
  method: 'GET',
  action: '',
  value: '',
  id: '',
  filled: true
};
var _default = DropdownFilled;
exports.default = _default;