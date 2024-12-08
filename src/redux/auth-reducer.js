const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null, 
  login: null,
  isAuth: true,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default: 
      return state;
  }
}

export const setAuthUserData = (userId, email, isAuth, login) => ({type: SET_USER_DATA, data: {userId, email, isAuth, login}});

export default authReducer;
