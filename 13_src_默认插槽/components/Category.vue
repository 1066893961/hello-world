<template>
    <div class="category">
        <h3 class="h3">{{title}}分类</h3>
        <!--默认插槽 定义一个插槽(挖个坑，等着组件的使用者进行填充) -->
        <slot>我是一个默认值，当使用者没有填充时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
  
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    .h3{
        background-color: sandybrown;
        text-align: center;
        
    }
</style>