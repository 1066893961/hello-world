//该文件用于创建vuex中最为核心的store

import Vue from 'vue'
//引入vuex
import Vuex from "vuex";

//准备actions---用于相应组件中的动作
const actions = {};

//准备mutationss---用于操作数据
const mutations = {};

//准备state---用于存储数据
const state = {};

Vue.use(Vuex)

//创建store 并暴露store
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
});
