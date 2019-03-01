import React, { Fragment } from 'react';
import Friend from './Friend';


const Friends = props => {
    if (!props.friends.length === 0) {
        return <h3>Loading friends...</h3>;
    }

    return (
        <Fragment>

            <section className='friend-list'>
                {props.friends.map(friend => (
                    <Friend 
                        key={friend.id} 
                        friend={friend} 
                        friends={props.friends}
                        deleteFriend={props.deleteFriend}
                        setActiveFriend={props.setActiveFriend}
                    />
                ))}
            </section>
            
        </Fragment>
    )

}

export default Friends