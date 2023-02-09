export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};
//로그인 액션 크리에이터 함수
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
//로그아웃 액션 크리에이터 함수
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;

/* reducer 기본 꼴 */
// const initialState = {};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default reducer;
