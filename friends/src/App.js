import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './css/index.css';

import Friends from './components/Friends';
// import Friend from './components/Friend';
import FriendProfile from './components/FriendProfile';
import AddFriend from './components/AddFriend';
import Header from './components/Header';


class App extends Component {
  constructor(){
    super();
    this.state={
      friends:[],
      friend:[],
      error:''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(error => {
        console.log(error);
        this.setState({error:error});
      });
  }

  addFriend = (event, friend) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(response => {
        this.setState({
          friends: response.data
        })
        this.props.history.push('/friends');
      })
      .catch(error => console.log(error))
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push('/friends');
      })
      .catch(error => {
        console.log(error);
      });
  };


  setActiveFriend = (event, friendFromState, destination) => {
    event.preventDefault();
    this.setState({
      friend: friendFromState
    });
    console.log('set active friend clicked');
    this.props.history.push(destination);
  };

  updateFriend = (event, friend) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push('/friends');
      })
      .catch(error => {
        console.log(error);
      });
  };


  render() {
    // console.log(this.state.friends)

    return (
      <div className="App">

        <Header />

        {/* Route to the friends list */}
        <Route
          path='/friends'
          render={props => (
            <Friends 
              {...props} 
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setActiveFriend={this.setActiveFriend}
            />
          )}
        />
        
        {/* Route to the add friend form */}
        <Route 
          path='/add-friend'
          render={props => (
            <AddFriend 
              {...props} 
              friends={this.state.friends}
              friend={this.state.friend}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
        
        {/* Route to each individual friend */}
        <Route
          exact
          path="/friends/profile/:id"
          render={props => (
              <FriendProfile
              {...props}
              friend={this.state.friend}
              // deleteFriend={props.deleteFriend}
              // setActiveFriend={props.setActiveFriend}
              />
        )}
        />


      </div>
    );
  }
}

export default App;
