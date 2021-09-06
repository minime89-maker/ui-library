"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../Avatars/Avatar"));

var _Block = _interopRequireDefault(require("../Block/Block"));

var _Badge = _interopRequireDefault(require("../Badge/Badge"));

var _Button = _interopRequireDefault(require("../Buttons/Button"));

var _InputOutlined = _interopRequireDefault(require("../Inputs/InputOutlined"));

var _TextAreaOutlined = _interopRequireDefault(require("../TextAreas/TextAreaOutlined"));

var _Alert = _interopRequireDefault(require("../Alerts/Alert"));

var _MediaCard = _interopRequireDefault(require("../MediaCard/MediaCard"));

var _DropdownFilled = _interopRequireDefault(require("../Dropdowns/DropdownFilled"));

var _Input = _interopRequireDefault(require("../Inputs/Input"));

var _TextArea = _interopRequireDefault(require("../TextAreas/TextArea"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Showcase = function Showcase() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "py-6 px-4 bg-gray-10 h-full w-full flex flex-col space-y-20"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "px-4"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.npmjs.com/package/minja-ui",
    className: "text-gray-80 text-light"
  }, "version 0.1.11")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/minime89-maker"
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.LogoGithub32, null))))), /*#__PURE__*/_react.default.createElement("main", {
    className: "flex items-center justify-center flex-wrap text-center mb-8 xl:justify-around xl:pl-20"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-14 xl:pr-10"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-h1 font-semibold text-gray-80 xl:text-left xl:text-6xl xl:pb-2"
  }, "minja-ui"), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-h3 font-light text-gray-60 xl:text-3xl"
  }, "Taiwind CSS Components"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react.default.createElement(_Block.default, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "py-2 px-3 font-semibold text-gray-80"
  }, "npm i minja-ui")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.npmjs.com/package/minja-ui"
  }, "HOW TO USE?")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "xl:transform xl:rotate-3 xl:overflow-x-hidden"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap justify-center"
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "p-6 text-center flex flex-col items-center justify-center mt-4 w-80"
  }, " ", /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-h2 text-gray-80"
  }, "John Doe"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-60"
  }, "Web Developer"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-60"
  }, "Graphic Designer"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex my-4 space-x-2 mb-14"
  }, /*#__PURE__*/_react.default.createElement(_Badge.default, null, "Designer"), /*#__PURE__*/_react.default.createElement(_Badge.default, null, "Developer"), /*#__PURE__*/_react.default.createElement(_Badge.default, null, "Rider")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary"
  }, "FOLLOW")), /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "px-6 py-2 w-80"
  }, " ", /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-h2 font-semibold text-center"
  }, "Contact Us"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/_react.default.createElement(_InputOutlined.default, {
    label: "First Name",
    required: true
  }), /*#__PURE__*/_react.default.createElement(_InputOutlined.default, {
    label: "Last Name"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextAreaOutlined.default, {
    label: "Message"
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "mx-auto my-2"
  }, "SUBMIT")), /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "space-y-4 p-6 md:my-8 w-80"
  }, " ", /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "alert"
  }), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "secondary"
  }), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "warning",
    label: "This is Warning!"
  }), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "success",
    label: "This is Success!"
  }), /*#__PURE__*/_react.default.createElement(_Alert.default, {
    type: "error",
    label: "This is Error!"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap justify-center"
  }, /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "flex items-center justify-center p-6 md:mt-16 space-x-4 w-80"
  }, " ", /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "secondary"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "success"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "warning"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "error"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "link"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "btn"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "ghost"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "primary",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Email24, null)
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "btn",
    icon: /*#__PURE__*/_react.default.createElement(_iconsReact.Email24, null)
  }))), /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "text-left"
  }, " ", /*#__PURE__*/_react.default.createElement(_MediaCard.default, null)), /*#__PURE__*/_react.default.createElement(_Block.default, {
    className: "px-6 mt-10 xl:my-14 pb-6 space-y-3 w-80"
  }, " ", /*#__PURE__*/_react.default.createElement(_DropdownFilled.default, {
    className: "mb-3"
  }), /*#__PURE__*/_react.default.createElement(_Input.default, null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_TextArea.default, null))))), /*#__PURE__*/_react.default.createElement("footer", {
    className: "border-t-2 border-gray-30 pt-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-center space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    badge: false,
    image: "https://avatars.githubusercontent.com/u/77694499?v=4"
  }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-light text-body1 text-gray-60"
  }, "Designed and Developed by ", /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/in/milijan-popovic/",
    className: "font-semibold text-h3 text-gray-80"
  }, "MINJA")))));
};

var _default = Showcase;
exports.default = _default;