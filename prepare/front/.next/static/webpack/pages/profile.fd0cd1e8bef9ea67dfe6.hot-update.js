webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\UserProfile.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var UserProfile = function UserProfile() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["logoutAction"])());
  }, []);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    actions: [__jsx("div", {
      key: "twit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, "\uC9F9\uC9F9", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "followings",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC789", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), "0"), __jsx("div", {
      key: "followers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, "\uD314\uB85C\uC6CC", __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }), "0")],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 26
      }
    }, "JF"),
    title: me,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onLogOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "LOG-OUT"));
};
_s(UserProfile, "aw/jRCsHlf909PAzJUmj3tAWhoQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);
var _c;
$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaWQiLCJvbkxvZ091dCIsInVzZUNhbGxiYWNrIiwibG9nb3V0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNDO0FBQ087QUFDTjtBQUU3QyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQUE7RUFDeEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUE7SUFBQSx5QkFBR0EsS0FBSyxDQUFDQyxJQUFJLENBQUNILEVBQUUsbURBQWIsZUFBZUksRUFBRTtFQUFBLEVBQUM7RUFDbEQsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakNSLFFBQVEsQ0FBQ1MsbUVBQVksRUFBRSxDQUFDO0VBQzFCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixPQUNFLE1BQUMseUNBQUk7SUFDSCxPQUFPLEVBQUUsQ0FDUDtNQUFLLEdBQUcsRUFBQyxNQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsbUJBRWI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFNLE1BQ0YsRUFDTjtNQUFLLEdBQUcsRUFBQyxZQUFZO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEseUJBRW5CO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBTSxNQUNGLEVBQ047TUFBSyxHQUFHLEVBQUMsV0FBVztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLHlCQUVsQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQU0sTUFDRixDQUNOO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFRixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUFDLE1BQU0sRUFBRSxNQUFDLDJDQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsUUFBYTtJQUFDLEtBQUssRUFBRVAsRUFBRztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDckQsTUFBQywyQ0FBTTtJQUFDLE9BQU8sRUFBRUssUUFBUztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBQWlCLENBQ3RDO0FBRVgsQ0FBQztBQUFDLEdBNUJJUixXQUFXO0VBQUEsUUFDRUUsdURBQVcsRUFDakJFLHVEQUFXO0FBQUE7QUFBQSxLQUZsQkosV0FBVztBQThCRkEsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mZDBjZDFlOGJlZjllYTY3ZGZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCx1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHtsb2dvdXRBY3Rpb259IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCJcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IG1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlci5tZT8uaWQpXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRBY3Rpb24oKSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZFxyXG4gICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgPGRpdiBrZXk9XCJ0d2l0XCI+XHJcbiAgICAgICAgICDsp7nsp7lcclxuICAgICAgICAgIDxiciAvPjBcclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dpbmdzXCI+XHJcbiAgICAgICAgICDtjJTroZzsnolcclxuICAgICAgICAgIDxiciAvPjBcclxuICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgPGRpdiBrZXk9XCJmb2xsb3dlcnNcIj5cclxuICAgICAgICAgIO2MlOuhnOybjFxyXG4gICAgICAgICAgPGJyIC8+MFxyXG4gICAgICAgIDwvZGl2PixcclxuICAgICAgXX1cclxuICAgID5cclxuICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+SkY8L0F2YXRhcj59IHRpdGxlPXttZX0gLz5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0+TE9HLU9VVDwvQnV0dG9uPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==