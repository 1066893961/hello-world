<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "@/components/Count";
import Person from "@/components/Person";
export default {
  name: "App",
  components: {
    Count,
    Person,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* 默认不换行 */
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>