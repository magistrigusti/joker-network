import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import ImgUsers from '../../../img/avatars/fogundes.png';
import { usersAPI } from '../../../api/api';
import Pagination from '../../../components/common/Pagination/Pagination'

let Users = (props) => {

    return (
        <div className={style.users_wrapper}>
            <Pagination onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />

            {/* Список пользователей */}
            {props.users.filter(user => user.photos.small !== null).map(user => (
                <div className={style.users} key={user.id}>
                    <span className={style.user}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className={style.avatar}
                                    src={user.photos.small ? user.photos.small : ImgUsers}
                                    alt={user.name || 'User Avatar'}
                                />
                            </NavLink>
                        </div>

                        <div className={style.button_wrapper}>
                            {user.followed
                                ? <button className={style.button} 
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={async () => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button className={style.button} 
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={async () => {props.follow(user.id);}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span className={style.user_dates}>
                        <span className={style.date}>
                            <div className={style.name}>{user.name}</div>
                        </span>

                        <span className={style.date_status}>
                            <div className={style.status}>{user.status}</div>
                        </span>
                    </span>
                </div>
            ))}

            <Pagination onPageChanged={props.onPageChanged} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
        </div>
    );
};

export default Users;
