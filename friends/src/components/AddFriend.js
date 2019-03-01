import React, {Fragment} from 'react';



class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                // id: '',
                name:'',
                age:'',
                email:''
            }
        }
    }


    componentDidUpdate(prevProps) {
        if (this.props.friend && prevProps.friend !== this.props.friend) {
            this.setState({
                friend: this.props.friend
            });
        }
    }

    
    changeHandler = event => {
        event.persist();
        
        let value = event.target.value;

        // This covers string to number for the age
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

    handleSubmit = event => {
        // if (this.props.friend.id) {
        //     this.props.updateFriend(event, this.state.friend)
        // } else {
        //     this.props.addFriend(event, this.state.friend)
        // }
        console.log('handlesubmit fired');
        
        this.props.addFriend(event, this.state.friend);
        this.setState({
            friend: {
                name:'',
                age:'',
                email:''
            }
        });
    };

    clearFriend = () => {
        this.setState({
            friend: {
                name:'',
                age:'',
                email:'',
                id:''
            }
        })
    }

    render() {
        console.log('This is the state', this.state.friend);
        // console.log('These are the props', this.props.friend);

        return (
            <Fragment>

                <form onSubmit={this.handleSubmit} >
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.changeHandler}
                        value={this.state.friend.name}
                    />
                    <input 
                        type='number'
                        name='age'
                        placeholder='Age'
                        onChange={this.changeHandler}
                        value={this.state.friend.age}
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={this.changeHandler}
                        value={this.state.friend.email}
                    />
                </form>
                <button className='btn-green' onClick={this.handleSubmit}>
                    {`${this.state.friend.id ? 'Update' : 'New'} Friend`}
                </button>
                {/* <button className='btn-red' onClick={this.clearFriend}>Clear Form</button> */}

            </Fragment>
        )
    }
}

export default FriendForm
