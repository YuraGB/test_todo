import TodoItem from "../../components/TodoItem"
import {Grid} from "@chakra-ui/react"
import {useTodoList} from "./useTodoList.ts"

const TodoList = (): JSX.Element | null => {
  const {todos, onToggle, onDelete} = useTodoList()

  if(todos.length === 0) {
    return null
  }

  return (
    <Grid gap={3} w={"100%"} maxW={"768px"} >
      {
        todos.map(todo => <TodoItem key={todo.id} {...todo} onClick={onToggle} onRemove={onDelete}/>)
      }
    </Grid>
  )
}

export default TodoList
