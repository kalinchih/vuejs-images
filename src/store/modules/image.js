import imgur from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: []
};

const getters = {
  //   allImages: state => state.images
  allImages(state) {
    return state.images;
  }
};

const mutations = {
  //   setImages: (state, images) => {
  //     state.images = images;
  //   }
  setImages(state, images) {
    state.images = images;
    // console.log("image");
  }
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    if (!!token) {
      const response = await imgur.fetchImages(token);
      commit("setImages", response.data.data);
    }
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await imgur.uploadImages(token, images);
    router.push("/");
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
