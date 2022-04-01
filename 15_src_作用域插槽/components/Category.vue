<template>
  <div class="category">
    <h3 class="h3">{{ title }}分类</h3>
    <!-- 作用域插槽  当使用者组件中 没有想用的数据时 使用-->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["lol", "王者荣耀", "穿越火线", "金铲铲之战"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

.h3 {
  background-color: sandybrown;
  text-align: center;
}
</style>