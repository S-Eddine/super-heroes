import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import './App.css';
import Heroes from './components/heroes/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            SUPER HEROS : VENTE PRIVEE
          </header>
          <Heroes />
        </div>
      </Provider>
    );
  }
}

export default App;
