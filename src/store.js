import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      // 用户信息
    },
  },
  mutations: {
    // 跟新用户信息
    updateUserInfo(state, newUserInfo) {
      // state.userInfo = newUserInfo;
    },
  },
  actions: {},
});
