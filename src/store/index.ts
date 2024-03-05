import {
  combineReducers,
  configureStore,
  EnhancedStore,
} from '@reduxjs/toolkit'

import todoReducer from './reducers/todo-reducer.ts'
import filterReducer from './reducers/filter-reducer.ts'

const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
})
export const setupStore = (): EnhancedStore => configureStore({
  'reducer': rootReducer,
  'devTools': process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
