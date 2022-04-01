<template>
  <section class="search">
    <h3>Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    getUsers() {
        //请求前更新list得数据
         this.$bus.$emit("updateLsitData", {isFirst: false, isLoading: true, errMsg: '', users:[]});
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
        (response) => {
          console.log("success");
         this.$bus.$emit("updateLsitData", {isLoading: false, errMsg: '', users:response.data.items});
        },
        (error) => {
          console.log("error", error.message);
          this.$bus.$emit("updateLsitData", {isLoading: false, errMsg: error.message, users:[]});
        }
      );
    },
  },
};
</script>

<style>
    .search{
        background-color: bisque;
        padding: 20px;
    }
</style>