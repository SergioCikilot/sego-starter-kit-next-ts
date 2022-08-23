import axios from "axios";

function authenticate(username: string, password: string) {
  return axios.post("http://localhost:8080/user/login", {
    username: username,
    password: password,
  });
}

export default authenticate;
