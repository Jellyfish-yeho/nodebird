webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//getInitialProps가 거의 안쓰이고 getStatic / getserverside Props로 바뀜





// const initialState = {
//   user: {
//     isLoggedIn: false,
//     user: null,
//     signUpData: {},
//     loginData: {},
//   },
//   post: {
//     mainPosts: [],
//   },
// };

//async action creator : redux saga

//action creator
var changeNickname = function changeNickname(data) {
  return {
    type: "CHANGE_NICKNAME",
    data: data
  };
};
//액션함수로 액션 만들기
changeNickname("chuchu");
// {
//     type : "CHANGE_NICKNAME",
//     data : 'chuchu'
// }

//만들어낸 액션은 디스패치로 컴포넌트에서 사용하기
// store.dispatch(changeNickname('shushu'))

//(이전 상태 , 액션) => 다음 상태
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       console.log("HYDRATE", action);
//       return { ...state, ...action.payload };

//     default:
//       return state;//없으면 초기화시 리턴값이 언디파인드가 뜨므로 필요
//   }
// };
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])({
  //각 리듀서를 합쳐주는 combineReducers - redux
  //이제 initialState는 각 reducer에서 가져온 initialState로 알아서 합쳐서 넣어줌
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    //서버사이드 렌더링을 도와줄 hydrate를 위한 리듀서
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        console.log("HYDRATE", action);
        return _objectSpread(_objectSpread({}, state), action.payload);
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/***/ }),

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
  mainPosts: []
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {}
};
//로그인 액션 크리에이터 함수
var loginAction = function loginAction(data) {
  return {
    type: "LOG_IN",
    data: data
  };
};
//로그아웃 액션 크리에이터 함수
var logoutAction = function logoutAction() {
  return {
    type: "LOG_OUT"
  };
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case "LOG_IN":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: action.data
      });
    case "LOG_OUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false,
        user: null
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/* reducer 기본 꼴 */
// const initialState = {};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiY2hhbmdlTmlja25hbWUiLCJkYXRhIiwidHlwZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwicmVkdWNlciIsImlzTG9nZ2VkSW4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJsb2dvdXRBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QztBQUNuQjtBQUNBO0FBQ2M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWMsQ0FBSUMsSUFBSSxFQUFLO0VBQy9CLE9BQU87SUFDTEMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkQsSUFBSSxFQUFKQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQUQsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1HLFdBQVcsR0FBR0MsNkRBQWUsQ0FBQztFQUFFO0VBQ2xDO0VBQ0ZDLEtBQUssRUFBRSxpQkFBd0I7SUFBQSxJQUF2QkMsS0FBSyx1RUFBRyxDQUFDLENBQUM7SUFBQSxJQUFFQyxNQUFNO0lBQU87SUFDL0IsUUFBUUEsTUFBTSxDQUFDTCxJQUFJO01BQ2pCLEtBQUtNLDBEQUFPO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRUgsTUFBTSxDQUFDO1FBQzlCLHVDQUFZRCxLQUFLLEdBQUtDLE1BQU0sQ0FBQ0ksT0FBTztNQUV0QztRQUNFLE9BQU9MLEtBQUs7SUFBQztFQUVuQixDQUFDO0VBQ0RNLElBQUksRUFBSkEsNkNBQUk7RUFDSkMsSUFBSSxFQUFKQSw2Q0FBSUE7QUFDTixDQUFDLENBQUM7QUFFYVYsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEUzQjtBQUFBO0FBQU8sSUFBTVcsWUFBWSxHQUFHO0VBQUVDLFNBQVMsRUFBRTtBQUFHLENBQUM7QUFFN0MsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBcUM7RUFBQSxJQUFqQ1YsS0FBSyx1RUFBR1EsWUFBWTtFQUFBLElBQUVQLE1BQU07RUFDM0MsUUFBUUEsTUFBTSxDQUFDTCxJQUFJO0lBQ2pCO01BQ0UsT0FBT0ksS0FBSztFQUFDO0FBRW5CLENBQUM7QUFFY1Usc0VBQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUaEIsSUFBTUYsWUFBWSxHQUFHO0VBQzFCRyxVQUFVLEVBQUUsS0FBSztFQUNqQkwsSUFBSSxFQUFFLElBQUk7RUFDVk0sVUFBVSxFQUFFLENBQUMsQ0FBQztFQUNkQyxTQUFTLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUluQixJQUFJLEVBQUs7RUFDbkMsT0FBTztJQUNMQyxJQUFJLEVBQUUsUUFBUTtJQUNkRCxJQUFJLEVBQUpBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFDRDtBQUNPLElBQU1vQixZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFTO0VBQ2hDLE9BQU87SUFDTG5CLElBQUksRUFBRTtFQUNSLENBQUM7QUFDSCxDQUFDO0FBQ0QsSUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sR0FBcUM7RUFBQSxJQUFqQ1YsS0FBSyx1RUFBR1EsWUFBWTtFQUFBLElBQUVQLE1BQU07RUFDM0MsUUFBUUEsTUFBTSxDQUFDTCxJQUFJO0lBQ2pCLEtBQUssUUFBUTtNQUNYLHVDQUNLSSxLQUFLO1FBQ1JXLFVBQVUsRUFBRSxJQUFJO1FBQ2hCTCxJQUFJLEVBQUVMLE1BQU0sQ0FBQ047TUFBSTtJQUVyQixLQUFLLFNBQVM7TUFDWix1Q0FDS0ssS0FBSztRQUNSVyxVQUFVLEVBQUUsS0FBSztRQUNqQkwsSUFBSSxFQUFFO01BQUk7SUFFZDtNQUNFLE9BQU9OLEtBQUs7RUFBQztBQUVuQixDQUFDO0FBRWNVLHNFQUFPLEVBQUM7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWJlMzI3NDM4MjNkMjhiMzliZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZ2V0SW5pdGlhbFByb3Bz6rCAIOqxsOydmCDslYjsk7DsnbTqs6AgZ2V0U3RhdGljIC8gZ2V0c2VydmVyc2lkZSBQcm9wc+uhnCDrsJTrgJxcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgIHVzZXI6IHtcclxuLy8gICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4vLyAgICAgdXNlcjogbnVsbCxcclxuLy8gICAgIHNpZ25VcERhdGE6IHt9LFxyXG4vLyAgICAgbG9naW5EYXRhOiB7fSxcclxuLy8gICB9LFxyXG4vLyAgIHBvc3Q6IHtcclxuLy8gICAgIG1haW5Qb3N0czogW10sXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vYXN5bmMgYWN0aW9uIGNyZWF0b3IgOiByZWR1eCBzYWdhXHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuLy/slaHshZjtlajsiJjroZwg7JWh7IWYIOunjOuTpOq4sFxyXG5jaGFuZ2VOaWNrbmFtZShcImNodWNodVwiKTtcclxuLy8ge1xyXG4vLyAgICAgdHlwZSA6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbi8vICAgICBkYXRhIDogJ2NodWNodSdcclxuLy8gfVxyXG5cclxuLy/rp4zrk6TslrTrgrgg7JWh7IWY7J2AIOuUlOyKpO2MqOy5mOuhnCDsu7Ttj6zrhIztirjsl5DshJwg7IKs7Jqp7ZWY6riwXHJcbi8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCdzaHVzaHUnKSlcclxuXHJcbi8vKOydtOyghCDsg4Htg5wgLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGNhc2UgSFlEUkFURTpcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbi8vICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZTsvL+yXhuycvOuptCDstIjquLDtmZTsi5wg66as7YS06rCS7J20IOyWuOuUlO2MjOyduOuTnOqwgCDrnKjrr4DroZwg7ZWE7JqUXHJcbi8vICAgfVxyXG4vLyB9O1xyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IC8v6rCBIOumrOuTgOyEnOulvCDtlanss5Dso7zripQgY29tYmluZVJlZHVjZXJzIC0gcmVkdXhcclxuICAgIC8v7J207KCcIGluaXRpYWxTdGF0ZeuKlCDqsIEgcmVkdWNlcuyXkOyEnCDqsIDsoLjsmKggaW5pdGlhbFN0YXRl66GcIOyVjOyVhOyEnCDtlanss5DshJwg64Sj7Ja07KSMXHJcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHsgLy/shJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOuPhOyZgOykhCBoeWRyYXRl66W8IOychO2VnCDrpqzrk4DshJxcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLFxyXG4gIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7IG1haW5Qb3N0czogW10gfTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIHVzZXI6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuLy/roZzqt7jsnbgg7JWh7IWYIO2BrOumrOyXkOydtO2EsCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfSU5cIixcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuLy/roZzqt7jslYTsm4Mg7JWh7IWYIO2BrOumrOyXkOydtO2EsCDtlajsiJhcclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUXCIsXHJcbiAgfTtcclxufTtcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkxPR19JTlwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiTE9HX09VVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuXHJcbi8qIHJlZHVjZXIg6riw67O4IOq8tCAqL1xyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbi8vIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9