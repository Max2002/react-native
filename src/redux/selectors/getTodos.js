import { createSelector } from 'reselect';

const todosSelector = (state) => state.todos;

export const dataSelector = createSelector(
  todosSelector,
  (todos) => todos.todos,
);