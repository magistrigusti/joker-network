import React, { useState } from 'react';
import style from './Users.module.css';
import ImgUsers from '../../../img/fogundes.png';

let Users = (props) => {
    const [portionNumber, setPortionNumber] = useState(1);  // Стейт для отслеживания "окна" страниц
    const portionSize = 10;  // Размер порции, т.е. сколько страниц показывать одновременно

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize); // Количество порций
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // Левый край "окна"
    const rightPortionPageNumber = portionNumber * portionSize; // Правый край "окна"

    return (
        <div className={style.users_wrapper}>
            <div className={style.pagination}>
                {/* Кнопка для перехода на предыдущую порцию */}
                {portionNumber > 1 &&
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>{"<"}</button>
                }

                {/* Отображение только страниц, входящих в текущую порцию */}
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => (
                        <span
                            key={page}  // Используем page как ключ
                            className={`${style.pageNumber} ${props.currentPage === page && style.selectedPage}`}
                            onClick={() => props.onPageChanged(page)}>
                            {page}
                        </span>
                    ))
                }

                {/* Кнопка для перехода на следующую порцию */}
                {portionNumber < portionCount &&
                    <button onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>
                }
            </div>

            {/* Список пользователей */}
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

                        <span className={style.date_status}>
                            <div className={style.status}>{user.status}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
