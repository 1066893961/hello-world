<template>
  <div v-show="total" class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部 {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清楚已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo","clearAllTodo"],
  computed: {
    doneTotal() {
      // let i = 0
      // this.todos.forEach((todo)=>{
      //   if(todo.done)i++
      // })
      //   return i

      //条件统计
      // return this.todos.reduce((pre, current) => {
      //   console.log("@", pre, current);
      //   return pre + (current.done ? 1 : 0);
      // }, 0);

      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    total() {
      return this.todos.length;
    },
    isAll:{
      get(){
         return this.doneTotal === this.total && this.total > 0
      },
      set(checked){
         this.checkAllTodo(checked)
      }
    }
  },
  methods:{
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAll(){
      this.clearAllTodo()
    }
  }
};
</script>


<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>