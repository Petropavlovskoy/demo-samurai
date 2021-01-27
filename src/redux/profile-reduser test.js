import React from "react";
import profileReducer, {addPostActionCreator} from "./profile-reduser copy";
import App from "../App";

it('length of post should be incremented', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
    // 1. test data
    let action = addPostActionCreator("it-Kamasutra.com");
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };
    //2. action.
let newState = profileReducer(state, action);

// 3.expection
expect (newState.posts.length).toBe(5)
