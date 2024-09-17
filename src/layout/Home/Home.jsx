import React from 'react';
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.home_wrapper}>
      <h4 className={style.title}>Home</h4>
      <div classNme={style.home}>
        <h5 className={style.home_title}>Welcome to our social network Joker!</h5>
        <p className={style.home_text}>This is a simple social media platform, where users can share their thoughts, posts, and interact with each other.</p>
      </div>
    </div>
  );
};

export default Home;