import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users || [] // Добавлен return
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

