import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import './App.css';
import Heroes from './components/heroes/index';
import heroId from './components/heroId/index';

import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          SUPER HEROES - Vente privee
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Heroes} />
            <Route path="/hero/:heroId" component={heroId} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
    );
  }
}

export default App;
