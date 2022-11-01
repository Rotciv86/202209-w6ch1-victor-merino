import { ToDoStructure } from "../../../types";
import { loadToDosActionCreator, toDoReducer, ToDoState } from "./toDoSlice";

describe("Given a toDoReducer", () => {
  describe("When it is invoked", () => {
    describe("With an empty initial state and a load to dos action with a list of 3 tasks", () => {
      test("Then it should return a new state with a list that includes three tasks", () => {
        const taskLists: ToDoStructure[] = [
          {
            id: 0,
            name: "Learn Redux",
            isDone: false,
          },
          {
            id: 1,
            name: "Learn hexagonal architecture",
            isDone: false,
          },
          {
            id: 2,
            name: "Learn Dockers",
            isDone: false,
          },
        ];
        const loadTasksAction = loadToDosActionCreator(taskLists);
        const emptyState: ToDoState = {
          list: [],
        };

        const newState = toDoReducer(emptyState, loadTasksAction);

        expect(newState).toHaveProperty("list", taskLists);
      });
    });
  });
});
