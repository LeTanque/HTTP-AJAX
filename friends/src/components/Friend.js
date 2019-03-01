import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';

const Friend = props => {
    // console.log(props);
    
    return (
        <Fragment>
            <section className='friend-card'>
                
                <div className='friend-name'>{props.friend.name}<span className='friend-age'>&nbsp;{props.friend.age}</span></div>
                
                <div className='friend-data'><a href={`maito:${props.friend.email}`}>{props.friend.email}</a></div>

                <span className='friend-buttons'>
                    <FaUserMinus 
                        onClick={e => props.deleteFriend(e, props.friend.id)} 
                    />
                    <FaUserEdit 
                        // onClick={e => updateFriend(e, props.friend)} 
                    />
                </span>

            </section>
        </Fragment>
    )
}


export default Friend