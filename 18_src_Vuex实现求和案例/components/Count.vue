<template>
  <div>
    <h1>当前求和的值为：{{ $store.state.total }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button class="button" @click="add">+</button>
    <button class="button" @click="subtract">-</button>
    <button class="button" @click="jiAdd">当前求和奇数再加</button>
    <button class="button" @click="dengAdd">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
      total: 0, //当前的和
    };
  },
  methods: {
    add() {
      // this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    subtract() {
      this.$store.commit("JIAN", this.n);
    },
    jiAdd() {
      this.$store.dispatch("jiAdd", this.n);
    },
    dengAdd() {
      this.$store.dispatch("dengAdd", this.n);
    },
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>