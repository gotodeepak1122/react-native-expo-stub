import { View, Text } from 'react-native';
import { ui } from '@magicul/rn';
import { useTodoStore } from '../stores/todoStore';
import { AddTodo } from './AddTodo';

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Todo List</Text>
      <AddTodo />
      {todos.map((todo) => (
        <View 
          key={todo.id} 
          className="bg-white p-4 rounded-lg mb-2 shadow-sm"
        >
          <Text>{todo.text}</Text>
        </View>
      ))}
    </View>
  );
}; 