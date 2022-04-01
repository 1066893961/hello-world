<template>
  <div>
    <Student name="黄书武" :age="13" sex="男" />
    <Car></Car>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import Car from '@/components/Car'

export default {
  name: "App",
  components: {
    Student,
    Car
  },
  mounted(){
    this.$bus.$on('sendName',this.name)
  }
};
</script>