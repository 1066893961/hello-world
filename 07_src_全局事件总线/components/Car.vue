<template>
  <div>
    <h2 @click="showName">汽车名称：{{ name }}</h2>
    <h2>汽车颜色：{{ color }}</h2>
  </div>
</template>

<script>
import { mixin, mixin2 } from '../mixin';
export default {
    name:'Car',
     data() {
       return {
           name:'马自达',
           color:'红色'
       }
     },
     mounted(){
        this.$bus.$on('hello', (data)=>{
            console.log('car收到了数据', data)
        })
     },
     mixins:[mixin, mixin2],//方法的封装
     beforeDestroy(){
       this.$bus.$off('hello')
     }

};
</script>