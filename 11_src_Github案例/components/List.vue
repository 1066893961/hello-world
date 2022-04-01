<template>
  <div class="list">
    <!-- 展示用户列表 -->
    <div
      v-show="info.users.length"
      class="contrain"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p>{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用GitHub</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      info:{
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      }
    };
  },
  mounted() {
    this.$bus.$on("updateLsitData", (dataObj) => {
     this.info = {...this.info, ...dataObj}
    });
  },
};
</script>
<style>
.list {
  background-color: cornsilk;
  columns: 200px 3;
  padding-top: 20px;
  padding-bottom: 20px;
}
.contrain {
  width: auto;
  padding-top: 20px;
  text-align: center;
}
</style>