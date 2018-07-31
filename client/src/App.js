import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store  from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
        <h1> <Alert color="primary">Hello MONGO</Alert></h1>
        <AppNavBar />
        <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
