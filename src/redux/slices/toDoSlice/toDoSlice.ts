import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDos } from "../../../types";

export interface ToDoState {
  list: ToDos;
}

const initialState: ToDoState = {
  list: [],
};

const toDoSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    loadToDos: (currentState, action: PayloadAction<ToDos>) => ({
      ...currentState,
      list: [...action.payload],
    }),
  },
});

export const { loadToDos: loadToDosActionCreator } = toDoSlice.actions;

export const toDoReducer = toDoSlice.reducer;
