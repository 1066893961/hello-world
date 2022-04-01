<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能  但是不建议这样做 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
    <button  v-show="!todo.isEdit" class="btn btn-edit" @click="editItem(todo)">编辑</button>
  </li>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //申明接受 todo对象
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //通知app组件将对应的todo对象的done值取反
      this.$bus.$emit("check", id);
    },
    deleteItem(id) {
      if (confirm("确定删除吗")) {
        //通知app组件删除对应的todo对象
        // this.deleteTodo(id)
        // this.$bus.$emit('delete', id)
        //发布删除消息
        pubsub.publish("delete", id);
      }
    },
    editItem(todo) {
      //编辑
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else{
        this.$set(todo, "isEdit", true);
      }
     this.$nextTick(function(){
        this.$refs.inputTitle.focus()
     })
    },
    handleBlur(todo, event){
      //失去焦点时  (正在执行修改逻辑)
      todo.isEdit = false

      if(!event.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, event.target.value)
      console.log(todo.id, event.target.value)
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li::before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>