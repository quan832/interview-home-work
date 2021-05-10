import { GET_COMMENTS } from "../constants/type";

// khai bao state
const stateDefault = {
  result: [],
};

const getBlogs = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      state.result = action.payload;

    default:
      return { ...state };
  }
};

export default getBlogs;
