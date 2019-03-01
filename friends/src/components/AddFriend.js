import React, {Fragment} from 'react';



class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: this.props.activeItem || {
                name:'',
                age:'',
                email:''
            }
        }
    }
    
    changeHandler = event => {
        event.persist();
        let value = event.target.value;
        if (event.target.name === 'age') {
          value = parseInt(value, 10);
        }
        this.setState(prevState => ({
            friend: {
              ...prevState.friend,
              [event.target.name]: value
            }
        }));
    }

    addFriend = event => {
        this.props.addFriend(event, this.state.friend);
        this.setState({
            friend: {
                name:'',
                age:'',
                email:''
            }
        })
    }

    render() {
        // console.log(this.props.addFriend);

        return (
            <Fragment>

                <form onSubmit={this.addFriend} >
                    <input 
                        type='text'
                        name='name'
                        onChange={this.changeHandler}
                        placeholder='Name'
                        value={this.state.friend.name}
                    />
                    <input 
                        type='text'
                        name='age'
                        onChange={this.changeHandler}
                        placeholder='Age'
                        value={this.state.friend.age}
                    />
                    <input 
                        type='text'
                        name='email'
                        onChange={this.changeHandler}
                        placeholder='Email'
                        value={this.state.friend.email}
                    />
                </form>
                <button className='btn-green' onClick={this.addFriend}>Add Friend</button>

            </Fragment>
        )
    }
}

export default FriendForm
