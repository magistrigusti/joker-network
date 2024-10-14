import React from 'react';
import style from './Users.module.css';
import mama from '../../img/radmila.png';
import masha from '../../img/masha.png';
import fagundes from '../../img/fogundes.png';
import saha from '../../img/sahajpg.jpg';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: mama, followed: false, fullName: 'Tatiana', status:  'i am a Mama', location: {city: 'Ivanovo', country: 'Russia'}},
            {id: 2, photoUrl: masha, followed: true, fullName: 'Maria', status:  'i am a Macha', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: saha, followed: false, fullName: 'Sacha', status:  'i am a Ganksta', location: {city: 'Holon', country: 'Israel'}},
            {id: 4, photoUrl: fagundes, followed: true, fullName: 'Anton', status:  'i am a GrandMaster pokers', location: {city: 'Minsk', country: 'Belarus'}},
        ])
    }

    return (
        <div>
            {
                props.users.map(user => (
                    <div className={style.users_wrapper} key={user.id}>
                        <span>
                            <div>
                                <img className={style.avatar} src={user.photoUrl} alt={user.fullName} /> {/* Добавлено src и alt */}
                            </div>
                            <div className={style.button_wrapper}>
                                <button className={style.button}>{user.followed ? <button  onClick={() => {props.unfollow(user.id)}}
                                >Unfollow</button> : 
                                <button onClick={() => {props.follow(user.id)}}
                                >Follow</ button>}</button> 
                            </div>
                        </span>
                        <span className={style.user_dates}>
                            <span className={style.date}>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span className={style.date}>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;
