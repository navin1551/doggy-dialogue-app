import config from "../config";
var jwtDecode = require("jwt-decode");

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  getUserName() {
    let token = TokenService.getAuthToken();
    if (!token) {
      return "Guest";
    }
    let decoded = jwtDecode(token);
    return decoded.sub;
  }
};

export default TokenService;
