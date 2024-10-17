import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount } from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users/Users';

class UsersAPIComponent extends React.Component {

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
        return (
            <Users onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users || [],
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
