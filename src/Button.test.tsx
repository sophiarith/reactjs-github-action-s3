// src/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  
  // Query the button element and check if it is in the document
  const buttonElement = screen.getByText(/click me button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick handler when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} label="Click Me" />);
  
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  
  // Check if the mock function is called once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
