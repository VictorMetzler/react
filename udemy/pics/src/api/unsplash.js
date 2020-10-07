import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xIv1Eoh7EC0evyW64FtF624IcGWgPTA4AKbjhNTMYz0",
  },
});
