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
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
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
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "danger",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 19
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
        lineNumber: 38,
        columnNumber: 13
      }
    }))],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 28
      }
    }, post.User.nickname),
    title: post.User.nickname,
    description: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(Image, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(Buttons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(CommentForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJDb21tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDa0I7QUFNMUI7QUFDZTtBQUUxQyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFpQjtFQUFBO0VBQUEsSUFBWEMsSUFBSSxRQUFKQSxJQUFJO0VBQ3RCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO0lBQUE7SUFBQSx5QkFBS0EsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEVBQUUsbURBQWIsZUFBZUosRUFBRTtFQUFBLEVBQUM7RUFDcEQsT0FDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5Q0FBSTtJQUNILEtBQUssRUFBRUQsSUFBSSxDQUFDTSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBQyxVQUFVO01BQUMsTUFBTSxFQUFFTixJQUFJLENBQUNNLE1BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFJO0lBQzdELE9BQU8sRUFBRTtJQUNQO0lBQ0EsTUFBQyxpRUFBZTtNQUFDLEdBQUcsRUFBQyxTQUFTO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxFQUNqQyxNQUFDLCtEQUFhO01BQUMsR0FBRyxFQUFDLE9BQU87TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFHLEVBQzdCLE1BQUMsaUVBQWU7TUFBQyxHQUFHLEVBQUMsU0FBUztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQUcsRUFDakMsTUFBQyw0Q0FBTztNQUNOLEdBQUcsRUFBQyxNQUFNO01BQ1YsT0FBTyxFQUNMLE1BQUMsMkNBQU0sQ0FBQyxLQUFLO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDVkwsRUFBRSxJQUFJRCxJQUFJLENBQUNPLElBQUksQ0FBQ04sRUFBRSxLQUFLQSxFQUFFLEdBQ3hCLG1FQUNFLE1BQUMsMkNBQU07UUFBQyxJQUFJLEVBQUMsU0FBUztRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUFZLEVBQ2xDLE1BQUMsMkNBQU07UUFBQyxJQUFJLEVBQUMsUUFBUTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUFZLENBQ2hDLEdBRUgsTUFBQywyQ0FBTTtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLGtCQUNSLENBRUo7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVELE1BQUMsa0VBQWdCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBRyxDQUNaLENBQ1Y7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUVGLE1BQUMseUNBQUksQ0FBQyxJQUFJO0lBQUMsTUFBTSxFQUFFLE1BQUMsMkNBQU07TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUFFRCxJQUFJLENBQUNPLElBQUksQ0FBQ0MsUUFBUSxDQUFXO0lBQUMsS0FBSyxFQUFFUixJQUFJLENBQUNPLElBQUksQ0FBQ0MsUUFBUztJQUFDLFdBQVcsRUFBRVIsSUFBSSxDQUFDUyxPQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRSxFQUNqSCxNQUFDLEtBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLEVBQ1QsTUFBQyxPQUFPO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxFQUNYLE1BQUMsT0FBTztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQVcsQ0FDZCxFQUNQLE1BQUMsV0FBVztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBQUcsRUFDZixNQUFDLFFBQVE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUFHLENBQ1I7QUFFVixDQUFDO0FBQUMsR0F2Q0lWLFFBQVE7RUFBQSxRQUNERyx1REFBVztBQUFBO0FBQUEsS0FEbEJILFFBQVE7QUF5Q2RBLFFBQVEsQ0FBQ1csU0FBUyxHQUFHO0VBQ25CO0VBQ0FWLElBQUksRUFBRVUsaURBQVMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ3BCVixFQUFFLEVBQUVTLGlEQUFTLENBQUNFLE1BQU07SUFDcEJMLElBQUksRUFBRUcsaURBQVMsQ0FBQ0csTUFBTTtJQUN0QkosT0FBTyxFQUFFQyxpREFBUyxDQUFDSSxNQUFNO0lBQ3pCQyxTQUFTLEVBQUVMLGlEQUFTLENBQUNHLE1BQU07SUFDM0JHLFFBQVEsRUFBRU4saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNLENBQUM7SUFDN0NQLE1BQU0sRUFBRUksaURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzVDLENBQUMsQ0FBQyxDQUFDSztBQUNMLENBQUM7QUFFY25CLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwOWM2MWQwOWEzZmZiMWYyNTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBCdXR0b24sIENhcmQsIFBvcG92ZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFJldHdlZXRPdXRsaW5lZCxcclxuICBIZWFydE91dGxpbmVkLFxyXG4gIE1lc3NhZ2VPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAvL+uwsOyXtCDslYjsnZgganN47JeQ64qUIGtleeqwgCDtlYTsmpRcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiAvPixcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAga2V5PVwibW9yZVwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCI+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGEgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWV9PC9BdmF0YXI+fSB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfSBkZXNjcmlwdGlvbj17cG9zdC5jb250ZW50fS8+XHJcbiAgICAgICAgPEltYWdlIC8+XHJcbiAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICA8QnV0dG9ucz48L0J1dHRvbnM+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgIDxDb21tZW50cyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLlByb3BUeXBlcyA9IHtcclxuICAvL29iamVjdOuKlCBzaGFwZeulvCDsgqzsmqntlZjsl6wg6rWs7LK07KCB7Jy866GcIOuqheyLnO2VmOyekC5cclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9