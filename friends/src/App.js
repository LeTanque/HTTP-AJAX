import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import './css/index.css';

import Friends from './components/Friends';
// import FriendsContainer from './components/FriendsContainer';
import FriendForm from './components/FriendForm';
import Header from './components/Header';


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

        <Header />
        

        <NavLink to='/add-friend'>Add Friend</NavLink>
        <NavLink to='/friends'>See All Friends</NavLink>


        {/* <FriendsContainer friends={this.state.friends} /> */}

        <Route 
          path='/add-friend'
          render={props => (
            <FriendForm {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path='/friends'
          render={props => (
            <Friends {...props} friends={this.state.friends} />
          )}
        />

      </div>
    );
  }
}

export default App;
