import apiTodos from "../../api/apiTodos";

export const GET_TODOS_FETCHING = 'GET_TODOS/FETCHING';
export const GET_TODOS_SUCCESS = 'GET_TODOS/SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS/ERROR';

const todosFetching = () => ({
  type: GET_TODOS_FETCHING,
});

const todosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  payload: todos,
});

const todosError = (error) => ({
  type: GET_TODOS_ERROR,
  payload: error,
});

const getAllTodos = async () => {
  const { data } = await apiTodos.get('/todos.json');
  return data ? Object.keys(data).map(key =>
    ({ id: key, title: data[key].title, img: data[key].img })) : [];
}

export const addTodo = (todo, img) => async (dispatch) => {
  await apiTodos.post('/todos.json', { title: todo, img });
  dispatch(todosSuccess(await getAllTodos()));
}

export const deleteTodo = (id) => async (dispatch) => {
  await apiTodos.delete(`/todos/${id}.json`);
  dispatch(todosSuccess(await getAllTodos()));
}

export const getTodos = () => async (dispatch) => {
  dispatch(todosFetching());

  try {
    dispatch(todosSuccess(await getAllTodos()));
  } catch (error) {
    dispatch(todosError(error));
  }
};