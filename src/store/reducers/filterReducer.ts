import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState: string = "all"

const filterReducer = createSlice({
  name: 'filter',
  initialState:initialState,
  reducers: {
    changeFilter(_state, action: PayloadAction<string>): string {
      return  action.payload
    },
  }
})

export const { changeFilter} = filterReducer.actions

export default filterReducer.reducer