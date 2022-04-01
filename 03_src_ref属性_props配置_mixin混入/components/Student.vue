<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr />
    <h3 @click="showName">学生姓名：{{ name }}</h3>
    <h3>学生性别：{{ sex }}</h3>
    <h3>学生年龄：{{ myAge + 1 }}</h3>
    <button @click="updateAge">点我年龄+1</button>
  </div>
</template>

<script>
    import { mixin, mixin2 } from "../mixin";
    export default {
      name: "Student",
      data() {
        return {
          msg: "欢迎就读清华大学",
          myAge: this.age,
        };
      },
      methods: {
        updateAge() {
          this.myAge++;
        },
      },
      mixins: [mixin, mixin2],
      // props:["name", 'age', 'sex']//简单接受data数据
      //接受的同时对数据类型进行限制
      props: {
        name: String,
        sex: String,
        age: Number,
      },

      /*  props: {
        name: {
          type: String, //name类型是字符串
          required: true, //必选项
        },
        sex: {
          type: String, //name类型是字符串
          required: true, //必选项
        },
        age: {
          type: Number, //name类型是字符串
          required: 100, //非必须 不传  默认是100
        },
      }, */
    };
</script>

