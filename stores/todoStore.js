import { create } from 'zustand';
import { TodoList } from '../models/TodoList/TodoList';

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) => 
    set((state) => ({
      todos: [...state.todos, TodoList.create(text)],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? todo.toggle() : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
})); 