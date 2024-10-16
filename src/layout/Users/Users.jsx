import React from 'react';
import style from './Users.module.css';
import fagundes from '../../img/fogundes.png';
import axios from 'axios';

class Users extends React.Component{
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
            
        }
    }
    render () {
        return (
            <div>
            <button className={style.button_users} onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map(user => (
                    <div className={style.users_wrapper} key={user.id}>
                        <span>
                            <div>
                                <img className={style.avatar} src={user.photos.small != null ? user.photos.small : fagundes } alt={user.fullName} /> 
                            </div>
                            <div className={style.button_wrapper}>
                                <button className={style.button}>{user.followed ? <button className={style.button} onClick={() => {this.props.unfollow(user.id)}}
                                >Unfollow</button> : 
                                <button className={style.button} onClick={() => {this.props.follow(user.id)}}
                                >Follow</ button>}</button> 
                            </div>
                        </span>
                        <span className={style.user_dates}>
                            <span className={style.date}>
                                <div className={style.name}>{user.name}</div>
                                <div className={style.status}>{user.status}</div>
                            </span>
                            <span className={style.date}>
                                {/* <div className={style.country}>{user.location.country}</div> */}
                                {/* <div className={style.city}>{user.location.city}</div> */}
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