import axios from 'axios';

const apiTodos = axios.create({
  baseURL: 'https://rn-todo-99e6a-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default apiTodos;