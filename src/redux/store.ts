import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { toDoReducer } from "./slices/toDoSlice/toDoSlice";

export const store = configureStore({
  reducer: {
    loadToDos: toDoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
