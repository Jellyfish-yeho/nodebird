webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\PostImages.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostImages = function PostImages(_ref) {
  _s();
  var images = _ref.images;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    showImagesZoom = _useState[0],
    setShowImagesZoom = _useState[1];
  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  if (images.length === 1) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }));
  }
  if (images.length === 2) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
      role: "presentation",
      style: {
        width: '50%'
      },
      src: images[0].src,
      alt: images[0].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }), __jsx("img", {
      role: "presentation",
      style: {
        width: '50%'
      },
      src: images[1].src,
      alt: images[1].src,
      onClick: onZoom,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }));
  }
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("img", {
    role: "presentation",
    width: "50%",
    src: images[0].src,
    alt: images[0].src,
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx("div", {
    role: "presentation",
    style: {
      display: "inline-block",
      width: "50%",
      textAlign: "center",
      verticalAlign: "middle"
    },
    onClick: onZoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")));
};
_s(PostImages, "UE9uMxceBgwv4jfRR4p3tn5mPaU=");
_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);
var _c;
$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsImxlbmd0aCIsInNyYyIsIndpZHRoIiwiZGlzcGxheSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNsQjtBQUNjO0FBRWpELElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFVLE9BQW1CO0VBQUE7RUFBQSxJQUFiQyxNQUFNLFFBQU5BLE1BQU07RUFDMUIsZ0JBQTRDQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFwREMsY0FBYztJQUFFQyxpQkFBaUI7RUFDeEMsSUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDL0JGLGlCQUFpQixDQUFDLElBQUksQ0FBQztFQUN6QixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBSUgsTUFBTSxDQUFDTSxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3ZCLE9BQ0UsbUVBQ0U7TUFDRSxJQUFJLEVBQUMsY0FBYztNQUNuQixHQUFHLEVBQUVOLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBSTtNQUNuQixHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBSTtNQUNuQixPQUFPLEVBQUVILE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUNoQixDQUNEO0VBRVA7RUFDQSxJQUFJSixNQUFNLENBQUNNLE1BQU0sS0FBSyxDQUFDLEVBQUU7SUFDdkIsT0FDRSxtRUFDRTtNQUNFLElBQUksRUFBQyxjQUFjO01BQ25CLEtBQUssRUFBRTtRQUFDRSxLQUFLLEVBQUU7TUFBSyxDQUFFO01BQ3RCLEdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFJO01BQ25CLEdBQUcsRUFBRVAsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDTyxHQUFJO01BQ25CLE9BQU8sRUFBRUgsTUFBTztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQ2hCLEVBQ0Y7TUFDRSxJQUFJLEVBQUMsY0FBYztNQUNuQixLQUFLLEVBQUU7UUFBQ0ksS0FBSyxFQUFFO01BQUssQ0FBRTtNQUN0QixHQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBSTtNQUNuQixHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sR0FBSTtNQUNuQixPQUFPLEVBQUVILE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUNoQixDQUNEO0VBRVA7RUFDQSxPQUNFLG1FQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUNFLElBQUksRUFBQyxjQUFjO0lBQ25CLEtBQUssRUFBQyxLQUFLO0lBQ1gsR0FBRyxFQUFFSixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUk7SUFDbkIsR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNPLEdBQUk7SUFDbkIsT0FBTyxFQUFFSCxNQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFDaEIsRUFDRjtJQUNFLElBQUksRUFBQyxjQUFjO0lBQ25CLEtBQUssRUFBRTtNQUNMSyxPQUFPLEVBQUUsY0FBYztNQUN2QkQsS0FBSyxFQUFFLEtBQUs7TUFDWkUsU0FBUyxFQUFFLFFBQVE7TUFDbkJDLGFBQWEsRUFBRTtJQUNqQixDQUFFO0lBQ0YsT0FBTyxFQUFFUCxNQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFZCxNQUFDLDhEQUFZO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQU0sRUFDTEosTUFBTSxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxpREFFaEIsQ0FDRixDQUNMO0FBRVAsQ0FBQztBQUFDLEdBakVJUCxVQUFVO0FBQUEsS0FBVkEsVUFBVTtBQW1FaEJBLFVBQVUsQ0FBQ2EsU0FBUyxHQUFHO0VBQ3JCWixNQUFNLEVBQUVhLGlEQUFTLENBQUNDLE9BQU8sQ0FBQ0QsaURBQVMsQ0FBQ0UsTUFBTTtBQUM1QyxDQUFDO0FBRWNoQix5RUFBVSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTdlMDE0OWUwYjI4MzAzNTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgW3Nob3dJbWFnZXNab29tLCBzZXRTaG93SW1hZ2VzWm9vbV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0U2hvd0ltYWdlc1pvb20odHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNTAlJ319XHJcbiAgICAgICAgICBzcmM9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvblpvb219XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICc1MCUnfX1cclxuICAgICAgICAgIHNyYz17aW1hZ2VzWzFdLnNyY31cclxuICAgICAgICAgIGFsdD17aW1hZ2VzWzFdLnNyY31cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgc3JjPXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgYWx0PXtpbWFnZXNbMF0uc3JjfVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX1cclxuICAgICAgICAgICAg6rCc7J2YIOyCrOynhCDrjZTrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=