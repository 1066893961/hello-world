<template>
  <div>
    <h1>当前求和的值为：{{ total }}</h1>
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
      this.total += this.n;
    },
    subtract() {
      this.total -= this.n;
    },
    jiAdd() {
      if (this.total % 2 !== 0) {
        this.total += this.n;
      }
    },
    dengAdd() {
      setTimeout(() => {
        this.total += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>