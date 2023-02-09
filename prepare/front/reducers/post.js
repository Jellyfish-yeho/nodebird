export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 'jellyfish',
        nickname: "jellyfish",
      },
      content: "첫 게시글 #익스프레스",
      Images: [
        {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pN4dFXLOdt0LbwrdjuX87wHaHM%26pid%3DApi&f=1&ipt=4d0b23680507ae8896fb104b17e012974f16865ed24dfe7f3ed7d6e39fed08c1&ipo=images",
        },
        {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.insight.co.kr%2Fstatic%2F2019%2F04%2F01%2F700%2F60308481nf5f1d6o1l76.jpg&f=1&nofb=1&ipt=e52458fb5cd006d650bbb3fa9259c5fa3175ed260a290e0b10ea50ca29b2764d&ipo=images",
        },
        {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20191126%2F3674493%2F1796813880%2F2423952675%2Fe030065e96c1cefeda44664e7c315ca9.png&f=1&nofb=1&ipt=337046b74bfb0283bdaba882e8fe07cf647de84dfb3a90c9f850a7399329c5c9&ipo=images",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "gogo",
          },
          content: "냠냠",
        },
        {
          User: {
            nickname: "soso",
          },
          content: "뇸뇸",
        },
      ],
    },
  ],
  imagesPaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  User: {
    id: 'jellyfisherman',
    nickname: "jellyfisherman",
  },
  content: "더미포스트",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
