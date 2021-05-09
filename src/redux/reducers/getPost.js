import { GET_BLOGS, GET_DETAIL_BLOG } from "../constants/type";

// khai bao state
const stateDefault = {
  result: [],
  detailPost: {},
};

const getBlogs = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_BLOGS:
      state.result = action.payload;
      return { ...state };

    case GET_DETAIL_BLOG:
      state.detailPost = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default getBlogs;
