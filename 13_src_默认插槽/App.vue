<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        style="width: 200px"
        src="http://static.kuaidao.cn/brand/dfNi3mGWQS.jpg"
        alt=""
      />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video
        controls
        style="width: 200px"
        src="https://www.w3schools.com/html/movie.mp4"
        alt=""
      />
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  data() {
    return {
      foods: ["火锅", "火锅2", "火锅3", "火锅4"],
      games: ["lol", "王者荣耀", "穿越火线", "金铲铲之战"],
      films: ["教父", "拆掉专家", "线人", "战狼2"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* 默认不换行 */
  justify-content: space-around;
}
</style>