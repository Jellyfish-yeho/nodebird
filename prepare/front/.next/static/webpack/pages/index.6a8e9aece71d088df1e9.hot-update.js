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
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  mainPosts: [{
    id: 2,
    User: {
      id: 2,
      nickname: "jellyfisherman"
    },
    content: "더미포스트",
    Images: [],
    Comments: []
  }],
  imagesPaths: [],
  postAdded: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlc1BhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQ1Q7SUFDRUMsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQUFDO01BQ0xFLFFBQVEsRUFBRTtJQUNaLENBQUM7SUFDREMsT0FBTyxFQUFFLGNBQWM7SUFDdkJDLE1BQU0sRUFBRSxDQUNOO01BQ0VDLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLEVBQ0Q7TUFDRUEsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxDQUNGO0lBQ0RDLFFBQVEsRUFBRSxDQUNSO01BQ0VMLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RDLE9BQU8sRUFBRTtJQUNYLENBQUMsRUFDRDtNQUNFRixJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0VBRUwsQ0FBQyxDQUNGO0VBQ0RJLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNQyxRQUFRLEdBQUcsVUFBVTtBQUNwQixJQUFNQyxPQUFPLEdBQUc7RUFDckJDLElBQUksRUFBRUY7QUFDUixDQUFDO0FBQ0QsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCYixTQUFTLEVBQUUsQ0FDVDtJQUNFQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxPQUFPLEVBQUUsT0FBTztJQUNoQkMsTUFBTSxFQUFFLEVBRVA7SUFDREUsUUFBUSxFQUFFO0VBRVosQ0FBQyxDQUNGO0VBQ0RDLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLFNBQVMsRUFBRTtBQUNiLENBQUM7QUFFRCxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxHQUFxQztFQUFBLElBQWpDQyxLQUFLLHVFQUFHaEIsWUFBWTtFQUFBLElBQUVpQixNQUFNO0VBQzNDLFFBQVFBLE1BQU0sQ0FBQ0osSUFBSTtJQUNqQixLQUFLRixRQUFRO01BQ1gsdUNBQ0tLLEtBQUs7UUFDUmYsU0FBUyxHQUFHYSxTQUFTLHNHQUFLRSxLQUFLLENBQUNmLFNBQVMsRUFBQztRQUMxQ1MsU0FBUyxFQUFFO01BQUk7SUFFbkI7TUFDRSxPQUFPTSxLQUFLO0VBQUM7QUFFbkIsQ0FBQztBQUVjRCxzRUFBTyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhOGU5YWVjZTcxZDA4OGRmMWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcImplbGx5ZmlzaFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyqyDqsozsi5zquIAgI+ydteyKpO2UhOugiOyKpFwiLFxyXG4gICAgICBJbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS91cmw/c2E9aSZ1cmw9aHR0cHMlM0ElMkYlMkZwb3N0Lm5hdmVyLmNvbSUyRnZpZXdlciUyRnBvc3RWaWV3Lm5obiUzRnZvbHVtZU5vJTNEMTk3MjA5OTglMjZtZW1iZXJObyUzRDMzNTU2OTQwJnBzaWc9QU92VmF3MkdCOTFCZS1NaGlDVHB2Wi1zd0lONiZ1c3Q9MTY3NTkzNzIyNjE5MjAwMCZzb3VyY2U9aW1hZ2VzJmNkPXZmZSZ2ZWQ9MENBOFFqUnhxRndvVENORGx0ZW5XaGYwQ0ZRQUFBQUFkQUFBQUFCQUVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCJodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZibG9nLmtha2FvY2RuLm5ldCUyRmRuJTJGZGpsQjFBJTJGYnRxRGM1cTFHREUlMkY1c09XUkF3SzhJNHZOanNZMzYxQ2MwJTJGaW1nLmpwZyZpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZpc3N1ZWZlZWQxLnRpc3RvcnkuY29tJTJGMjg2NyZ0Ym5pZD1lcGhBOWdZSndHZjlBTSZ2ZXQ9MTBDQlFReGlBb0JHb1hDaE1JME9XMTZkYUZfUUlWQUFBQUFCMEFBQUFBRUFjLi5pJmRvY2lkPXNjSGE5d3VlZzdmaUhNJnc9NTQwJmg9ODEwJml0Zz0xJnE9JUVDJTlFJTk4JUVDJTgzJTlEJUVBJUI4JUI0JTIwJUVCJThGJTk5JUVCJUFDJUJDJnZlZD0wQ0JRUXhpQW9CR29YQ2hNSTBPVzE2ZGFGX1FJVkFBQUFBQjBBQUFBQUVBY1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRnd3dy5kb2dkcmlwLm5ldCUyRmR2cyUyRmIlMkZpJTJGMTYlMkYwOSUyRjE3JTJGNzglMkY3ODglMkY4NjYlMkYxMDclMkZlYjQ3ODA3ODBmOWE1ZTYwM2RmYjJlY2Q4ZjY2NDRmOS5qcGcmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGd3d3LmRvZ2RyaXAubmV0JTJGMTA3ODY2Nzg4JnRibmlkPW9OeXFkZzNLRS1zVmlNJnZldD0xMENBZ1F4aUFvQ1dvWENoTUkwT1cxNmRhRl9RSVZBQUFBQUIwQUFBQUFFQWMuLmkmZG9jaWQ9MHE3SWFxYlRudHNqek0mdz00ODUmaD03MDAmaXRnPTEmcT0lRUMlOUUlOTglRUMlODMlOUQlRUElQjglQjQlMjAlRUIlOEYlOTklRUIlQUMlQkMmdmVkPTBDQWdReGlBb0NXb1hDaE1JME9XMTZkYUZfUUlWQUFBQUFCMEFBQUFBRUFjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImdvZ29cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBjb250ZW50OiBcIuuDoOuDoFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJzb3NvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLrh7jrh7hcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlc1BhdGhzOiBbXSxcclxuICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmlja25hbWU6IFwiamVsbHlmaXNoZXJtYW5cIixcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogXCLrjZTrr7jtj6zsiqTtirhcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgaW1hZ2VzUGF0aHM6IFtdLFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICBwb3N0QWRkZWQ6IHRydWVcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9