import React from 'react';
import style from './Users.module.css';
import ImgUsers from '../../../img/fogundes.png';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.users_wrapper}>
            <div className={style.pagination}>
                {pages.map(page => (
                    <span
                        key={page}  // Используем page как ключ
                        className={`${style.pageNumber} ${props.currentPage === page && style.selectedPage}`}
                        onClick={(event) => { props.onPageChanged(page) }}>
                        {page}
                    </span>
                ))}
            </div>

            {props.users.filter(user => user.photos.small !== null).map(user => (
                <div className={style.users} key={user.id}>
                    <span className={style.user}>
                        <div>
                            <img
                                className={style.avatar}
                                src={user.photos.small != null ? user.photos.small : ImgUsers}
                                alt={user.name || 'User Avatar'}
                            />
                        </div>
                        <div className={style.button_wrapper}>
                            {user.followed
                                ? <button className={style.button} onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                : <button className={style.button} onClick={() => props.follow(user.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span className={style.user_dates}>
                        <span className={style.date}>
                            <div className={style.name}>{user.name}</div>
                            
                        </span>
                        <span className={style.date}>
                            <div className={style.status}>{user.status}</div>
                        </span>
                    </span>
                </div>
            ))
            }
        </div>
    )
}

export default Users;