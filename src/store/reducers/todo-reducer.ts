import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TTodo } from './types.ts'

const initialState: TTodo[] = [{
  'id': '1',
  'title': 'Learn React',
  'completed': false,
}, {
  'id': '2',
  'title': 'Learn Redux',
  'completed': true,
}, {
  'id': '3',
  'title': 'Learn Redux Toolkit',
  'completed': false,
}]

const todosSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    todoAdd(state: TTodo[], action: PayloadAction<TTodo>) {
      state.push({
        'id': action.payload.id,
        'title': action.payload.title,
        'completed': action.payload.completed,
      })
    },
    todoToggle(state: TTodo[], action: PayloadAction<string>) {
      const todo = state.find((todoItem) => todoItem.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    todoRemove(state: TTodo[], action: PayloadAction<string>) {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { todoAdd, todoToggle, todoRemove } = todosSlice.actions

export default todosSlice.reducer
