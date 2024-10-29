// components/UsersContainer.jsx
import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress,
    setUsersTotalCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users/Users';
import Preloader from '../../components/common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users onPageChanged={this.onPageChanged}
                    users={this.props.users} 
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount} 
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users || [],
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress,
    };
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer);