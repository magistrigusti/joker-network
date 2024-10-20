import React from 'react';
import style from './Groups.module.css';
import GroupItem from './GroupItem/GroupItem';

const Groups = ({state}) => {
  let groupsElements = state.groupsData.map(group =>
    <GroupItem id={group.id} name={group.name} 
      subscribers={group.subscribers} avatar={group.avatar} description={group.description}
    />
  )

  return (
    <div className={style.groups_wrapper}>
      <h4 className={style.title}>Groups</h4>
      {groupsElements}
    </div>
  )
}

export default Groups;