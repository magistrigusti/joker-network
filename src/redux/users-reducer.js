
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
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
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersTotalCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
