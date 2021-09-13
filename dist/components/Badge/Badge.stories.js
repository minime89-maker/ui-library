"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = _interopRequireDefault(require("./Badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Components/Badge',
  component: _Badge.default,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6TRta7vFoQwV601Fw9uJUl/minja-ui?node-id=151%3A623'
    },
    status: {
      type: 'stable'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Badge.default, args);
};

var Standard = Template.bind({});
exports.Standard = Standard;
Standard.args = {
  type: 'label',
  label: 'label'
};

var Template2 = function Template2() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "label",
    label: "label"
  }), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "primary",
    label: "label"
  }), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "secondary",
    label: "label"
  }), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "success",
    label: "label"
  }), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "warning",
    label: "label"
  }), /*#__PURE__*/_react.default.createElement(_Badge.default, {
    type: "error",
    label: "label"
  }));
};

var Group = Template2.bind({});
exports.Group = Group;