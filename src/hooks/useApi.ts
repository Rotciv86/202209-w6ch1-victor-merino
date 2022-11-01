import { useAppDispatch } from "../redux/hooks";
import { loadToDosActionCreator } from "../redux/slices/toDoSlice/toDoSlice";
import { ToDos } from "../types";

const useApi = () => {
  const urlApi = process.env.REACT_APP_API_URL_TODOAPI;
  const dispatch = useAppDispatch();

  const loadTasks = async () => {
    let newUrl = `${urlApi}`;

    const response = await fetch(newUrl);
    const apiResponse: ToDos = await response.json();

    dispatch(loadToDosActionCreator(apiResponse));
  };
  return { loadTasks };
};

export default useApi;
