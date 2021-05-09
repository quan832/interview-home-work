import Axios from "axios";

export default class UserService {
  async loginUser(user) {
    return await Axios({
      url: "./data/users.json",
      method: "GET",
      data: user,
    });
  }
}
