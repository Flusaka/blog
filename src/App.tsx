import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Home';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path='/' component={ Home } />
      </BrowserRouter>
    );
  }
}

export default App;
