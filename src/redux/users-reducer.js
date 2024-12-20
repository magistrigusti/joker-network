import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: return {...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                       return {...user, followed: true};
                    }
                    return user;
                })}; 
        case UNFOLLOW: return {...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })};
        case SET_USERS: return {...state, users: action.users};
        case SET_CURRENT_PAGE: return {...state, currentPage: action.currentPage};
        case SET_USERS_TOTAL_COUNT: return {...state, totalUsersCount: action.count};
        case TOGGLE_IS_FETCHING: return {...state, isFetching: action.isFetching};
        case TOGGLE_IN_FOLLOWING_PROGRESS: 
            return {...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
    
        usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
        });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        const response = usersAPI.follow(userId);

        if (response.resultCode === 0) {
            dispatch(followSuccess((userId)));
        };

        dispatch(toggleFollowingProgress(false, userId));
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        const response = usersAPI.unfollow(userId);

        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }

        dispatch(toggleFollowingProgress(false, userId));
    }
}

export default usersReducer;
