import {
  GET_TODOS_FETCHING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR
} from "../actions/getTodos";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_FETCHING: {
      return { ...state, loading: true, error: null };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: payload,
        loading: false,
        error: null,
      };
    }
    case GET_TODOS_ERROR: {
      return { ...state, error: payload, loading: true };
    }
    default:
      return state;
  }
};

export default todos;