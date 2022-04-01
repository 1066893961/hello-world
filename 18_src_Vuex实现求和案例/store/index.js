//该文件用于创建vuex中最为核心的store

import Vue from "vue";
//引入vuex
import Vuex from "vuex";

//准备actions---用于相应组件中的动作
const actions = {
//   jia(context, value) {
//     // console.log('actions中jia被调用了', context, value)
//     context.commit("JIA", value);
//   },
//   jian(context, value) {
//     context.commit("JIAN", value);
//   },
  jiAdd(context, value) {
    if (context.state.total % 2 != 0) {
        context.commit("JIADD", value);
    }
  },
  dengAdd(context, value) {
    setTimeout(() => {
        context.commit("DENGADD", value);
     }, 500);
  },
};

//准备mutationss---用于操作数据
const mutations = {
  JIA(state, value) {
    state.total = state.total + value;
    // console.log('mutations中JIA被调用了', state, value)
  },
  JIAN(state, value) {
    state.total = state.total - value;
  },
  JIADD(state, value) {
      state.total = state.total + value;
  },
  DENGADD(state, value) {
    state.total = state.total + value;
  },
};

//准备state---用于存储数据
const state = {
  total: 0, //当前的和
};

Vue.use(Vuex);

//创建store 并暴露store
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
});
