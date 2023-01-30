//getInitialProps가 거의 안쓰이고 getStatic / getserverside Props로 바뀜
import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

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
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
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
const rootReducer = combineReducers({ //각 리듀서를 합쳐주는 combineReducers - redux
    //이제 initialState는 각 reducer에서 가져온 initialState로 알아서 합쳐서 넣어줌
  index: (state = {}, action) => { //서버사이드 렌더링을 도와줄 hydrate를 위한 리듀서
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
