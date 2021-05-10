import Axios from "axios";

export default class PostService {
  // get post from json
  async fetchAllPost() {
    return await Axios({
      url: "./data/posts.json",
      method: "GET",
    });
  }
  async fetchAllComment() {
    return await Axios({
      url: "./data/comments.json",
      method: "GET",
    });
  }
}
