import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './css/index.css';

import Friends from './components/Friends';
// import FriendsContainer from './components/FriendsContainer';
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
        // this.props.history.push('/add-friend');
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
        // this.props.history.push('/friends');
      })
      .catch(error => {
        console.log(error);
      });
  };

  setUpdateFriend = (event, friend) => {
    event.preventDefault();
    this.setState({
      friend: friend
    });
    console.log('set update friend clicked');
    // this.props.history.push('/add-friend');
  };

  updateFriend = (event, friend) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(response => {
        this.setState({
          friends: response.data
        });
        // this.props.history.push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {
    // console.log(this.state.friends)

    return (
      <div className="App">

        <Header />
        

        {/* <NavLink to='/add-friend'>Add Friend</NavLink>
        <NavLink to='/friends'>See All Friends</NavLink> */}


        {/* <FriendsContainer friends={this.state.friends} /> */}

        <Route 
          path='/add-friend'
          render={props => (
            <AddFriend 
              {...props} 
              friends={this.state.friends} 
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          path='/friends'
          render={props => (
            <Friends 
              {...props} 
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              setUpdateFriend={this.setUpdateFriend}
            />
          )}
        />

      </div>
    );
  }
}

export default App;
