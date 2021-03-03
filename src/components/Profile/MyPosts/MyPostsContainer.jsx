import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reduser copy";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let MapStateToProps=(state) => {
    return {

        posts:  state.profilePage.posts,
        newPostText: state.profilePage.NewPostText
    }
}
let MapDispatchToProps=(dispatch) => {
    return {

             addPost: (NewPostText) => {
        dispatch(addPostActionCreator(NewPostText));
    }
    }
}

const MyPostsContainer = connect(MapStateToProps,MapDispatchToProps)(MyPosts);

export default MyPostsContainer;


