import React, { Fragment } from 'react';
import Friend from './Friend';


const Friends = props => {

    return (
        <Fragment>

            <section className='friend-list'>
                {props.friends.map(friend => (
                    <Friend 
                        key={friend.id} 
                        friend={friend} 
                        deleteFriend={props.deleteFriend}
                        setUpdateFriend={props.setUpdateFriend}
                    />
                ))}
            </section>
            
        </Fragment>
    )

}

export default Friends