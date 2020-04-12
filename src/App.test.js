import React from 'react';
import App from './App';

test('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div)
});
