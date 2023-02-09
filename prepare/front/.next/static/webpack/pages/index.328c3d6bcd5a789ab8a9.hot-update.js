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
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
var _this = undefined,
  _jsxFileName = "C:\\Users\\pc\\Desktop\\code\\JeroCho\\react-nodebird\\prepare\\front\\components\\PostCard.js",
  _s = $RefreshSig$();
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return __jsx("div", {
    style: {
      marginB: marginB
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
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
        lineNumber: 21,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })));
};
_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});
_c = PostCard;
PostCard.propTypes = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYXJnaW5CIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiQ29tbWVudHMiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNrQjtBQU0xQjtBQUNlO0FBQ0o7QUFFdEMsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVEsT0FBaUI7RUFBQTtFQUFBLElBQVhDLElBQUksUUFBSkEsSUFBSTtFQUN0QixJQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztJQUFBO0lBQUEseUJBQUtBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLG1EQUFiLGVBQWVKLEVBQUU7RUFBQSxFQUFDO0VBQ3BELE9BQ0U7SUFBSyxLQUFLLEVBQUU7TUFBQ0ssT0FBTyxFQUFQQTtJQUFPLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNwQixNQUFDLHlDQUFJO0lBQ0gsS0FBSyxFQUFFTixJQUFJLENBQUNPLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFDLG1EQUFVO01BQUMsTUFBTSxFQUFFUCxJQUFJLENBQUNPLE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQzdELE9BQU8sRUFBRTtJQUNQO0lBQ0EsTUFBQyxpRUFBZTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUNqQyxNQUFDLCtEQUFhO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzdCLE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakMsTUFBQyw0Q0FBTztNQUNOLEdBQUcsRUFBQyxNQUFNO01BQ1YsT0FBTyxFQUNMLE1BQUMsMkNBQU0sQ0FBQyxLQUFLO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDVk4sRUFBRSxJQUFJRCxJQUFJLENBQUNRLElBQUksQ0FBQ1AsRUFBRSxLQUFLQSxFQUFFLEdBQ3hCLG1FQUNFLE1BQUMsMkNBQU07UUFBQyxJQUFJLEVBQUMsU0FBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUFZLEVBQ2xDLE1BQUMsMkNBQU07UUFBQyxJQUFJLEVBQUMsUUFBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUFZLENBQ2hDLEdBRUgsTUFBQywyQ0FBTTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUNSLENBRUo7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVELE1BQUMsa0VBQWdCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxDQUNaLENBQ1Y7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVGLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQ1IsTUFBTSxFQUFFLE1BQUMsMkNBQU07TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFFRCxJQUFJLENBQUNRLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFXO0lBQ2pELEtBQUssRUFBRVQsSUFBSSxDQUFDUSxJQUFJLENBQUNDLFFBQVM7SUFDMUIsV0FBVyxFQUFFVCxJQUFJLENBQUNVLE9BQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUMxQixDQUNHLENBR0g7QUFFVixDQUFDO0FBQUMsR0F4Q0lYLFFBQVE7RUFBQSxRQUNERyx1REFBVztBQUFBO0FBQUEsS0FEbEJILFFBQVE7QUEwQ2RBLFFBQVEsQ0FBQ1ksU0FBUyxHQUFHO0VBQ25CO0VBQ0FYLElBQUksRUFBRVksaURBQVMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3BCWixFQUFFLEVBQUVXLGlEQUFTLENBQUNFLE1BQU07SUFDcEJOLElBQUksRUFBRUksaURBQVMsQ0FBQ0csTUFBTTtJQUN0QkwsT0FBTyxFQUFFRSxpREFBUyxDQUFDSSxNQUFNO0lBQ3pCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BQU07SUFDM0JHLFFBQVEsRUFBRU4saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNLENBQUM7SUFDN0NSLE1BQU0sRUFBRUssaURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzVDLENBQUMsQ0FBQyxDQUFDSztBQUNMLENBQUM7QUFFY3JCLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMyOGMzZDZiY2Q1YTc4OWFiOGE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5CfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIC8v67Cw7Je0IOyViOydmCBqc3jsl5DripQga2V56rCAIO2VhOyalFxyXG4gICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgLz4sXHJcbiAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIC8+LFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7siJjsoJU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7LyogPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgIDxDb21tZW50cyAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgLy9vYmplY3TripQgc2hhcGXrpbwg7IKs7Jqp7ZWY7JesIOq1rOyytOyggeycvOuhnCDrqoXsi5ztlZjsnpAuXHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==