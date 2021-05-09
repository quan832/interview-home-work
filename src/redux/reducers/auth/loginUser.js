import { LOGIN_USER } from "../../constants/type";

let userName = {};

if (localStorage.getItem("username")) {
  // check username in store => if have -> get default state
  let userStore = localStorage.getItem("username");

  userName = JSON.parse(userStore)[0];
}

const stateDefault = {
  user: userName,
};

const LoginUser = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state.user = action.payload;

      return { ...state };

    default:
      return { ...state };
  }
};

export default LoginUser;
