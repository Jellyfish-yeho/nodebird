webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "jellyfish"
    },
    content: "첫 게시글 #익스프레스",
    Images: [{
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpost.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D19720998%26memberNo%3D33556940&psig=AOvVaw2GB91Be-MhiCTpvZ-swIN6&ust=1675937226192000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDltenWhf0CFQAAAAAdAAAAABAE"
    }, {
      src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdjlB1A%2FbtqDc5q1GDE%2F5sOWRAwK8I4vNjsY361Cc0%2Fimg.jpg&imgrefurl=https%3A%2F%2Fissuefeed1.tistory.com%2F2867&tbnid=ephA9gYJwGf9AM&vet=10CBQQxiAoBGoXChMI0OW16daF_QIVAAAAAB0AAAAAEAc..i&docid=scHa9wueg7fiHM&w=540&h=810&itg=1&q=%EC%9E%98%EC%83%9D%EA%B8%B4%20%EB%8F%99%EB%AC%BC&ved=0CBQQxiAoBGoXChMI0OW16daF_QIVAAAAAB0AAAAAEAc"
    }, {
      src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.dogdrip.net%2Fdvs%2Fb%2Fi%2F16%2F09%2F17%2F78%2F788%2F866%2F107%2Feb4780780f9a5e603dfb2ecd8f6644f9.jpg&imgrefurl=https%3A%2F%2Fwww.dogdrip.net%2F107866788&tbnid=oNyqdg3KE-sViM&vet=10CAgQxiAoCWoXChMI0OW16daF_QIVAAAAAB0AAAAAEAc..i&docid=0q7IaqbTntsjzM&w=485&h=700&itg=1&q=%EC%9E%98%EC%83%9D%EA%B8%B4%20%EB%8F%99%EB%AC%BC&ved=0CAgQxiAoCWoXChMI0OW16daF_QIVAAAAAB0AAAAAEAc"
    }],
    Comments: [{
      User: {
        nickname: "gogo"
      },
      content: "냠냠"
    }, {
      User: {
        nickname: "soso"
      },
      content: "냠냠"
    }]
  }]
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FDVDtJQUNFQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxPQUFPLEVBQUUsY0FBYztJQUN2QkMsTUFBTSxFQUFFLENBQ047TUFDRUMsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLENBQ0Y7SUFDREMsUUFBUSxFQUFFLENBQ1I7TUFDRUwsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxFQUNEO01BQ0VGLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUM7RUFFTCxDQUFDO0FBRUwsQ0FBQztBQUVELElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQXFDO0VBQUEsSUFBakNDLEtBQUssdUVBQUdWLFlBQVk7RUFBQSxJQUFFVyxNQUFNO0VBQzNDLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtJQUNqQjtNQUNFLE9BQU9GLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZjY5MzViOTQ4NmI1ZDZjZjUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogXCJqZWxseWZpc2hcIixcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogXCLssqsg6rKM7Iuc6riAICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vdXJsP3NhPWkmdXJsPWh0dHBzJTNBJTJGJTJGcG9zdC5uYXZlci5jb20lMkZ2aWV3ZXIlMkZwb3N0Vmlldy5uaG4lM0Z2b2x1bWVObyUzRDE5NzIwOTk4JTI2bWVtYmVyTm8lM0QzMzU1Njk0MCZwc2lnPUFPdlZhdzJHQjkxQmUtTWhpQ1Rwdlotc3dJTjYmdXN0PTE2NzU5MzcyMjYxOTIwMDAmc291cmNlPWltYWdlcyZjZD12ZmUmdmVkPTBDQThRalJ4cUZ3b1RDTkRsdGVuV2hmMENGUUFBQUFBZEFBQUFBQkFFXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdyZXM/aW1ndXJsPWh0dHBzJTNBJTJGJTJGYmxvZy5rYWthb2Nkbi5uZXQlMkZkbiUyRmRqbEIxQSUyRmJ0cURjNXExR0RFJTJGNXNPV1JBd0s4STR2TmpzWTM2MUNjMCUyRmltZy5qcGcmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGaXNzdWVmZWVkMS50aXN0b3J5LmNvbSUyRjI4NjcmdGJuaWQ9ZXBoQTlnWUp3R2Y5QU0mdmV0PTEwQ0JRUXhpQW9CR29YQ2hNSTBPVzE2ZGFGX1FJVkFBQUFBQjBBQUFBQUVBYy4uaSZkb2NpZD1zY0hhOXd1ZWc3ZmlITSZ3PTU0MCZoPTgxMCZpdGc9MSZxPSVFQyU5RSU5OCVFQyU4MyU5RCVFQSVCOCVCNCUyMCVFQiU4RiU5OSVFQiVBQyVCQyZ2ZWQ9MENCUVF4aUFvQkdvWENoTUkwT1cxNmRhRl9RSVZBQUFBQUIwQUFBQUFFQWNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZ3d3cuZG9nZHJpcC5uZXQlMkZkdnMlMkZiJTJGaSUyRjE2JTJGMDklMkYxNyUyRjc4JTJGNzg4JTJGODY2JTJGMTA3JTJGZWI0NzgwNzgwZjlhNWU2MDNkZmIyZWNkOGY2NjQ0ZjkuanBnJmltZ3JlZnVybD1odHRwcyUzQSUyRiUyRnd3dy5kb2dkcmlwLm5ldCUyRjEwNzg2Njc4OCZ0Ym5pZD1vTnlxZGczS0Utc1ZpTSZ2ZXQ9MTBDQWdReGlBb0NXb1hDaE1JME9XMTZkYUZfUUlWQUFBQUFCMEFBQUFBRUFjLi5pJmRvY2lkPTBxN0lhcWJUbnRzanpNJnc9NDg1Jmg9NzAwJml0Zz0xJnE9JUVDJTlFJTk4JUVDJTgzJTlEJUVBJUI4JUI0JTIwJUVCJThGJTk5JUVCJUFDJUJDJnZlZD0wQ0FnUXhpQW9DV29YQ2hNSTBPVzE2ZGFGX1FJVkFBQUFBQjBBQUFBQUVBY1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJnb2dvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLrg6Drg6BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwic29zb1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi64Og64OgXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9