import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount } from '../../redux/users-reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users || [],
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        setUsersTotalCount: state.usersPage.setUsersTotalCount
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCount(totalCount));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

