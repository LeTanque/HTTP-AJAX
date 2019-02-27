import React, { Fragment } from 'react';


const Friend = props => {
    console.log(props);
    
    return (
        <Fragment>
            <section className='friend-card'>
                
                <div className='friend-name'>{props.friend.name}<span className='friend-age'>&nbsp;{props.friend.age}</span></div>
                
                <div className='friend-data'><a href={`maito:${props.friend.email}`}>{props.friend.email}</a></div>

            </section>
        </Fragment>
    )
}


export default Friend