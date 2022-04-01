<template>
  <div>
    <h1>当前求和的值为：{{ sum }}</h1>
    <h3>当前求和放大十倍后是：{{ bigsum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color:red">下方人员的总数是：{{personList.length}}</h3>
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
    
    // 数组写法
    ...mapMutations(['JIA', 'JIAN']),

    ...mapActions(["jiAdd", "dengAdd"]),
  },
  computed: {
    
    //数组写法  读取state中的这三个值
    ...mapState(["sum", "school", "subject",'personList']),

    //读取getters中bigsum值
    ...mapGetters(["bigsum"]),
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>