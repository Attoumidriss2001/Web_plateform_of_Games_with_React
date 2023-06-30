import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d73162f4c7844b46abf64fef9a20cefa",
  },
});
