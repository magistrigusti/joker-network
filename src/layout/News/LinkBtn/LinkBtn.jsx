import React from 'react';
import style from './LinkBtn.module.css';

const LinkBtn = (props) => {
  return (
    <div className={style.link_button_wrapper}>
      <button className={style.link_button}>
        <a href={props.link}>Read More</a>
      </button>
    </div>
  )
}

export default LinkBtn;