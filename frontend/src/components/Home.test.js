// frontend/src/components/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import axios from 'axios';

jest.mock('axios');

test('renders entries', async () => {
  axios.get.mockResolvedValue({ data: [{ _id: '1', title: 'Test Entry' }] });
  render(<Home />);
  const entryElement = await screen.findByText(/Test Entry/i);
  expect(entryElement).toBeInTheDocument();
});