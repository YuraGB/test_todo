import { TTodo } from '../../store/reducers/types.ts'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useCallback, useMemo } from 'react'
import { todoRemove, todoToggle } from '../../store/reducers/todo-reducer.ts'

type TUseTodoList = {
  todos: TTodo[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export const useTodoList = ():TUseTodoList => {
  const todos: TTodo[] = useAppSelector((state) => state.todoReducer)
  const filter: string = useAppSelector((state) => state.filterReducer)

  const dispatch = useAppDispatch()
  const onDelete =
      useCallback((id: string) => dispatch(todoRemove(id)), [dispatch])
  const onToggle =
      useCallback((id: string) => dispatch(todoToggle(id)), [dispatch])

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active': {
        return todos.filter((todo) => !todo.completed)
      }
      case 'completed': {
        return todos.filter((todo) => todo.completed)
      }
      default: {
        return todos
      }
    }
  }, [todos, filter])

  return {
    'todos': filteredTodos,
    onDelete,
    onToggle,
  }
}
