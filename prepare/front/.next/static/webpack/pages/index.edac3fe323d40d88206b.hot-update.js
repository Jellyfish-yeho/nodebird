webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 'jellyfish',
      nickname: "jellyfish"
    },
    content: "첫 게시글 #익스프레스",
    Images: [{
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pN4dFXLOdt0LbwrdjuX87wHaHM%26pid%3DApi&f=1&ipt=4d0b23680507ae8896fb104b17e012974f16865ed24dfe7f3ed7d6e39fed08c1&ipo=images"
    }, {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.insight.co.kr%2Fstatic%2F2019%2F04%2F01%2F700%2F60308481nf5f1d6o1l76.jpg&f=1&nofb=1&ipt=e52458fb5cd006d650bbb3fa9259c5fa3175ed260a290e0b10ea50ca29b2764d&ipo=images"
    }, {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20191126%2F3674493%2F1796813880%2F2423952675%2Fe030065e96c1cefeda44664e7c315ca9.png&f=1&nofb=1&ipt=337046b74bfb0283bdaba882e8fe07cf647de84dfb3a90c9f850a7399329c5c9&ipo=images"
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
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  User: {
    id: 'jellyfisherman',
    nickname: "jellyfisherman"
  },
  content: "더미포스트",
  Images: [],
  Comments: []
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlc1BhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxXQUFXO01BQ2ZFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLGNBQWM7SUFDdkJDLE1BQU0sRUFBRSxDQUNOO01BQ0VDLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRUEsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxDQUNGO0lBQ0RDLFFBQVEsRUFBRSxDQUNSO01BQ0VMLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUMsRUFDRDtNQUNFRixJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBRUwsQ0FBQyxDQUNGO0VBQ0RJLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUNwQixJQUFNQyxPQUFPLEdBQUc7RUFDckJDLElBQUksRUFBRUY7QUFDUixDQUFDO0FBQ0QsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCWixFQUFFLEVBQUUsQ0FBQztFQUNMQyxJQUFJLEVBQUU7SUFDSkQsRUFBRSxFQUFFLGdCQUFnQjtJQUNwQkUsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxPQUFPLEVBQUUsT0FBTztFQUNoQkMsTUFBTSxFQUFFLEVBQUU7RUFDVkUsUUFBUSxFQUFFO0FBQ1osQ0FBQztBQUVELElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFPLEdBQXFDO0VBQUEsSUFBakNDLEtBQUssdUVBQUdoQixZQUFZO0VBQUEsSUFBRWlCLE1BQU07RUFDM0MsUUFBUUEsTUFBTSxDQUFDSixJQUFJO0lBQ2pCLEtBQUtGLFFBQVE7TUFDWCx1Q0FDS0ssS0FBSztRQUNSZixTQUFTLEdBQUdhLFNBQVMsc0dBQUtFLEtBQUssQ0FBQ2YsU0FBUyxFQUFDO1FBQzFDUyxTQUFTLEVBQUU7TUFBSTtJQUVuQjtNQUNFLE9BQU9NLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRWNELHNFQUFPLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRhYzNmZTMyM2Q0MGQ4ODIwNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6ICdqZWxseWZpc2gnLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcImplbGx5ZmlzaFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyqyDqsozsi5zquIAgI+ydteyKpO2UhOugiOyKpFwiLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGdHNlMS5tbS5iaW5nLm5ldCUyRnRoJTNGaWQlM0RPSVAucE40ZEZYTE9kdDBMYndyZGp1WDg3d0hhSE0lMjZwaWQlM0RBcGkmZj0xJmlwdD00ZDBiMjM2ODA1MDdhZTg4OTZmYjEwNGIxN2UwMTI5NzRmMTY4NjVlZDI0ZGZlN2YzZWQ3ZDZlMzlmZWQwOGMxJmlwbz1pbWFnZXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZpbWcuaW5zaWdodC5jby5rciUyRnN0YXRpYyUyRjIwMTklMkYwNCUyRjAxJTJGNzAwJTJGNjAzMDg0ODFuZjVmMWQ2bzFsNzYuanBnJmY9MSZub2ZiPTEmaXB0PWU1MjQ1OGZiNWNkMDA2ZDY1MGJiYjNmYTkyNTljNWZhMzE3NWVkMjYwYTI5MGUwYjEwZWE1MGNhMjliMjc2NGQmaXBvPWltYWdlc1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmltYWdlLmZta29yZWEuY29tJTJGZmlsZXMlMkZhdHRhY2glMkZuZXclMkYyMDE5MTEyNiUyRjM2NzQ0OTMlMkYxNzk2ODEzODgwJTJGMjQyMzk1MjY3NSUyRmUwMzAwNjVlOTZjMWNlZmVkYTQ0NjY0ZTdjMzE1Y2E5LnBuZyZmPTEmbm9mYj0xJmlwdD0zMzcwNDZiNzRiZmIwMjgzYmRhYmE4ODJlOGZlMDdjZjY0N2RlODRkZmIzYTkwYzlmODUwYTczOTkzMjljNWM5Jmlwbz1pbWFnZXNcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICBDb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiZ29nb1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi64Og64OgXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcInNvc29cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuHuOuHuFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VzUGF0aHM6IFtdLFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSB7XHJcbiAgdHlwZTogQUREX1BPU1QsXHJcbn07XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICBpZDogMixcclxuICBVc2VyOiB7XHJcbiAgICBpZDogJ2plbGx5ZmlzaGVybWFuJyxcclxuICAgIG5pY2tuYW1lOiBcImplbGx5ZmlzaGVybWFuXCIsXHJcbiAgfSxcclxuICBjb250ZW50OiBcIuuNlOuvuO2PrOyKpO2KuFwiLFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=