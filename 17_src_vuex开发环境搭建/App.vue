<template>
  <div class="container">
    <Count/>
  </div>
</template>

<script>
import Count from "@/components/Count";
export default {
  name: "App",
  components: {
    Count,
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