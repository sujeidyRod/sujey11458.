import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 style={{ color: 'pink' }}>App Redux</h1> {/* Cambia el color del encabezado */}
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
