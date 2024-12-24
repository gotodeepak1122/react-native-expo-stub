import { View, TextInput } from 'react-native';
import { ui } from '@magicul/rn';
import { useState } from 'react';
import { useTodoStore } from '../stores/todoStore';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View className="flex-row mb-4">
      <TextInput
        className="flex-1 bg-white p-3 rounded-lg mr-2"
        placeholder="Add a new todo"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAddTodo}
        testID="add-todo-input"
      />
      <ui.Button
        onPress={handleAddTodo}
        testID="add-todo-button"
        className="bg-blue-500 px-4 py-3 rounded-lg"
      >
        Add
      </ui.Button>
    </View>
  );
}; 