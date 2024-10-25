import { connect } from 'react-redux';
import { addPostTextActionCreator, updateNewPostTextActionCreator } from '../../redux/posts-reducer';
import Posts from './Posts';

let mapStateToProps = (state) => {
  return {
    posts: state.postsPage.postsData,
    newPostText: state.postsPage.newPostText,
    profile: state.profilePage.profileData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostTextActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
 