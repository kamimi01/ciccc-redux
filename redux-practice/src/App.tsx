import React from 'react';
import './App.css';
import User from './components/User';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <User />
    </div>
  );
};

export default App;
