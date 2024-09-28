import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the To-Do List title', () => {
  render(<App />);
  const titleElement = screen.getByText(/To-Do List/i);
  expect(titleElement).toBeInTheDocument();
});

test('can add a task to the list', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Enter new task/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/Buy groceries/i);
  expect(taskElement).toBeInTheDocument();
});

test('can delete a task from the list', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Enter new task/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(inputElement, { target: { value: 'Do laundry' } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/Do laundry/i);
  expect(taskElement).toBeInTheDocument();

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  expect(taskElement).not.toBeInTheDocument();
});

test('does not add empty tasks', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Enter new task/i);
  const addButton = screen.getByText(/Add Task/i);

  fireEvent.change(inputElement, { target: { value: '' } });
  fireEvent.click(addButton);

  const taskElements = screen.queryAllByRole('listitem');
  expect(taskElements.length).toBe(0);
});
