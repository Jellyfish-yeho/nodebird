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
  var _post$Images$;
  var post = _ref.post;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    liked = _useState[0],
    setLiked = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
    commentFormOpened = _useState2[0],
    setCommentFormOpened = _useState2[1];
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  console.log("id", id);
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    cover: ((_post$Images$ = post.Images[0]) === null || _post$Images$ === void 0 ? void 0 : _post$Images$.src) && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 39
      }
    }),
    actions: [
    //배열 안의 jsx에는 key가 필요
    __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      key: "comment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })));
};
_s(PostCard, "bdrNUpTRpiSbLJZ60VfDe9W9ESI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJ1c2VTdGF0ZSIsImxpa2VkIiwic2V0TGlrZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwib25Ub2dnbGVMaWtlIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Ub2dnbGVDb21tZW50IiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkJvdHRvbSIsIkltYWdlcyIsInNyYyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImNyZWF0ZWRBdCIsIkNvbW1lbnRzIiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ2xCO0FBQ2tCO0FBTzFCO0FBQ2U7QUFDSjtBQUV0QyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQjtFQUFBO0VBQUE7RUFBQSxJQUFYQyxJQUFJLFFBQUpBLElBQUk7RUFDdEIsZ0JBQTBCQyxzREFBUSxDQUFDLEtBQUssQ0FBQztJQUFsQ0MsS0FBSztJQUFFQyxRQUFRO0VBQ3RCLGlCQUFrREYsc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBMURHLGlCQUFpQjtJQUFFQyxvQkFBb0I7RUFDOUMsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7SUFBQTtJQUFBLHlCQUFLQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsRUFBRSxtREFBYixlQUFlSixFQUFFO0VBQUEsRUFBQztFQUNwRCxJQUFNSyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNyQ1QsUUFBUSxDQUFDLFVBQUNVLElBQUk7TUFBQSxPQUFHLENBQUNBLElBQUk7SUFBQSxFQUFDO0VBQ3pCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFNQyxlQUFlLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtJQUN4Q1Asb0JBQW9CLENBQUMsVUFBQ1EsSUFBSTtNQUFBLE9BQUcsQ0FBQ0EsSUFBSTtJQUFBLEVBQUM7RUFDckMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNORSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVWLEVBQUUsQ0FBQztFQUNyQixPQUNFO0lBQUssS0FBSyxFQUFFO01BQUVXLFlBQVksRUFBRTtJQUFHLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMvQixNQUFDLHlDQUFJO0lBQ0gsS0FBSyxFQUFFLGtCQUFBakIsSUFBSSxDQUFDa0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxrREFBZCxjQUFnQkMsR0FBRyxLQUFJLE1BQUMsbURBQVU7TUFBQyxNQUFNLEVBQUVuQixJQUFJLENBQUNrQixNQUFPO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBSTtJQUNsRSxPQUFPLEVBQUU7SUFDUDtJQUNBLE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakNoQixLQUFLLEdBQ0gsTUFBQyw4REFBWTtNQUFDLFlBQVksRUFBQyxTQUFTO01BQUMsT0FBTyxFQUFFUyxZQUFhO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxHQUU5RCxNQUFDLCtEQUFhO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQyxPQUFPLEVBQUVBLFlBQWE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUNsRCxFQUNELE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakMsTUFBQyw0Q0FBTztNQUNOLEdBQUcsRUFBQyxNQUFNO01BQ1YsT0FBTyxFQUNMLE1BQUMsMkNBQU0sQ0FBQyxLQUFLO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDVkwsRUFBRSxJQUFJTixJQUFJLENBQUNvQixJQUFJLENBQUNkLEVBQUUsS0FBS0EsRUFBRSxHQUN4QixtRUFDRSxNQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFNBQVM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxFQUNsQyxNQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFFBQVE7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFBWSxDQUNoQyxHQUVILE1BQUMsMkNBQU07UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxrQkFDUixDQUVKO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FFRCxNQUFDLGtFQUFnQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsQ0FDWixDQUNWO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FFRixNQUFDLHlDQUFJLENBQUMsSUFBSTtJQUNSLE1BQU0sRUFBRSxNQUFDLDJDQUFNO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FBRU4sSUFBSSxDQUFDb0IsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVc7SUFDakQsS0FBSyxFQUFFckIsSUFBSSxDQUFDb0IsSUFBSSxDQUFDQyxRQUFTO0lBQzFCLFdBQVcsRUFBRXJCLElBQUksQ0FBQ3NCLE9BQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUMxQixDQUNHLENBR0g7QUFFVixDQUFDO0FBQUMsR0FyREl2QixRQUFRO0VBQUEsUUFHRFEsdURBQVc7QUFBQTtBQUFBLEtBSGxCUixRQUFRO0FBdURkQSxRQUFRLENBQUN3QixTQUFTLEdBQUc7RUFDbkI7RUFDQXZCLElBQUksRUFBRXdCLGlEQUFTLENBQUNDLEtBQUssQ0FBQztJQUNwQm5CLEVBQUUsRUFBRWtCLGlEQUFTLENBQUNFLE1BQU07SUFDcEJOLElBQUksRUFBRUksaURBQVMsQ0FBQ0csTUFBTTtJQUN0QkwsT0FBTyxFQUFFRSxpREFBUyxDQUFDSSxNQUFNO0lBQ3pCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BQU07SUFDM0JHLFFBQVEsRUFBRU4saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNLENBQUM7SUFDN0NULE1BQU0sRUFBRU0saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzVDLENBQUMsQ0FBQyxDQUFDSztBQUNMLENBQUM7QUFFY2pDLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjNGRjOTJjMTkxZTcxMjVhMmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIEhlYXJ0VHdvVG9uZSxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExpa2VkKChwcmV2KT0+IXByZXYpXHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KT0+IXByZXYpXHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKFwiaWRcIiwgaWQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdPy5zcmMgJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgLy/rsLDsl7Qg7JWI7J2YIGpzeOyXkOuKlCBrZXnqsIAg7ZWE7JqUXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgIGxpa2VkID8gKFxyXG4gICAgICAgICAgICA8SGVhcnRUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiPuyCreygnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24+7Iug6rOgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Bvc3QuY29udGVudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHsvKiA8Q29tbWVudEZvcm0gLz5cclxuICAgICAgPENvbW1lbnRzIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAvL29iamVjdOuKlCBzaGFwZeulvCDsgqzsmqntlZjsl6wg6rWs7LK07KCB7Jy866GcIOuqheyLnO2VmOyekC5cclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9