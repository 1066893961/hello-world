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
    if (context.state.sum % 2 != 0) {
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
    state.sum = state.sum + value;
    // console.log('mutations中JIA被调用了', state, value)
  },
  JIAN(state, value) {
    state.sum = state.sum - value;
  },
  JIADD(state, value) {
    state.sum = state.sum + value;
  },
  DENGADD(state, value) {
    state.sum = state.sum + value;
  },
  ADD_PERSON(state, value){
    console.log('mutations中ADD_PERSON被调用了', state, value)
    state.personList.unshift(value)
  }
};

//准备state---用于存储数据
const state = {
  sum: 0, //当前的和
  school: "尚硅谷",
  subject: "vue",
  personList: [
    { id: "001", name: "张三" },
  ],
};

//准备getters 用于将state中的数据进行加工
const getters = {
  bigsum(state) {
    return state.sum * 10;
  },
};

Vue.use(Vuex);

//创建store 并暴露store
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
  getters,
});
