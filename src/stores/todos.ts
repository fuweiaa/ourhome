/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2025-02-24 09:40:20
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2025-02-24 10:23:02
 * @FilePath: \ourhome\src\stores\todos.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia"

// 1. 定义数据模型类型
interface ITodo {
  id: number
  text: string
  isFinished: boolean
}

// 2. 定义过滤类型枚举
type FilterType = "all" | "finished" | "unfinished"

export const useTodos = defineStore("todos", {
  // 3. 明确state类型
  state: (): {
    todos: ITodo[] // 待办事项数组
    filter: FilterType // 过滤类型
    nextId: number // 自动生成ID
  } => ({
    todos: [],
    filter: "all" as FilterType, // 使用类型断言
    nextId: 0,
  }),

  // 4. 明确getter返回类型
  getters: {
    // 计算属性
    finishedTodos(state): ITodo[] {
      return state.todos.filter((todo) => todo.isFinished)
    },
    // 计算属性
    unfinishedTodos(state): ITodo[] {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    // 计算属性
    filteredTodos(state): ITodo[] {
      switch (state.filter) {
        case "finished":
          return this.finishedTodos
        case "unfinished":
          return this.unfinishedTodos
        default:
          return state.todos
      }
    },
  },

  // 5. 添加参数类型校验
  // 操作函数
  actions: {
    addTodo(text: string): void {
      if (text.trim() === "") return // 基本校验
      this.todos.push({
        text,
        id: this.nextId++,
        isFinished: false,
      })
    },

    // 可选：添加删除/更新功能示例
    deleteTodo(id: number): void {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },

    toggleTodo(id: number): void {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      )
    },
  },
})
