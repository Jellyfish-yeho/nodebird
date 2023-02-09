webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\PostCard.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Images[0] && __jsx(PostImages, {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 34
      }
    }),
    actions: [
    //배열 안의 jsx에는 key가 필요
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 18
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }, "\uC0AD\uC81C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(Image, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(Buttons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(CommentForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
};
_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c = PostCard;
PostCard.PropTypes = {
  //object는 shape를 사용하여 구체적으로 명시하자.
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiSW1hZ2VzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJVc2VyIiwib2JqZWN0IiwiY29udGVudCIsInN0cmluZyIsImNyZWF0ZWRBdCIsIkNvbW1lbnRzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNVO0FBTWxCO0FBQ2U7QUFFMUMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FBaUI7RUFBQTtFQUFBLElBQVhDLElBQUksUUFBSkEsSUFBSTtFQUN0QixJQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztJQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtFQUFBLEVBQUM7RUFDN0MsT0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5Q0FBSTtJQUNILEtBQUssRUFBRUosSUFBSSxDQUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBQyxVQUFVO01BQUMsTUFBTSxFQUFFTCxJQUFJLENBQUNLLE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQzdELE9BQU8sRUFBRTtJQUNQO0lBQ0EsTUFBQyxpRUFBZTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUNqQyxNQUFDLCtEQUFhO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzdCLE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakMsTUFBQyw0Q0FBTztNQUNOLEdBQUcsRUFBQyxNQUFNO01BQ1YsT0FBTyxFQUNMLE1BQUMsMkNBQU0sQ0FBQyxLQUFLO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDVixNQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFNBQVM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxFQUNuQyxNQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFFBQVE7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxFQUNqQyxNQUFDLDJDQUFNO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsa0JBQVksQ0FFdEI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVELE1BQUMsa0VBQWdCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxDQUNaLENBQ1Y7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVGLE1BQUMsS0FBSztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDVCxNQUFDLE9BQU87SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ1gsTUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBVyxDQUNkLEVBQ1AsTUFBQyxXQUFXO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNmLE1BQUMsUUFBUTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsQ0FDUjtBQUVWLENBQUM7QUFBQyxHQWpDSU4sUUFBUTtFQUFBLFFBQ0RHLHVEQUFXO0FBQUE7QUFBQSxLQURsQkgsUUFBUTtBQW1DZEEsUUFBUSxDQUFDTyxTQUFTLEdBQUc7RUFBRTtFQUNyQk4sSUFBSSxFQUFFTSxpREFBUyxDQUFDQyxLQUFLLENBQUM7SUFDcEJOLEVBQUUsRUFBRUssaURBQVMsQ0FBQ0UsTUFBTTtJQUNwQkMsSUFBSSxFQUFFSCxpREFBUyxDQUFDSSxNQUFNO0lBQ3RCQyxPQUFPLEVBQUVMLGlEQUFTLENBQUNNLE1BQU07SUFDekJDLFNBQVMsRUFBRVAsaURBQVMsQ0FBQ0ksTUFBTTtJQUMzQkksUUFBUSxFQUFFUixpREFBUyxDQUFDUyxPQUFPLENBQUNULGlEQUFTLENBQUNJLE1BQU0sQ0FBQztJQUM3Q0wsTUFBTSxFQUFFQyxpREFBUyxDQUFDUyxPQUFPLENBQUNULGlEQUFTLENBQUNJLE1BQU07RUFDNUMsQ0FBQyxDQUFDLENBQUNNO0FBQ0wsQ0FBQztBQUVjakIsdUVBQVEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjM2NWE1MWRlZjg3NWY1NThkZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIC8v67Cw7Je0IOyViOydmCBqc3jsl5DripQga2V56rCAIO2VhOyalFxyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHs8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+7IiY7KCVPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2UgLz5cclxuICAgICAgICA8Q29udGVudCAvPlxyXG4gICAgICAgIDxCdXR0b25zPjwvQnV0dG9ucz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgPENvbW1lbnRzIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQuUHJvcFR5cGVzID0geyAvL29iamVjdOuKlCBzaGFwZeulvCDsgqzsmqntlZjsl6wg6rWs7LK07KCB7Jy866GcIOuqheyLnO2VmOyekC5cclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9