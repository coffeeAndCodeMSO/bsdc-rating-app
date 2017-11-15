import React from 'react';
import ReactDOM from 'react-dom';
import LoginSignup from './Components/LoginSignup';

it('renders LoginSignup without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginSignup />, div);
});
 
