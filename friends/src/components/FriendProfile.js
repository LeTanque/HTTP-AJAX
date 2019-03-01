import React, {Fragment} from 'react';



const FriendProfile = props => {
    // console.log(props);
    if (!props.friend.name) {
        return <h3>Choose a profile</h3>;
    }

    return (
        <Fragment>
            <section className='friend-profile'>
                <div className='friend-profile-name'>{props.friend.name}</div>
                <div className='friend-profile-age'>{props.friend.age} years old</div>
            </section>
        </Fragment>
    )
}


export default FriendProfile