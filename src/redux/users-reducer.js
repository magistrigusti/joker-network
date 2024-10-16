
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        
    ],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                       return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_USERS: 
            return {
                ...state, 
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});

export default usersReducer;
