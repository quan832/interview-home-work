import { postService, userService } from "../../services/typeService";
import {
  GET_BLOGS,
  GET_COMMENTS,
  GET_DETAIL_BLOG,
  GET_USERS,
  LOGIN_USER,
} from "../constants/type";
import { createAction } from "./createAction";
// route
import { history } from "../../components/App/App";

// CommonJS
const Swal = require("sweetalert2");

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  width: 300,

  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const getPost = () => {
  return async (dispatch) => {
    //Gọi action loading open
    dispatch({
      type: "openLoading",
    });

    // loading
    setTimeout(async () => {
      await postService.fetchAllPost().then((result) => {
        // dispatch action

        dispatch(createAction(GET_BLOGS, result.data));
      });

      // Tắt loadings
      dispatch({
        type: "closeLoading",
      });

    },1000);
  };
};

export const getDetailPost = (id) => {
  return async (dispatch) => {
    postService.fetchAllPost().then((result) => {
      // filter follow id

      let post_Detail = result.data.filter((post) => {
        return post.id == id;
      });

      dispatch(createAction(GET_DETAIL_BLOG, post_Detail[0]));
    });
  };
};

// login
export const loginUser = (user) => {
  return async (dispatch) => {
    userService.loginUser().then((result) => {
      let userLogin = result.data.filter((item) => {
        return (
          item.username === user.userName && item.password === user.password
        );
      });

      if (userLogin.length !== 0) {
        dispatch(createAction(LOGIN_USER, userLogin[0]));

        localStorage.setItem("username", JSON.stringify(userLogin));

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        history.push("/");
      } else {
        // alert
        Swal.fire({
          title: "Error!",
          text: "Try again",
          icon: "error",
          confirmButtonText: "Cool",
        });
      }
    });
  };
};

// get all user
export const getUsers = () => {
  return async (dispatch) => {
    userService.loginUser().then((result) => {
      dispatch(createAction(GET_USERS, result.data));
    });
  };
};

// get comment post follow id
export const getComment = () => {
  return async (dispatch) => {
    postService.fetchAllComment().then((result) => {
      dispatch(createAction(GET_COMMENTS, result.data));
    });
  };
};
