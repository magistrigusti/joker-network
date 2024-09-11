import React from 'react';
import { useSelector } from 'react-redux';
import Friends from './Friends';

const FriendsContainer = () => {
  const friendsState = useSelector(state => state.friendsPage)

  return (
    <Friends state={friendsState} />
  )
};

export default FriendsContainer;