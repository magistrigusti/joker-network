import React from 'react';
import style from './Users.module.css';
import fagundes from '../../img/fogundes.png';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize;  
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return (
                            <span
                                key={page}
                                className={this.props.currentPage === page ? style.selectedPage : undefined}
                                onClick={() => this.props.onPageChanged(page)}
                            >
                                {page}
                            </span>
                        );
                    })}
                </div>

                {
                    this.props.users.map(user => (
                            <div className={style.users_wrapper} key={user.id}>
                                <span>
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
        )
    }

}

export default Users;
