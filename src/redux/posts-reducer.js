const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const postsReducer = (state, action) => {

  if (action.type === ADD_POST) {

    let newPost = {
      id: 4,
      message: this._state.postsPage.newPostText,
      likeCount: 0
    };
    // state.postsPage.postsData.push(newPost);
    state.postsData.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
}