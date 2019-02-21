import imgur from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgur_access_token")
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
  //   setImages: (state, images) => {
  //     // console.log("auth");
  //   }
};

const actions = {
  login: () => {
    imgur.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const callbackQuerystring = qs.parse(hash.substring(1));
    window.localStorage.setItem(
      "imgur_access_token",
      callbackQuerystring.access_token
    );
    commit("setToken", callbackQuerystring.access_token);
    router.push("/");
  },
  logout: ({ commit }) => {
    window.localStorage.removeItem("imgur_access_token");
    //mutations.setToken // bad
    commit("setToken", null); //mutation name, null token
    //rootState.image.images = []; // not sure bad
    // better have namespace of modules
    commit("setImages", []);
    router.push("/");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
