import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';
import axios from 'axios';
import FriendsContainer from './components/FriendsContainer';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[]
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {});
  }

  render() {
    // console.log(this.state.friends)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FriendsContainer friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
