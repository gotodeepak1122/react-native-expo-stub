import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TodoList } from './components/TodoList';
import { useTodoStore } from './stores/todoStore';

export default function App() {
  const todos = useTodoStore((state) => state.todos);
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 bg-gray-100">
        <StatusBar style="auto" />
        <TodoList todos={todos} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
