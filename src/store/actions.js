import * as Types from './mutation-types'
export default {
  //当前store提供的方法，action 调用mutation ， mutation操作数据
  addTodo ( { commit }, todo) {
    commit(Types.ADDTODO, todo)
  },
  delTodo ({ commit }, todo) {
    commit(Types.DELTODO, todo)
  }
}