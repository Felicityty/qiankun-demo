import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  appName: 'qinakun-base',
  num: 2
}

const mutations = {
  updateName(state, newData) {
    state.name = newData;
  },
}

export default new Vuex.Store({
  state,
  mutations,
})

