"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Range = function Range(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step;

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isValue = _React$useState2[0],
      setValue = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children && /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col items-baseline justify-center"
  }, /*#__PURE__*/_react.default.createElement("label", {
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }, step || ''), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    id: id,
    min: min,
    max: max
  })));
};

Range.propTypes = {
  id: _propTypes.default.string,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  label: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
Range.defaultProps = {
  id: 'file',
  min: 0,
  max: 100,
  label: '',
  children: null,
  className: ''
};
var _default = Range;
exports.default = _default;