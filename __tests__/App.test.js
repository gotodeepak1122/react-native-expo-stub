import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('Todo List App', () => {
  it('should add a new todo when input is submitted', () => {
    const { getByTestId, getByText } = render(<App />);
    
    const input = getByTestId('add-todo-input');
    const addButton = getByTestId('add-todo-button');
    
    fireEvent.changeText(input, 'Buy groceries');
    fireEvent.press(addButton);
    
    expect(getByText('Buy groceries')).toBeTruthy();
  });
}); 