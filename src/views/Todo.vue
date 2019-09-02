<template>
  <div class="TodoList">
    <p class="TodoList-color">todo page</p>
    <router-link to="/about">about</router-link><br>
    <router-link to="/checkout">checkout</router-link><br>
    <router-link to="/todo">todo</router-link>
    <input type="text" v-model="newTodo.text" @keydown.13="createTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <span @click="delTodo(todo)">删除</span>       
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'todo',

  data: () => {
    return {
      newTodo: {
        text: ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'todos'
    ])
  },

  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),

    createTodo () {
      //对象是引用数据类型
      this.addTodo({
        ...this.newTodo
      })

      this.newTodo.text =''
    }
  }
}
</script>

<style lang="scss">
.TodoList {
  font-size: .24rem;
  &-color {
    color: $pink-deeper;
  }
}
</style>