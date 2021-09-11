"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      action = _ref.action,
      link = _ref.link,
      current = _ref.current;
  return /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("ol", {
    className: "breadcrumb flex"
  }, link && /*#__PURE__*/_react.default.createElement("li", {
    className: "breadcrumb-item text-gray-60"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link,
    className: "text-gray-60 hover:text-purple-50 mx-2 hover:underline"
  }, action)), current && /*#__PURE__*/_react.default.createElement("li", {
    className: "breadcrumb-item active text-purple-50 hover:text-purple-50 mx-2",
    "aria-current": "page"
  }, current)), children && /*#__PURE__*/_react.default.createElement("li", {
    className: className
  }, children)) // <nav aria-label="breadcrumb">
  // 	<ol className="breadcrumb flex items-center pt-3 pb-2" >
  // 		<li className="breadcrumb-item">
  // 			<a className={`font-normal text-md px-2 py-1 tracking-wide hover:bg-gray-10 rounded-default`}
  // 				aria-current="page"
  // 				href={link}
  // 			>
  // 				{!action ? 'Home' : action}
  // 			</a>
  // 		</li>
  // 		<>
  // 			{/* {separator && <div className="text-sm text-gray-60 mx-2">{separator}</div>} */}
  // 		</>
  // 	</ol>
  // 	{ children && <div className={className}>{children}</div> }
  // </nav>
  ;
};

Breadcrumbs.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  action: _propTypes.default.node,
  link: _propTypes.default.string,
  current: _propTypes.default.string
};
Breadcrumbs.defaultProps = {
  children: null,
  className: '',
  separator: '',
  action: '',
  link: ''
};
var _default = Breadcrumbs;
exports.default = _default;