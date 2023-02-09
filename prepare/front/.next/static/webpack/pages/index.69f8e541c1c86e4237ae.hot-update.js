webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\CommentForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var CommentForm = function CommentForm(_ref) {
  _s();
  var post = _ref.post;
  var id = useSelector();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(""),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    commentText = _useInput2[0],
    onChangeCommentText = _useInput2[1];
  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(post.id, commentText);
  }, [commentText]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onFinish: onSubmitComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    value: commentText,
    onChange: onChangeCommentText,
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "\uC090\uC57D"));
};
_s(CommentForm, "PptqMkMnW7reCXQEE7qotaIWwp0=", true, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);
var _c;
$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwidXNlSW5wdXQiLCJjb21tZW50VGV4dCIsIm9uQ2hhbmdlQ29tbWVudFRleHQiLCJvblN1Ym1pdENvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNBO0FBQ0Y7QUFDUDtBQUVsQyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3ZCLElBQU1DLEVBQUUsR0FBR0MsV0FBVyxFQUFFO0VBQzFCLGdCQUEyQ0MsK0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTtJQUFoREMsV0FBVztJQUFFQyxtQkFBbUI7RUFDdkMsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDeENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUNDLEVBQUUsRUFBRUcsV0FBVyxDQUFDO0VBQ25DLENBQUMsRUFBRSxDQUFDQSxXQUFXLENBQUMsQ0FBQztFQUNqQixPQUNFLE1BQUMseUNBQUk7SUFBQyxRQUFRLEVBQUVFLGVBQWdCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDOUIsTUFBQywwQ0FBSyxDQUFDLFFBQVE7SUFDYixLQUFLLEVBQUVGLFdBQVk7SUFDbkIsUUFBUSxFQUFFQyxtQkFBb0I7SUFDOUIsSUFBSSxFQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNSLEVBQ0YsTUFBQywyQ0FBTTtJQUFDLElBQUksRUFBQyxTQUFTO0lBQUMsUUFBUSxFQUFDLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxrQkFFL0IsQ0FDSjtBQUVYLENBQUM7QUFBQyxHQWxCSU4sV0FBVztFQUFBLFFBRTRCSSx1REFBUTtBQUFBO0FBQUEsS0FGL0NKLFdBQVc7QUFvQmpCQSxXQUFXLENBQUNXLFNBQVMsR0FBRztFQUNwQlYsSUFBSSxFQUFFVyxpREFBUyxDQUFDQyxNQUFNLENBQUNDO0FBQzNCLENBQUM7QUFFY2QsMEVBQVcsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjlmOGU1NDFjMWM4NmU0MjM3YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcigpXHJcbiAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0XSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IG9uU3VibWl0Q29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHBvc3QuaWQsIGNvbW1lbnRUZXh0KVxyXG4gIH0sIFtjb21tZW50VGV4dF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRDb21tZW50fT5cclxuICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fVxyXG4gICAgICAgIHJvd3M9ezR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIOyCkOyVvVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==