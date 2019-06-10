import TokenService from "../services/token-service";
import config from "../config";

const DoggyApiService = {
  addNewPost(title, content, forumid) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        content,
        forumid
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default DoggyApiService;
