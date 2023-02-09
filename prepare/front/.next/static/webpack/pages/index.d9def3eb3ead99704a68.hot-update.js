webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");

var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\PostForm.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PostForm = function PostForm() {
  _s();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(""),
    _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
    text = _useInput2[0],
    onChangeText = _useInput2[1];
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_5__["addPost"]);
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {}, [imageInput.current]);
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
      return state.post;
    }),
    imagesPaths = _useSelector.imagesPaths;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    style: {
      "float": "right"
    },
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "\uC9F9\uC9F9")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, imagesPaths.map(function (v) {
    return __jsx("div", {
      key: v,
      style: {
        display: "inline-block"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: v,
      style: {
        width: "200px"
      },
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }));
  })));
};
_s(PostForm, "kxsvnic0PSYHRBd2IJ06mJ1h1r8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);
var _c;
$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImFkZFBvc3QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJpbWFnZXNQYXRocyIsIm1hcmdpbiIsIm1hcCIsInYiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1I7QUFDRjtBQUNjO0FBQ1o7QUFFM0MsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsR0FBUztFQUFBO0VBQ3JCLElBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBRTtFQUMzQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsZ0JBQTZCQywrREFBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQWxDQyxJQUFJO0lBQUVDLFlBQVk7RUFDekIsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDakNOLFFBQVEsQ0FBQ08sc0RBQU8sQ0FBQztFQUNuQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBTUMsa0JBQWtCLEdBQUdGLHlEQUFXLENBQUMsWUFBSSxDQUUzQyxDQUFDLEVBQUMsQ0FBQ1IsVUFBVSxDQUFDVyxPQUFPLENBQUMsQ0FBQztFQUN2QixtQkFBd0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBbERDLFdBQVcsZ0JBQVhBLFdBQVc7RUFDbkIsT0FDRSxNQUFDLHlDQUFJO0lBQ0gsS0FBSyxFQUFFO01BQUVDLE1BQU0sRUFBRTtJQUFjLENBQUU7SUFDakMsT0FBTyxFQUFDLHFCQUFxQjtJQUM3QixRQUFRLEVBQUVULFFBQVM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVuQixNQUFDLDBDQUFLLENBQUMsUUFBUTtJQUNiLEtBQUssRUFBRUYsSUFBSztJQUNaLFFBQVEsRUFBRUMsWUFBYTtJQUN2QixTQUFTLEVBQUUsR0FBSTtJQUNmLFdBQVcsRUFBQyx3RUFBaUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUM3QixFQUNGO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsUUFBUTtJQUFDLE1BQU07SUFBQyxHQUFHLEVBQUVOLFVBQVc7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ3RELE1BQUMsMkNBQU07SUFBQyxPQUFPLEVBQUVVLGtCQUFtQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJDQUFpQixFQUNyRCxNQUFDLDJDQUFNO0lBQUMsSUFBSSxFQUFDLFNBQVM7SUFBQyxLQUFLLEVBQUU7TUFBRSxTQUFPO0lBQVEsQ0FBRTtJQUFDLFFBQVEsRUFBQyxRQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBRTFELENBQ0wsRUFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dLLFdBQVcsQ0FBQ0UsR0FBRyxDQUFDLFVBQUNDLENBQUM7SUFBQSxPQUNqQjtNQUFLLEdBQUcsRUFBRUEsQ0FBRTtNQUFDLEtBQUssRUFBRTtRQUFFQyxPQUFPLEVBQUU7TUFBZSxDQUFFO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDOUM7TUFBSyxHQUFHLEVBQUVELENBQUU7TUFBQyxLQUFLLEVBQUU7UUFBRUUsS0FBSyxFQUFFO01BQVEsQ0FBRTtNQUFDLEdBQUcsRUFBRUYsQ0FBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsQ0FDOUM7RUFBQSxDQUNQLENBQUMsQ0FDRSxDQUNEO0FBRVgsQ0FBQztBQUFDLEdBdkNJbkIsUUFBUTtFQUFBLFFBRUtJLHVEQUFXLEVBQ0NDLHVEQUFRLEVBT2JRLHVEQUFXO0FBQUE7QUFBQSxLQVYvQmIsUUFBUTtBQXlDQ0EsdUVBQVEsRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDlkZWYzZWIzZWFkOTk3MDRhNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3RleHQsIG9uQ2hhbmdlVGV4dF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGFkZFBvc3QpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG5cclxuICB9LFtpbWFnZUlucHV0LmN1cnJlbnRdKVxyXG4gIGNvbnN0IHsgaW1hZ2VzUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4IDAgMjBweFwiIH19XHJcbiAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgb25GaW5pc2g9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fVxyXG4gICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICDsp7nsp7lcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2ltYWdlc1BhdGhzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IGFsdD17dn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=