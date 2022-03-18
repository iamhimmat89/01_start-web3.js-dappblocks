import React from 'react';
import './App.css';
import Main from './components/main.component';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Route path="/" component={Main}/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
