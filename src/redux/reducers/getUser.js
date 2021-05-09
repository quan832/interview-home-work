import { GET_USERS } from "../constants/type";

// khai bao state
const stateDefault = {
  user: [],
};

const getUser = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USERS:
      state.result = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
};

export default getUser;
