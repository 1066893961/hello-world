<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        style="width: 200px"
        src="http://static.kuaidao.cn/brand/dfNi3mGWQS.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com" class="foot">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com" class="foot">单机游戏</a>
        <a href="http://www.baidu.com" class="foot">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        style="width: 200px"
        src="https://www.w3schools.com/html/movie.mp4"
        alt=""
      />
      <!-- template标签 默认不生成结构  v-slot:footer (最新写法  只适用在template标签中)-->
      <template slot="footer">
        <div class="foot">
          <a slot="footer" href="http://www.baidu.com" class="foot">经典</a>
          <a slot="footer" href="http://www.baidu.com" class="foot">热门</a>
          <a slot="footer" href="http://www.baidu.com" class="foot">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* 默认不换行 */
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>