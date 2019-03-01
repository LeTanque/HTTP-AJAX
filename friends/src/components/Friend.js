import React, { Fragment } from 'react';
// import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
// import FriendProfile from './FriendProfile';

// const Friend = props => {
class Friend extends React.Component {

    render() {
        const props = this.props;
        if (!props.friend) {
            return <h3>Loading friends...</h3>;
        }
        // console.log(props);
        console.log(props.friend);
        // const { matched } = props.match.params;
        // const friend = props.friends.find(thing => `${thing.id}` === matched);

        return (
            <Fragment>
                
                <section className='friend-card'>
                    

                    <div className='friend-name'>{props.friend.name}<span className='friend-age'>&nbsp;{props.friend.age}</span></div>
                    
                    <Link 
                        to={`/friends/profile/${props.friend.id}`} 
                        onClick={event => props.setActiveFriend(event, props.friend, `/friends/profile/${props.friend.id}`)} 
                        >Visit Profile
                    </Link>

                    <div className='friend-data'><a href={`maito:${props.friend.email}`}>{props.friend.email}</a></div>


                    <span className='friend-buttons'>
                        
                        <FaUserEdit 
                            onClick={event => props.setActiveFriend(event, props.friend, `/add-friend`)} 
                        />

                        <FaUserMinus 
                            onClick={event => props.deleteFriend(event, props.friend.id)} 
                            className='cred'
                        />

                    </span>

                </section>

                
                
            </Fragment>
        )
    }
    
}


export default Friend