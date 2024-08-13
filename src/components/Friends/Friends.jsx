import React from 'react';
import style from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = ({ state }) => {
  let friendsElements = state.usersData.map(friend => 
    <FriendItem id={friend.id} 
      name={friend.name} 
      avatar={friend.avatar} 
      country={friend.country}
      city={friend.city}
      status={friend.status}
    />
  );

  return (
    <div className={style.friends_wrapper}>
      <h4 className={style.title}>Friends</h4>
      
      { friendsElements }
    </div>
  )
}

export default Friends;