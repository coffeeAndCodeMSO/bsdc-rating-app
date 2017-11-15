import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './Components/Quote.js';

it('renders Quote without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quote />, div);
});
