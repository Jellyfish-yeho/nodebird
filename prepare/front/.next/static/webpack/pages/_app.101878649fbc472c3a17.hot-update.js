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
      content: "뇸뇸"
    }]
  }],
  imagesPaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlc1BhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLGNBQWM7SUFDdkJDLE1BQU0sRUFBRSxDQUNOO01BQ0VDLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRUEsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxDQUNGO0lBQ0RDLFFBQVEsRUFBRSxDQUNSO01BQ0VMLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUMsRUFDRDtNQUNFRixJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBRUwsQ0FBQyxDQUNGO0VBQ0RJLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUUzQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHYixZQUFZO0VBQUEsSUFBRWMsTUFBTTtFQUMzQyxRQUFRQSxNQUFNLENBQUNDLElBQUk7SUFDakI7TUFDRSxPQUFPRixLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTAxODc4NjQ5ZmJjNDcyYzNhMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6IFwiamVsbHlmaXNoXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi7LKrIOqyjOyLnOq4gCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgIEltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRnBvc3QubmF2ZXIuY29tJTJGdmlld2VyJTJGcG9zdFZpZXcubmhuJTNGdm9sdW1lTm8lM0QxOTcyMDk5OCUyNm1lbWJlck5vJTNEMzM1NTY5NDAmcHNpZz1BT3ZWYXcyR0I5MUJlLU1oaUNUcHZaLXN3SU42JnVzdD0xNjc1OTM3MjI2MTkyMDAwJnNvdXJjZT1pbWFnZXMmY2Q9dmZlJnZlZD0wQ0E4UWpSeHFGd29UQ05EbHRlbldoZjBDRlFBQUFBQWRBQUFBQUJBRVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRmJsb2cua2FrYW9jZG4ubmV0JTJGZG4lMkZkamxCMUElMkZidHFEYzVxMUdERSUyRjVzT1dSQXdLOEk0dk5qc1kzNjFDYzAlMkZpbWcuanBnJmltZ3JlZnVybD1odHRwcyUzQSUyRiUyRmlzc3VlZmVlZDEudGlzdG9yeS5jb20lMkYyODY3JnRibmlkPWVwaEE5Z1lKd0dmOUFNJnZldD0xMENCUVF4aUFvQkdvWENoTUkwT1cxNmRhRl9RSVZBQUFBQUIwQUFBQUFFQWMuLmkmZG9jaWQ9c2NIYTl3dWVnN2ZpSE0mdz01NDAmaD04MTAmaXRnPTEmcT0lRUMlOUUlOTglRUMlODMlOUQlRUElQjglQjQlMjAlRUIlOEYlOTklRUIlQUMlQkMmdmVkPTBDQlFReGlBb0JHb1hDaE1JME9XMTZkYUZfUUlWQUFBQUFCMEFBQUFBRUFjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdyZXM/aW1ndXJsPWh0dHBzJTNBJTJGJTJGd3d3LmRvZ2RyaXAubmV0JTJGZHZzJTJGYiUyRmklMkYxNiUyRjA5JTJGMTclMkY3OCUyRjc4OCUyRjg2NiUyRjEwNyUyRmViNDc4MDc4MGY5YTVlNjAzZGZiMmVjZDhmNjY0NGY5LmpwZyZpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZ3d3cuZG9nZHJpcC5uZXQlMkYxMDc4NjY3ODgmdGJuaWQ9b055cWRnM0tFLXNWaU0mdmV0PTEwQ0FnUXhpQW9DV29YQ2hNSTBPVzE2ZGFGX1FJVkFBQUFBQjBBQUFBQUVBYy4uaSZkb2NpZD0wcTdJYXFiVG50c2p6TSZ3PTQ4NSZoPTcwMCZpdGc9MSZxPSVFQyU5RSU5OCVFQyU4MyU5RCVFQSVCOCVCNCUyMCVFQiU4RiU5OSVFQiVBQyVCQyZ2ZWQ9MENBZ1F4aUFvQ1dvWENoTUkwT1cxNmRhRl9RSVZBQUFBQUIwQUFBQUFFQWNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiZ29nb1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi64Og64OgXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcInNvc29cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuHuOuHuFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VzUGF0aHM6IFtdLFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIlxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=