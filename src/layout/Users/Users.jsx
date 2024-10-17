import React from 'react';
import style from './Users.module.css';
import fagundes from '../../img/fogundes.png';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        // Рассчет количества страниц
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);  
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={style.users_wrapper}>
                <div className={style.pagination}>
                    {pages.length > 0 ? pages.map(page => (
                        <span
                            key={page}  // Используем page как ключ
                            className={`${style.pageNumber} ${this.props.currentPage === page && style.selectedPage}`} 
                            onClick={(event) => {this.onPageChanged(page)}}>
                            {page}
                        </span>
                    )) : <p>No pages available</p>}
                </div>

                {
                    this.props.users
                        .filter(user => user.photos.small !== null)
                        .map(user => (
                            <div className={style.users} key={user.id}>
                                <span className={style.user}>
                                    <div>
                                        <img
                                            className={style.avatar}
                                            src={user.photos.small ? user.photos.small : fagundes}
                                            alt={user.name || 'User Avatar'}
                                        />
                                    </div>
                                    <div className={style.button_wrapper}>
                                        {user.followed
                                            ? <button className={style.button} onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                            : <button className={style.button} onClick={() => this.props.follow(user.id)}>Follow</button>
                                        }
                                    </div>
                                </span>
                                <span className={style.user_dates}>
                                    <span className={style.date}>
                                        <div className={style.name}>{user.name}</div>
                                        <div className={style.status}>{user.status}</div>
                                    </span>
                                </span>
                            </div>
                        ))
                }
            </div>
        );
    }
}

export default Users;
