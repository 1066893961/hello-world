<template>
  <div>
    <h2 @click="showName">汽车名称：{{ name }}</h2>
    <h2>汽车颜色：{{ color }}</h2>
  </div>
</template>

<script>
import { mixin, mixin2 } from "../mixin";
import pubsub from "pubsub-js";
export default {
  name: "Car",
  data() {
    return {
      name: "马自达",
      color: "红色",
    };
  },
  methods:{
    demo(msgName, data){
       console.log("car收到了数据", msgName, data);
    }
  },
  mounted() {
    this.pubId = pubsub.subscribe('hello', this.demo)
    // this.$bus.$on('hello', (data)=>{
    //     console.log('car收到了数据', data)
    // })
    //订阅消息11111
    // this.pubId = pubsub.subscribe("hello", function (msgName, data) {
    //   //此时this是undefine  写成箭头函数this = vm
    //   console.log("car收到了数据", msgName, data);
    // });

//订阅消息  2222
    // this.pubId = pubsub.subscribe("hello", (msgName, data) => {
    //   //  写成箭头函数this = vm
    //   console.log("car收到了数据", msgName, data);
    // });

  
  },
  mixins: [mixin, mixin2], //方法的封装
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>