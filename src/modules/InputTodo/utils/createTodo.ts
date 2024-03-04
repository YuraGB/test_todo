import {TTodo} from "../../../store/reducers/types.ts"

const createTodo = (todo: string): TTodo => {
  return {
    id: Math.random().toString(16).slice(2),
    title: todo,
    completed: false
  }
}

export default createTodo