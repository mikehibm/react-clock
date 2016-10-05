/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 2);
	var App_tsx_1 = __webpack_require__(/*! ./App.tsx */ 3);
	ReactDOM.render(React.createElement(App_tsx_1.App, null), document.getElementById("app"));


/***/ },
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 1);
	var Clock_tsx_1 = __webpack_require__(/*! ./Clock.tsx */ 4);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("h3", null, "React Clock Sample"), React.createElement(Clock_tsx_1.Clock, null)));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 4 */
/*!*******************!*\
  !*** ./Clock.tsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var moment = __webpack_require__(/*! moment */ 5);
	var React = __webpack_require__(/*! react */ 1);
	var Clock = (function (_super) {
	    __extends(Clock, _super);
	    function Clock(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.state = { now: null };
	        this.timer = setInterval(function () {
	            var now = new Date();
	            _this.setState({ now: now });
	        }, 300);
	    }
	    Clock.prototype.render = function () {
	        var now = this.state.now;
	        var timeStr = now ? moment(now).format('YYYY-MM-DD HH:mm:ss') : 'Loading...';
	        return (React.createElement("h1", {className: "clock"}, timeStr));
	    };
	    return Clock;
	}(React.Component));
	exports.Clock = Clock;


/***/ },
/* 5 */
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = moment;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map