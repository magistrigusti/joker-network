import React from 'react';
import { useSelector } from 'react-redux';
import Groups from './Groups';

const GroupsContainer = () => {
  const groupsState = useSelector(state => state.groupsPage)

  return (
    <Groups state={groupsState} />
  )
}

export default GroupsContainer;