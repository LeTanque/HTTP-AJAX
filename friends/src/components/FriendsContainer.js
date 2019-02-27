import React, { Fragment } from 'react';
import Friend from './Friend';



const FriendsContainer = props => {
console.log(props.friends);

    return (
        <Fragment>
            
            <section className='friends-container'>
                <h1>Friends!</h1>

                {props.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}

            </section>

        </Fragment>
    )


}


export default FriendsContainer