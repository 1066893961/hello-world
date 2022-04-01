<template>
  <div>
    <h1>当前求和的值为：{{ sum }}</h1>
    <h3>当前求和放大十倍后是：{{ bigsum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button class="button" @click="JIA(n)">+</button>
    <button class="button" @click="JIAN(n)">-</button>
    <button class="button" @click="jiAdd(n)">当前求和奇数再加</button>
    <button class="button" @click="dengAdd(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // add() {
    //   // this.$store.dispatch("jia", this.n);
    //   this.$store.commit("JIA", this.n);
    // },
    // subtract() {
    //   this.$store.commit("JIAN", this.n);
    // },

    //借助mapMutations 生成对应的方法，  方法中会调用commit去联系mutations  对象写法
    // ...mapMutations({ add: "JIA", subtract: "JIAN" }),

    // 数组写法
    ...mapMutations(['JIA', 'JIAN']),
    /* **********************************************************************  */
    // jiAdd() {
    //   this.$store.dispatch("jiAdd", this.n);
    // },
    // dengAdd() {
    //   this.$store.dispatch("dengAdd", this.n);
    // },

    ...mapActions(["jiAdd", "dengAdd"]),
  },
  mounted() {
    // const x  = new mapState({sum:'sum', school:'school', subject:'subject'})
    // console.log("x==", x);
  },
  computed: {
    //程序员自己写法
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    //对象写法
    // ... mapState({sum2:'sum', school:'school', subject:'subject'}),

    //数组写法  读取state中的这三个值
    ...mapState(["sum", "school", "subject"]),

    //读取getters中bigsum值
    ...mapGetters(["bigsum"]),

    // bigsum() {
    // return this.$store.getters.bigsum;
    // },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>