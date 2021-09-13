"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Breadcrumbs',
  component: _Breadcrumbs.default,
  parameters: {
    status: {
      type: 'beta'
    }
  }
};
exports.default = _default;

var Template2 = function Template2(args) {
  return /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, args);
};

var Default = Template2.bind({});
exports.Default = Default;
Default.args = {
  action: 'Home',
  link: '/home',
  current: 'Catalog'
};